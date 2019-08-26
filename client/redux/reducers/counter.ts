const ADD = 'add'
const LOW = 'low'

const initState = {
  count: 0,
}

const counter = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {...state, count: state.count + 1}
    case LOW:
      return {...state, count: state.count - 1}
    default:
      return state
  }
}

export default {
  counter,
}
