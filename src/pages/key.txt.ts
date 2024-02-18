import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const key = await fetch("https://github.com/kbujari.gpg").then((body) =>
    body.text(),
  );

  return new Response(key);
};
