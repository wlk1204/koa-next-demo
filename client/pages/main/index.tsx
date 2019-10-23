import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

import * as actions from '../../redux/actions'

class A extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  addClick = async () => {
    this.props.dispatch(actions._add())
  }

  lowclick = () => {
    this.props.dispatch(actions._low())
  }

  startAdd = () => {
    this.props.dispatch(actions._start())
  }

  endAdd = () => {
    this.props.dispatch(actions._end())
  }

  render() {
    return (
      <div>
        <div>计数器： {this.props.count}</div>
        <Button onClick={this.addClick}>+</Button>
        <Button onClick={this.lowclick}>-</Button>
        <Button type='primary' onClick={this.startAdd}>start</Button>
        <Button onClick={this.endAdd}>end</Button>
      </div>
    )
  }
}

export default connect((state) => state.counter)(A)
