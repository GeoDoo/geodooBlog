import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './src/core/reducers'
import SampleApp from './src/components/SampleApp'

const store = createStore(reducers)

export default () => (
  <Provider store={store}>
    <SampleApp />
  </Provider>
)
