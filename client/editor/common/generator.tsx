import React, { useCallback } from "react";
import { useDrag } from "react-dnd";
import ReactEcharts from "echarts-for-react";
import { Button } from "antd";

interface BoxProps {
  currentElement: any;
  scene?: string;
}

// 模版
export const Generator: React.FC<BoxProps> = React.memo(
  ({ currentElement }) => {
    const [{ isDragging }, drag]: any = useDrag(currentElement.drag);

    const opacity = isDragging ? 0.4 : 1;

    const createChart = (props) => {
      return <ReactEcharts {...props} />;
    };

    const createButton = (props) => {
      return <Button {...props}>{props.children}</Button>;
    };

    const _renderElement = useCallback(() => {
      if (currentElement.type === "common") {
        return React.createElement(createButton, currentElement.props);
      }

      if (currentElement.type === "chart") {
        return React.createElement(createChart, currentElement.props);
      }
    }, [currentElement]);

    return (
      <div ref={drag} style={{ opacity, ...currentElement.style }}>
        {_renderElement()}
      </div>
    );
  }
);

// 模版
export const GeneratorInboard: React.FC<BoxProps> = React.memo(
  ({ currentElement }) => {
    const createChart = (props) => {
      return <ReactEcharts {...props} />;
    };

    const createButton = (props) => {
      return <Button {...props}>{props.children}</Button>;
    };

    const _renderElement = () => {
      if (currentElement.type === "common") {
        return React.createElement(createButton, currentElement.props);
      }

      if (currentElement.type === "chart") {
        return React.createElement(createChart, currentElement.props);
      }
    };

    return <>{_renderElement()}</>;
  }
);
