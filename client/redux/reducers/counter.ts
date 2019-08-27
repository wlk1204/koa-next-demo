import * as types from '../actionTypes'

const initState = {
  count: 0,
}

const counter = (state = initState, action) => {
  switch (action.type) {
    case types.ADD:
      return {...state, count: state.count + 1}
    case types.LOW:
      return {...state, count: state.count - 1}
    case types.START:
        return {...state, count: state.count + 2}
    default:
      return state
  }
}

export default {
  counter,
}
