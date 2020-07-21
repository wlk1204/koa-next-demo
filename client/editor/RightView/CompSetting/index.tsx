import React from "react";
import { Button, InputNumber } from "antd";
import { connect } from "react-redux";
import styles from "./index.scss";
import { changeBoardComps } from "../../../redux/epics/editor";

// 修改元数据
const modifyData = (boardComps, currentComps) => (name) => (value) => {
  return boardComps.reduce((a, b) => {
    if (b.id === currentComps.id) {
      b.style[name] = value;
    }
    return [...a, b];
  }, []);
};

const CompSetting = (props) => {
  const { currentComps, dispatch, boardComps } = props;

  const onWidthChange = (value) => {
    const lastData = modifyData(boardComps, currentComps)("width")(value);
    toDispatch(lastData);
  };

  const onHeightChange = (value) => {
    const lastData = modifyData(boardComps, currentComps)("height")(value);
    toDispatch(lastData);
  };

  const onXChange = (value) => {
    const lastData = modifyData(boardComps, currentComps)("left")(value);
    toDispatch(lastData);
  };

  const onYChange = (value) => {
    const lastData = modifyData(boardComps, currentComps)("top")(value);
    toDispatch(lastData);
  };

  const toDispatch = (data) => {
    dispatch(
      changeBoardComps({
        boardComps: data,
      })
    );
  };

  return (
    <>
      {currentComps && (
        <>
          {currentComps.name}
          <br />
          {"宽度："}
          <InputNumber
            size="small"
            min={1}
            max={1920}
            value={currentComps.style.width}
            onChange={onWidthChange}
          />
          {"高度："}
          <InputNumber
            size="small"
            min={1}
            max={1080}
            value={currentComps.style.height}
            onChange={onHeightChange}
          />
          <br />
          {"左边距："}
          <InputNumber
            size="small"
            min={1}
            max={1920}
            value={currentComps.style.left}
            onChange={onXChange}
          />
          {"上边距："}
          <InputNumber
            size="small"
            min={1}
            max={1080}
            value={currentComps.style.top}
            onChange={onYChange}
          />
        </>
      )}
    </>
  );
};

export default connect((state: any) => state.editor)(CompSetting);
