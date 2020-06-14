import React, { useEffect, useRef } from "react";

const A = () => {
  const arr = [1, 3, 5, 3, 7, 4, 9, 7, 8];

  // 方法1:
  const a1 = [...new Set(arr)];

  // 方法2:
  const a2 = arr.reduce((a, b, k) => {
    return arr.indexOf(b) === k ? [...a, b] : [...a];
  }, []);

  // 方法3:
  const a3 = arr.filter((x, i) => arr.indexOf(x) === i);

  return (
    <div>
      <p>arr: {JSON.stringify(arr)}</p>
      <p>a1: {a1}</p>
      <p>a2: {a2}</p>
      <p>a3: {a3}</p>
    </div>
  );
};

export default A;
