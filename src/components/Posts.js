import React, { PropTypes } from 'react'

const Posts = ({posts}) => (
  <ul>
    {posts.map((post, i) =>
      <li key={i}><a href="https://www.reddit.com/r/all">{post.title}</a></li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts