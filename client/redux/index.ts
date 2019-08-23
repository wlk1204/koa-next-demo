import { createStore } from 'redux'
import reducers from './reducers'

const makeStore = (initialState, options) => {
  return createStore(reducers, initialState)
}

export default makeStore
