import React, { useState, useRef } from "react";
import { useDrop } from "react-dnd";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button, Slider } from "antd";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import ReactEcharts from "echarts-for-react";
import { GeneratorInboard } from "../common/generator";
import { templates } from "../common/template_data";
import Box from "./Box";
import { selectCurrentComp, changeBoardComps } from "../../redux/epics/editor";

import styles from "./style.scss";

interface BoardProps {
  dispatch: any;
}

const Board: React.FC<any> = (props) => {
  // 目标数据
  const [dataList, setDataList] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  // 面板比例调整
  const [scale, setScale] = useState(0.6);

  const boardRef = useRef(null);

  const { boardComps, dispatch } = props;

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "comp",
    options: {},
    drop: (item: any, monitor) => {
      const board = boardRef.current.getBoundingClientRect();
      const itemClientOffset = monitor.getSourceClientOffset();

      // 拿到当前元素信息
      const current: any = templates.filter((x) => x.id === item.id)[0];
      current.style = {
        ...current.style,
        left: itemClientOffset.x - board.x,
        top: itemClientOffset.y - board.y,
      };

      dataList.push(current);
      setDataList(dataList);
      dispatch(
        changeBoardComps({
          boardComps: dataList,
        })
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  let backgroundColor = "#eee";
  if (isActive) {
    backgroundColor = "#c8bf52";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  const onItemClick = (config, a) => {
    dispatch(
      selectCurrentComp({
        currentComps: config,
      })
    );
  };

  return (
    <div className={styles.editorPanel} ref={boardRef}>
      <div
        className={styles.board}
        ref={drop}
        style={{ backgroundColor, transform: `scale(${scale})` }}
      >
        {boardComps.map((item, key) => {
          return (
            <Box
              key={key}
              onClick={onItemClick.bind(this, item)}
              style={{
                position: "absolute",
                ...item.style,
              }}
            >
              <GeneratorInboard currentElement={item} />
            </Box>
          );
        })}
      </div>
      <div className={styles.slider}>
        {"面板大小："}
        <Slider
          defaultValue={0.6}
          step={0.1}
          max={1}
          min={0.1}
          tipFormatter={(v) => `${~~(v * 100)}%`}
          onChange={(x) => setScale(x)}
        />
      </div>
    </div>
  );
};

export default connect((state: any) => state.editor)(Board);
