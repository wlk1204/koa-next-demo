import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import reducers from './reducers'
import { rootEpic } from './epics'

const configureStore = (initialState) => {

  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true, traceLimit: 25,
      }) : compose

  const epicMiddleware = createEpicMiddleware()

  const logger = createLogger({
    collapsed: true,
  })

  const middleware = [epicMiddleware, logger]

  const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middleware),
  ))

  epicMiddleware.run(rootEpic)

  return store
}

export default configureStore
