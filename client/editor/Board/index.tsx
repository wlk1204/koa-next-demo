import React, { useState, useRef } from "react";
import { useDrop } from "react-dnd";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button } from "antd";
import ReactEcharts from "echarts-for-react";
import { GeneratorInboard } from "../common/generator";
import { templates } from "../common/template_data";

import styles from "./style.scss";

const style: React.CSSProperties = {
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

export const Board: React.FC = () => {
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

  // console.log("====== dataList", dataList);

  const onLayoutChange = async (newLayout) => {};

  const onItemClick = (e) => {};

  return (
    <div className={styles.editorPanel} ref={boardRef}>
      <div
        className={styles.board}
        ref={drop}
        style={{ ...style, backgroundColor }}
      >
        <GridLayout
          className={styles.gridLayout}
          rowHeight={1}
          compactType={null}
          style={{ height: "100%" }}
          onResizeStart={() => setIsDragging(true)}
          onResizeStop={() => setIsDragging(false)}
          isDragging={isDragging}
          onLayoutChange={onLayoutChange}
          cols={100}
          width={800}
        >
          {dataList.map((item, key) => {
            const template = templates.filter((x) => x.id === item.id)[0];
            return (
              <div
                key={key}
                data-grid={{ x: 0, y: 0, w: 50, h: 30 }}
                onClick={onItemClick}
                // style={{ position: "absolute", left: item.x, top: item.y }}
              >
                <GeneratorInboard currentElement={template} />
              </div>
            );
          })}
        </GridLayout>
      </div>
    </div>
  );
};
