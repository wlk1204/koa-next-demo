/**
 * 模版组件
 *
 */

import { bar_options, pie_options } from "./Chart/options";

export const templates = [
  {
    id: 1,
    type: "common",
    name: "按钮",
    props: {
      children: "Glass",
    },
    render: {
      name: "Button",
    },
    drag: {
      item: { name: "Glass", type: "comp", id: 1 },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    },
  },
  {
    id: 2,
    type: "chart",
    name: "柱状图",
    style: { height: 300 },
    props: {
      option: bar_options,
      notMerge: true,
      lazyUpdate: true,
      theme: "theme_name",
      style: { height: "100%" },
    },
    render: { name: "ReactEcharts" },
    drag: {
      item: { name: "Glass", type: "comp", id: 2, options: bar_options },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    },
  },
  {
    id: 3,
    type: "chart",
    name: "饼图",
    style: { height: 300 },
    props: {
      option: pie_options,
      notMerge: true,
      lazyUpdate: true,
      theme: "theme_name",
      style: { height: "100%" },
    },
    render: { name: "ReactEcharts" },
    drag: {
      item: { name: "Glass", type: "comp", id: 3, options: pie_options },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    },
  },
];
