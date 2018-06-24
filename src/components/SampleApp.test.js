import React from 'react'
import { shallow } from 'enzyme'
import SampleApp from './SampleApp'

describe('SampleApp', () => {
  test('should render without crashing', () => {
    shallow(<SampleApp />)
  })
})
