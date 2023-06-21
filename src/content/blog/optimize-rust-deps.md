---
title: 'Improving Rust dev builds'
description: 'Quick tip for Rust development builds to apply optimizations to cargo dependencies, making use of incremental compilations.'
pubDate: 'Feb 1 2022'
---

Easily adding dependencies to projects is one of my favourite parts about using Rust, simply adding a library to your Cargo.toml or using the new [cargo add](https://doc.rust-lang.org/cargo/commands/cargo-add.html) subcommand is all you need to get up and running. Dependencies will be compiled alongside your code using the global optimization level you specify when using cargo (such as building with --release), but did you know you could mix opt-level within the same profile? With the magic of incremental builds, compiling your dependencies only once with full optimizations will cache them for all future builds since you are likely not changing the versions often.

You can enable compiling your dependencies with any opt-level even for dev builds by adding the following to your Cargo.toml:

```toml
[profile.dev.package."*"]
opt-level = 2
```

Without any real downsides other than a longer initial build when using a high opt-level like 3, you now have faster and more efficient dev builds for your code.
