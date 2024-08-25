---
title: "[draft] On stateless compute networks"
date: "August 25 2024"
---

On the topic of distributed systems and clustering,
I am quite invested in the idea of compute nodes that rely entirely on the network for configuration.
Arbitrary nodes can join a pre-existing cluster,
offering their CPU time and memory for computation without relying on any pre-existing configuration on the node itself.
In other words, any computer could pick up work,
only needing power and a network connection to the cluster.

Perhaps this eventually leads into a "self-healing" cluster where only one node is manually bootstrapped,
which then serves a _configuration endpoint_ for other stateless nodes to reach out to for their instructions,
which they will then also serve once they are themselves ready.

Early revisions of these notes mention Kubernetes,
but know that I am also trying to achieve similar results with NixOS or a custom project.
In any case, these are my ever-updating notes towards a general implementation of a stateless distributed systems architecture.
