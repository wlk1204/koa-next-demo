import React from 'react'
import { connect } from 'react-redux'

class A extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  click = () => {
    this.props.dispatch({
      type: 'FOO',
      payload: 'oooo',
    })
  }

  render() {
    return (
      <div>
        <div>Hello World {this.props.foo}</div>
        <button onClick={this.click}>ok</button>
      </div>
    )
  }
}

export default connect((state) => state)(A)
