import React, { useState, useRef } from "react";
import { useDrop } from "react-dnd";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button } from "antd";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import ReactEcharts from "echarts-for-react";
import { GeneratorInboard } from "../common/generator";
import { templates } from "../common/template_data";
import Box from "./Box";
import { selectCurrentComp } from "../../redux/epics/editor";

import styles from "./style.scss";

interface BoardProps {
  dispatch: any;
}

const Board: React.FC<any> = (props) => {
  // 目标数据
  const [dataList, setDataList] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const boardRef = useRef(null);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "comp",
    options: {},
    drop: (item, monitor) => {
      const board = boardRef.current.getBoundingClientRect();
      const itemClientOffset = monitor.getSourceClientOffset();
      const newItem = {
        ...item,
        x: itemClientOffset.x - board.x,
        y: itemClientOffset.y - board.y,
      };
      dataList.push(newItem);
      setDataList(dataList);
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

  const onItemClick = (config) => {
    props.dispatch(
      selectCurrentComp({
        compData: config,
      })
    );
  };

  return (
    <div className={styles.editorPanel} ref={boardRef}>
      <div className={styles.board} ref={drop} style={{ backgroundColor }}>
        {dataList.map((item, key) => {
          const template = templates.filter((x) => x.id === item.id)[0];
          return (
            <Box
              key={key}
              onClick={onItemClick.bind(this, template)}
              style={{
                position: "absolute",
                width: template.style.width,
                height: template.style.height,
                left: item.x,
                top: item.y,
              }}
            >
              <GeneratorInboard currentElement={template} />
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default connect((state: any) => state.editor)(Board);
