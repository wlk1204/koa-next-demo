import React, { useState } from "react";

const Box: React.FC<any> = (props) => {
  const { children } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return <div {...props}>{children}</div>;
};

export default Box;
