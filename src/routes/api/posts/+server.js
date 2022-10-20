import { fetchPosts } from '$lib/utils/getPosts.js'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchPosts()
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })
  return json(sortedPosts)
}
