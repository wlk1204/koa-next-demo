import React, { useState, useEffect } from "react";
import { Button } from "antd";
import styles from "./style.scss";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Board } from "../../components/Board";
import { Template } from "../../components/templates";

const Dashboard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.dashboard}>
        <div className={styles.template}>
          <Template />
        </div>
        <Board />
      </div>
    </DndProvider>
  );
};

export default Dashboard;
