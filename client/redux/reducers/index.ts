import { combineReducers } from 'redux'
import counter from './counter'
import about from './about'

export default combineReducers({
  ...counter,
  ...about,
})
