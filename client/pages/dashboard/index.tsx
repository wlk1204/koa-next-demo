import React, { useState, useEffect } from "react";
import { Button } from "antd";
import styles from "./style.scss";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Board } from "../../editor/Board";
import TopBar from "../../editor/TopBar";
import LeftView from "../../editor/LeftView";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <DndProvider backend={HTML5Backend}>
        <LeftView />
        <TopBar />
        <Board />
      </DndProvider>
    </div>
  );
};

export default Dashboard;
