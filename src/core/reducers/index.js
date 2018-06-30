import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions/types'

const initState = {
  posts: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload.posts,
      }
    case FETCH_POSTS_FAILURE:
      return initState
    default:
      return state
  }
}
