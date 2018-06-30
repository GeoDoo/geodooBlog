import { combineEpics } from 'redux-observable'
import fetchPostsEpic from './fetchPosts'

export default combineEpics(
  fetchPostsEpic,
)
