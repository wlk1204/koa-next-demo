import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import DragImg from "../../components/Image";

const A = () => {
  const canvas1 = useRef<HTMLCanvasElement>(null);

  let image = null;
  useEffect(() => {
    image = new DragImg(canvas1.current);
  });

  const zoomBig = () => {
    image.zoomBig();
  };

  const zoomSmall = () => {
    image.zoomSmall();
  };

  const rotate = () => {
    image.rotate();
  };

  return (
    <div>
      <canvas ref={canvas1} width={300} height={300}></canvas>
      <Button onClick={zoomBig}>放大</Button>
      <Button onClick={zoomSmall}>缩小</Button>
      <Button onClick={rotate}>旋转</Button>
    </div>
  );
};

export default A;
