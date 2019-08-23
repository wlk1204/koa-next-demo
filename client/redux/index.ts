import { createStore } from 'redux'
import reducers from './reducers'

const makeStore = (initialState, options) => {
  console.log('===', initialState)
  return createStore(reducers, initialState)
}

export default makeStore
