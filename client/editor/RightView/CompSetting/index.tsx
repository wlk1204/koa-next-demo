import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import styles from "./index.scss";

const CompSetting = (props) => {
  console.log("=========", props.compData);
  return (
    <>
      <p>{JSON.stringify(props.compData)}</p>
      <Button>32</Button>
    </>
  );
};

export default connect((state: any) => state.editor)(CompSetting);
