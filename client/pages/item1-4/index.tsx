import React, { useEffect, useRef } from "react";
import Bar3d from "../../components/Bar3d";

const A = () => {
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = [1, 3, null, 4, 0, 5, 1, 4, 6, 3];
    const bar = new Bar3d({
      container: dom.current,
      rotate: {
        x: 0,
        y: 10,
      },
      color: "#7cb5ec",
    });
    bar.setData(data);
  });

  return (
    <div>
      <h1>webGL</h1>
      <div ref={dom} />
    </div>
  );
};

export default A;
