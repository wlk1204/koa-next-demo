import React, { useState, useCallback } from "react";
import { Icon } from "antd";
import { FormOutlined } from "@ant-design/icons";
import CompSetting from "./CompSetting";
import styles from "./style.scss";

const RightView = () => {
  const [currentSettingPanel, setCurrentSettingPanel] = useState(1);

  const isActive = (index) => {
    if (index === currentSettingPanel) {
      return styles.active;
    }
    return "";
  };

  const handleClick = (num) => {
    setCurrentSettingPanel(num);
  };

  return (
    <div className={styles.rightView}>
      <div className={styles.tab}>
        <ul>
          <li
            title="组件配置"
            onClick={() => handleClick(1)}
            className={isActive(1)}
          >
            <FormOutlined />
            组件配置
          </li>
          <li
            title="页面配置"
            onClick={() => handleClick(2)}
            className={isActive(2)}
          >
            页面配置
          </li>
        </ul>
      </div>
      <div className={`${styles.settingPanel} modSettingPanel`}>
        <div className={`${styles.panel} ${isActive(0)}`}>选中元素配置...</div>
        <div className={`${styles.panel} ${isActive(1)}`}>
          <CompSetting />
        </div>
        <div className={`${styles.panel} ${isActive(2)}`}>
          <CompSetting />
        </div>
      </div>
    </div>
  );
};

export default RightView;
