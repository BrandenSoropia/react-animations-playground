import React from "react";
import { Motion, spring } from "react-motion";

const SlideIn = ({
  isShown,
  origin = 0,
  offsetX,
  offsetY,
  children,
  onRest
}) => {
  return (
    <Motion
      defaultStyle={{
        ...(offsetX && { x: offsetX }),
        ...(offsetY && { y: offsetY }),
        opacity: 0
      }}
      style={{
        ...(offsetX && { x: spring(isShown ? origin : offsetX) }),
        ...(offsetY && { y: spring(isShown ? offsetY : origin) }),
        opacity: spring(isShown ? 1 : 0)
      }}
      onRest={onRest}
    >
      {interpolatedStyle =>
        React.cloneElement(children, {
          interpolatedStyle
        })
      }
    </Motion>
  );
};

export default SlideIn;
