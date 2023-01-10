// import BLOG from '@/blog.config'
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export default function filterPublishedPosts ({ posts, includePages }) {
  if (!posts || !posts.length) return []
  console.log('filter2',posts
    .filter(post =>
      includePages
        ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
        : post?.type?.[0] === 'Post'
    ))
  console.log('filter1',posts
    .filter(post => {
      const postDate = new Date(
        post?.date?.start_date || post.createdTime
      )
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        postDate < tomorrow
      )
    }))
  const publishedPosts = posts
    .filter(post =>
      includePages
        ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
        : post?.type?.[0] === 'Post'
    )
    .filter(post => {
      const postDate = new Date(
        post?.date?.start_date || post.createdTime
      )
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        postDate < tomorrow
      )
    })
  return publishedPosts
}
