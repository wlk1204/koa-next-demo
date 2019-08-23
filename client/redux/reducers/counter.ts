const initState = {
  count: 0,
}

const counter = (state = initState, action) => {
  let { count } = state
  switch (action.type) {
    case 'add':
      count++
      return {...state, count}
    case 'low':
      count--
      return {...state, count}
    default:
      return state
  }
}

export default {
  counter,
}
