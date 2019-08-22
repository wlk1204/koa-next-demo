import React from 'react'
import App, { Container } from 'next/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

const reducer = (state = {foo: ''}, action) => {
  switch (action.type) {
    case 'FOO':
      return {...state, foo: action.payload}
    default:
      return state
  }
}

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState)
}

class MyApp extends App<any, any> {

  static async getInitialProps({ Component, ctx }) {

    // we can dispatch from here too
    ctx.store.dispatch({type: 'FOO', payload: '啊啊啊啊啊'})

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  state = {
    name: 'wanglk',
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} {...this.state} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
