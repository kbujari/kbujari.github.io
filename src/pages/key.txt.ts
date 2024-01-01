import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const key = await fetch("https://github.com/kbujari.gpg");
  return new Response(await key.text());
};
