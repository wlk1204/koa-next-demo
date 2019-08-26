import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const configureStore = (initialState, options) => {

  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true, traceLimit: 25,
      }) : compose

  const logger = createLogger({
    collapsed: true,
  })

  const middleware = [logger]

  return createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middleware),
  ))
}

export default configureStore
