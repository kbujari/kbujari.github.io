import { execSync } from "child_process";

export const SITE = {
  author: "Kleidi Bujari",
  description: "Minimal blog, portfolio and personal website.",
  title: "Kleidi Bujari",
};

export const COMMIT = {
  sha: execSync("git rev-parse --short HEAD").toString().trim(),
  date: Date.now(),
};
