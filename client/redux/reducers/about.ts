const initState = {
  foo: 'o',
}

const about = (state = initState, action) => {
  switch (action.type) {
    case 'FOO':
      return {...state, foo: action.payload}
    default:
      return state
  }
}

export default {
  about,
}
