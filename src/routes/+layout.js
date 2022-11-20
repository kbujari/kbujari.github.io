export const prerender = true
//export const ssr = false

export const load = ({ url }) => {
  const currentRoute = url.pathname
  return { currentRoute }
}
