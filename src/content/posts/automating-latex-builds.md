---
title: "CI/CD for a LaTeX Git repository"
description: "Using GitHub Actions CI to build LaTeX projects with automatic tagging and releases."
pubDate: "July 29 2023"
tags:
  - CI/CD
  - Actions
  - LaTeX
---

After managing a few documents I realized the benefit in proper version control and CI/CD
can also be applied to LaTeX projects. Using GitHub features like pull requests and CI
testing as well as building and serving PDFs with releases allows for stricter adherence
to your project's standards and facilitates faster development.

While there are plenty of guides that already accomplish this, I wanted to showcase a
modification I made that makes use of [mathieudutour/github-tag-action][repo link] to
create a new tag for each commit I push, bypassing the need to explicitly tag commits.
Usually, this isn't good practice to promote with git, however, for private projects
done alone, I prefer to prioritize faster iteration rather than always conforming to best
practices.

[repo link]: https://github.com/mathieudutour/github-tag-action

The result:

```yaml
name: Build LaTex

on:
  workflow_dispatch:
  push:
    paths: src/*

concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Bump version and tag
        id: tagver
        uses: mathieudutour/github-tag-action@v6.1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - uses: actions/checkout@v3
      - uses: xu-cheng/latex-action@v2
        with:
          root_file: src/main.tex

      - name: Create release
        id: create
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ steps.tagver.outputs.new_tag }}
          release_name: autobuild-${{ steps.tagver.outputs.new_tag }}
          draft: false
          prerelease: false

      - name: Upload PDF to release
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.create.outputs.upload_url }}
          asset_path: main.pdf
          asset_name: main.pdf
          asset_content_type: application/pdf
```
