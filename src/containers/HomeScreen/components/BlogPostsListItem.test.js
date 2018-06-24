import React from 'react'
import { shallow } from 'enzyme'
import BlogPostsListItem from './BlogPostsListItem'

describe('BlogPostsListItem', () => {
  test('should render without crashing', () => {
    shallow(<BlogPostsListItem />)
  })
})
