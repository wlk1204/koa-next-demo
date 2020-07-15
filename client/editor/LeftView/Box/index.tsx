import React from "react";
import styles from "./styls.scss";
import { Generator } from "../../common/generator";

interface IBoxProps {
  data: any;
}

const Box: React.FC<IBoxProps> = (props) => {
  const { data } = props;

  return (
    <div className={styles.box}>
      <Generator currentElement={data} />
      <p>{data.name}</p>
    </div>
  );
};

export default Box;
