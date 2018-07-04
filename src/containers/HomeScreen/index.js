import React from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import Spinner from "react-native-loading-spinner-overlay"
import { fetchPosts } from "../../core/actions"
import BlogPostsList from "./components/BlogPostsList"
import styles from "./styles"

export class HomeScreen extends React.Component {
  componentDidMount() {
    const { fetchPostsEpic } = this.props
    fetchPostsEpic()
  }

  render() {
    const { posts } = this.props
    return (
      <View>
        <Spinner visible={posts.length === 0} overlayColor="rgba(230, 230, 230, 0.5)" />
        <Text style={styles.header}>Homepage</Text>
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
  mapDispatchToProps,
)(HomeScreen)
