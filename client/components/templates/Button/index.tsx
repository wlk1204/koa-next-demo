import React from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { Button } from "antd";

interface BoxProps {
  name: string;
}

export const Box: React.FC<BoxProps> = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "comp", id: 1 },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <Button ref={drag} style={{ opacity }}>
      {name}
    </Button>
  );
};
