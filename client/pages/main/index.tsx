import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import styles from "./style.scss";
import {
  increment,
  decrement,
  autoIncrement,
  autoStop,
} from "../../redux/epics/counter";

interface AProps {
  dispatch: any;
  count: number;
}

class A extends React.Component<AProps, any> {
  constructor(props) {
    super(props);
  }

  addClick = async () => {
    this.props.dispatch(increment({ count: 20 }));
  };

  lowclick = () => {
    this.props.dispatch(decrement());
  };

  startAdd = () => {
    this.props.dispatch(autoIncrement());
  };

  endAdd = () => {
    this.props.dispatch(autoStop());
  };

  render() {
    return (
      <div className={styles.main}>
        <div>计数器： {this.props.count}</div>
        <Button onClick={this.addClick}>+</Button>
        <Button onClick={this.lowclick}>-</Button>
        <Button type="primary" onClick={this.startAdd}>
          start
        </Button>
        <Button onClick={this.endAdd}>stop</Button>
      </div>
    );
  }
}

export default connect((state: any) => state.counter)(A);
