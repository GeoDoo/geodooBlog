import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { fetchPosts } from '../../core/actions'
import BlogPostsList from './components/BlogPostsList'

export class HomeScreen extends React.Component {
  componentDidMount() {
    const { fetchPostsEpic } = this.props
    fetchPostsEpic()
  }

  render() {
    const { posts } = this.props
    return (
      <View>
        <Spinner
          visible={posts.length === 0}
          textContent="Loading..."
          color="#dd9933"
          overlayColor="rgba(240, 240, 240, 0.5)"
        />
        <BlogPostsList posts={posts} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = {
  fetchPostsEpic: fetchPosts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
