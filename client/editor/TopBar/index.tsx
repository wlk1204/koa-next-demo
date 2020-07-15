import React from "react";
import Link from "next/link";
import BarSavePage from "./BarSavePage";
import BarEditConfig from "./BarEditConfig";
import BarPreview from "./BarPreview";
import styles from "./style.scss";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Link href="/">
          <a> 可视化大屏编辑器</a>
        </Link>
      </div>

      <div className={styles.menu}>
        <BarEditConfig />
        <BarSavePage />
        <BarPreview />
      </div>
    </div>
  );
};

export default TopBar;
