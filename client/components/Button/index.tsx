import React from "react";
import classnames from "classnames";
import styles from "./style.scss";

interface IProps {
  size?: "small" | "middle" | "large";
  color?: "blue" | "red";
  text?: string;
}

const Button = (props: IProps) => {
  const { size = "middle", color = "blue", text = "Button" } = props;

  return (
    <button
      className={classnames({
        [styles[`btn`]]: true,
        [styles[`btn-${color}`]]: true,
        [styles[`btn-${size}`]]: true,
      })}
    >
      {text}
    </button>
  );
};

export default Button;
