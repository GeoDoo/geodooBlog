import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { fetchPostsSuccess, fetchPostsFailure } from "../actions"
import { FETCH_POSTS, FETCH_POSTS_FAILURE } from "../actions/types"

const fetchPosts = action$ =>
  action$.pipe(
    ofType(FETCH_POSTS),
    mergeMap(() =>
      fetch("https://geodoo.work/wp-json/wp/v2/posts")
        .then(response => (response.ok ? response.json() : fetchPostsFailure()))
        .then(result => (result.type === FETCH_POSTS_FAILURE ? result : fetchPostsSuccess(result)))
        .catch(() => fetchPostsFailure()),
    ),
  )

export default fetchPosts
