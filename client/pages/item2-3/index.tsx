import React from "react";

const A = () => {
  const arr = [1, 3, 5, 3, 7, 4, 9, 7, 17];

  const all = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  const average = all / arr.length;

  /**
   * 遍历时保存最小绝对值差 和 当前绝对值差最小的值
   */
  const obj = arr.reduce(
    (a, b) => {
      const nextValue = Math.abs(b - average);
      return {
        current: nextValue > a.value ? a.current : b,
        value: nextValue > a.value ? a.value : nextValue,
      };
    },
    {
      current: arr[0],
      value: Math.abs(arr[0] - average),
    }
  );

  return (
    <div>
      <p>arr: {JSON.stringify(arr)}</p>
      <p>最接近的平均数的值: {obj.current}</p>
    </div>
  );
};

export default A;
