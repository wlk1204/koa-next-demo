import React, { useState, useCallback } from "react";
import styles from "./style.scss";
import { templates } from "../common/template_data";
import Box from "./Box";

const LeftView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerMouseEnter = () => {
    setIsOpen(true);
  };
  const handleDrawerMouseLeave = () => {
    setIsOpen(false);
  };

  const stylesDrawerOpen = isOpen ? styles.active : "";

  return (
    <div className={styles.leftView}>
      <div className={styles.menu}>
        <div
          className={styles.add}
          onMouseEnter={handleDrawerMouseEnter}
          onMouseLeave={handleDrawerMouseLeave}
        >
          <i className="icms icms-plus-circle" />
          添加图表
        </div>
      </div>
      <div
        className={`${styles.drawer} ${stylesDrawerOpen}`}
        onMouseEnter={handleDrawerMouseEnter}
        onMouseLeave={handleDrawerMouseLeave}
      >
        {templates.map((item) => {
          return <Box data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default LeftView;
