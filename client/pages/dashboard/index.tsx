import React, { useState, useEffect } from "react";
import { Button } from "antd";
import styles from "./style.scss";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Board } from "../../editor/Board";
import TopBar from "../../editor/TopBar";
import LeftView from "../../editor/LeftView";
import RightView from "../../editor/RightView";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <DndProvider backend={HTML5Backend}>
        <TopBar />
        <Board />
        <LeftView />
        <RightView />
      </DndProvider>
    </div>
  );
};

export default Dashboard;
