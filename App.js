import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'

import epics from './src/core/epics'
import reducers from './src/core/reducers'
import Home from './src/containers/HomeScreen'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  )

  epicMiddleware.run(epics)

  return store
}

export default () => (
  <Provider store={configureStore()}>
    <Home />
  </Provider>
)
