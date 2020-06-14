import React from "react";
import Button from "../../components/Button";
import styles from "./style.scss";

const A = () => {
  return (
    <div className={styles.box}>
      <Button size="large" color="blue" text="搜索" />
    </div>
  );
};

export default A;
