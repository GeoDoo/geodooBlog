import React from 'react'
import { shallow } from 'enzyme'
import BlogPostsList from './BlogPostsList'

describe('BlogPostsList', () => {
  test('should render without crashing', () => {
    shallow(<BlogPostsList />)
  })
})
