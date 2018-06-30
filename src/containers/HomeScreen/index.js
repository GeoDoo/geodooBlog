import React from 'react'
import {
  Text, View, Button,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchPosts } from '../../core/actions'
import BlogPostsList from './components/BlogPostsList'
import styles from './styles'

export const HomeScreen = props => (
  <View>
    <Text style={styles.header}>
      Homepage
    </Text>
    <Button
      title="Fetch posts"
      onPress={props.fetchPosts}
    />
    <BlogPostsList posts={props.posts} />
  </View>
)

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = {
  fetchPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
