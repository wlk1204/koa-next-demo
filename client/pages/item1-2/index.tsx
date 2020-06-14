import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import StarCanvas from "../../components/StarCanvas";
import StarSvg from "../../components/StarSvg";
import styles from "./style.scss";

const A = () => {
  const canvas1 = useRef<HTMLCanvasElement>(null);
  const svg1 = useRef<HTMLDivElement>(null);

  let star1 = null;
  let star2 = null;
  useEffect(() => {
    star1 = new StarCanvas(canvas1.current);
    star2 = new StarSvg(svg1.current);
  });

  const start1 = () => {
    star1.start();
  };

  const stop1 = () => {
    star1.stop();
  };

  const start2 = () => {
    star2.start();
  };

  const stop2 = () => {
    star2.stop();
  };

  return (
    <div className={styles.box}>
      <div>
        <h1>canvas</h1>
        <canvas ref={canvas1} width={300} height={300}></canvas>
        <Button onClick={start1}>开始</Button>
        <Button onClick={stop1}>暂停</Button>
      </div>
      <div>
        <h1>svg</h1>
        <div className={styles.svgdiv} ref={svg1} />
        <Button onClick={start2}>开始</Button>
        <Button onClick={stop2}>暂停</Button>
      </div>
    </div>
  );
};

export default A;
