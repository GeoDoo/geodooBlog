import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './src/core/reducers'
import HomeScreen from './src/containers/HomeScreen'

const store = createStore(reducers)

export default () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
)
