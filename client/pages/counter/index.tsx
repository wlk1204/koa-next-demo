import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

class A extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  addClick = () => {
    this.props.dispatch({
      type: 'add',
    })
  }

  lowclick = () => {
    this.props.dispatch({
      type: 'low',
    })
  }

  render() {
    return (
      <div>
        <div>计数器： {this.props.count}</div>
        <button onClick={this.addClick}>+</button>
        <button onClick={this.lowclick}>-</button>
        <li>
          <Link href='/about'>
            <a>跳转 about</a>
          </Link>
        </li>
      </div>
    )
  }
}

export default connect((state) => state.counter)(A)
