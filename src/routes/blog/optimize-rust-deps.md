---
title: 'Enabling Rust compiler optimizations for dev builds'
date: '2023-02-01'
imgurl: '/blog/optimize-rust-deps/rocket.jpg.webp'
topics: 'Rust Short'
---

Easily adding dependencies to projects is one of my favourite parts about using Rust, simply adding a library to your Cargo.toml or using the new [cargo add](https://doc.rust-lang.org/cargo/commands/cargo-add.html) subcommand is all you need to get up and running. Dependencies will be compiled alongside your code using the global optimization level you specify when using cargo (such as building with --release), but did you know you could mix opt-level within the same profile? With the magic of incremental builds, compiling your dependencies only once with full optimizations will cache them for all future builds since you are likely not changing the versions often.

You can enable compiling your dependencies with any opt-level even for dev builds by adding the following to your Cargo.toml:

```toml
[profile.dev]
opt-level = 1

[profile.dev.package."*"]
opt-level = 3
```

Without any real downsides other than a longer initial build when using a high opt-level like 3, you now have more efficient code for use with your program.
