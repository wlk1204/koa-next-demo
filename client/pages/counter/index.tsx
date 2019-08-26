import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { Button } from 'antd'

class A extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  addClick = () => {
    const { dispatch } = this.props
    dispatch(add())

    function add() {
      return dispatch => {
        setTimeout(() => {
          dispatch({
            type: 'add'
          })
        }, 1000)
      }
    }
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
        <Button onClick={this.addClick}>+</Button>
        <Button onClick={this.lowclick}>-</Button>
        <li>
          <Link href='/antd'>
            <a>跳转 antd</a>
          </Link>
        </li>
      </div>
    )
  }
}

export default connect((state) => state.counter)(A)
