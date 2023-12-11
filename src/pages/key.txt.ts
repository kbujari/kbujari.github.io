import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const key = await fetch("https://github.com/knbu.gpg");
  return new Response(await key.text());
};
