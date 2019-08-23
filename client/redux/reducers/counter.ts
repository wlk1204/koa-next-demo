const initState = {
  count: 0,
}

const counter = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return {...state, count: state.count + 1}
    case 'low':
      return {...state, count: state.count - 1}
    default:
      return state
  }
}

export default {
  counter,
}
