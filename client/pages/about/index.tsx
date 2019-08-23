import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

class B extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  click = () => {
    this.props.dispatch({
      type: 'FOO',
      payload: '🐷',
    })
  }

  render() {
    return (
      <div>
        <div className='title'>Hello World {this.props.foo}</div>
        <button onClick={this.click}>ok</button>
      </div>
    )
  }
}

export default connect((state) => state.about)(B)
