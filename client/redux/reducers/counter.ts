import { createAction, handleActions, combineActions, createActions } from 'redux-actions'

const initState = {
  count: 0,
}

const INCREMENT = '$INCREMENT'
const DECREMENT = '$DECREMENT'
const AUTOINCREMENT = '$AUTOINCREMENT'
const STOPINCREMENT = '$STOPINCREMENT'

export const $increment = createAction(INCREMENT)
export const $decrement = createAction(DECREMENT)
export const $autoIncrement = createAction(AUTOINCREMENT)
export const $autoStop = createAction(STOPINCREMENT)

const counter = handleActions({
  [INCREMENT]: (state, action) => {
    return { ...state, count: state.count + 1 }
  },
  [DECREMENT]: (state, action) => {
    return { ...state, count: state.count - 1 }
  },
  [AUTOINCREMENT]: (state, action) => {
    return { ...state, count: state.count + 2 }
  },
  [STOPINCREMENT]: (state, action) => {
    return { ...state, count: state.count }
  },
}, initState)

export default {
  counter,
}
