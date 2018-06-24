import React from 'react'
import {
  Text, View,
} from 'react-native'
import BlogPostsList from './components/BlogPostsList'
import styles from './styles'

export default () => (
  <View>
    <Text style={styles.header}>
      Homepage
    </Text>
    <BlogPostsList />
  </View>
)
