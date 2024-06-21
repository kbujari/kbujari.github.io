---
title: "[draft]: One image, many workers"
date: "April 20 2024"
---

As part of building out a Kubernetes cluster, I wanted to build and distribute a
single OS image to create stateless worker nodes. Using network booting, and
some clever tricks to differentiate nodes, we can create a scaleable and
efficient farm of workers for a cluster that don't even need disks.

The idea came from a plan to build a cluster using the
[compute blade](https://computeblade.com/), and a few Raspberry Pi SBCs I
already own. Running the cluster from an SD card is not recommended due to the
not-so-great reliability of the flash used by most manufacturers, so I wanted to
try PXE booting each Pi to save money rather than purchasing an SSD for each
one. The compute blades do support an NVMe disk, but I plan to use those for a
CEPH cluster later, so they need to remain empty.

## Base image

Alpine Linux has been my preferred server OS for a long time. It provides a very
lightweight base system, and bundles an excellent bootstrapping system,
[apkovl](https://wiki.alpinelinux.org/wiki/Alpine_local_backup), that allows the
user to save a set of customisations to an system as an overlay to a stock
Alpine live image. In other words, we can create our image once, save the
changes as an `apkovl.tar.gz` file, and apply the same changes to a base system
on boot. This file can even be provided as a
[kernel parameter](https://wiki.alpinelinux.org/wiki/PXE_boot#Guide_to_options)
and will be fetched from a remote webserver automatically!

Since the image and configuration will be shipped to the node via the network,
an added benefit of using Alpine is its tiny space consumption. I'm not using
enough nodes for this to really matter, but it's a cool optimization regardless.

## Differentiating the nodes

One of the main goals of this project is that there should be no persistent
storage required outside the boot image itself. Since every node will download
and generate the same root file-system on startup, the first problem that arises
is how the nodes will identify themselves both on the network and the cluster,
given that it's not possible to name them ahead of time. In other words, any
given node has to generate a unique hostname that won't collide with other
workers, and that will be the same each time that node boots.

Since these nodes will not have a predefined name, we have to rely on
characteristics of the hardware to differentiate each one. The hardware MAC
address is perfect for this, since it's unique to to each node and will not be
wiped away after the node reboots. On a system like Linux that exposes its
hardware through a _sysfs_, we can find a file containing the address at
`/sys/class/net/eth0/address`. I don't really like the idea of attaching the
literal MAC address of the node to its network hostname, since it's a security
risk, and a bit too verbose. Instead, we can transform it into something safer
using a `sha1sum`, which is already present on our Alpine base system:

```console
sha1sum /sys/class/net/eth0/address | head -c 6 | awk '{print "worker-" $0}'
```

The VM I tested with looks outputs `worker-e2fae8`. Pretty clean result, and if
you want to know the physical node that maps to each hostname, you can take note
of the MAC address beforehand and generate the same hash on another computer to
match them up.

### Applying the new name

Ideally, the node should apply its generated hostname before reaching out for an
address over DHCP or joining the cluster. We can make sure it happens before any
traffic is sent out by adding a `pre-up` command to the right interface in
`/etc/network/interfaces`:

```

...

auto eth0
iface eth0 inet dhcp
    pre-up sha1sum /sys/class/net/eth0/address | head -c 6 | awk '{print "worker-" $0}' > /etc/hostname

...
```

## Getting K8S

Now that the node is running a live system with networking, the next step in the
chain for a real worker node is to join the cluster. In the spirit of Alpine and
minimal resource usage, I decided to use popular <https://k3s.io> as the
kubernetes distribution for my cluster. K3s is distributed as a fairly simple
[sh script](https://get.k3s.io), which seems to detect the type of system it's
running on and fetch the binary from the latest GitHub release.
