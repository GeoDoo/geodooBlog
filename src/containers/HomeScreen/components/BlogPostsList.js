import React from 'react'
import BlogPostsListItem from './BlogPostsListItem'

export default ({ posts }) => posts.map(post => <BlogPostsListItem key={post.id} post={post} />)
