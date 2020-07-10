import React from "react";
import { templates } from "./template_data";
import { generator } from "./generator";

export const Template: React.FC = () => {
  return <div>{templates.map((x) => generator({ currentElement: x }))}</div>;
};
