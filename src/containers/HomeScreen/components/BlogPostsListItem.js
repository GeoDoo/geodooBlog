import React from "react"
import { Text, View } from "react-native"
import styles from "../styles"

export default ({ post }) => (
  <View>
    <Text style={styles.listItem}>{post ? post.title.rendered : null}</Text>
  </View>
)
