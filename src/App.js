import React, { useState, useEffect, useRef } from "react";
import { SlideIn } from "./animations";

// TODO: Make this absolute and over content so it doesn't push elements when rendered
const SideNavigation = ({ interpolatedStyle, isShown }) => {
  return (
    <div
      style={{
        width: 200,
        height: "100%",
        border: 1,
        borderRadius: 3,
        borderStyle: "solid",
        backgroundColor: "red",
        transform: `translateX(${interpolatedStyle.x}px)`,
        opacity: interpolatedStyle.opacity
      }}
    >
      Hi, I'm here!
    </div>
  );
};

// TODO: Same as Side Navigation, make this cover main area so it doesn't push elements.
const ToolBar = ({ interpolatedStyle, isShown }) => {
  return (
    <div
      style={{
        display: isShown ? "block" : "none",
        justifyContent: "space-between",
        width: "100%",
        height: 100,
        backgroundColor: "beige",
        transform: `translateX(${interpolatedStyle.x}px)`,
        opacity: interpolatedStyle.opacity
      }}
    >
      <p>Tools, tools, tools!</p>
    </div>
  );
};

const App = () => {
  const ref = useRef(null);
  const [appHeight, setAppHeight] = useState(null);
  const [isLeftSlideInShown, setIsLeftSlideInShown] = useState(false);
  const [isToolBarShown, setIsToolBarShown] = useState(true);

  useEffect(() => {
    setAppHeight(ref.current.clientHeight);
  }, [appHeight]);

  return (
    <div ref={ref} className="App" style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          display: "absolute"
        }}
      ></div>
      <button
        onClick={() => {
          setIsLeftSlideInShown(!isLeftSlideInShown);
        }}
      >
        Toggle Left Side Navigation
      </button>
      <SlideIn offsetX={-200} isShown={isLeftSlideInShown}>
        <SideNavigation isShown={isLeftSlideInShown} />
      </SlideIn>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: 0,
          width: "100%"
        }}
      >
        <button
          style={{
            alignSelf: "center"
          }}
          onClick={() => {
            setIsToolBarShown(!isToolBarShown);
          }}
        >
          Toggle tool bar
        </button>
        <SlideIn offsetY={100} origin={appHeight} isShown={isToolBarShown}>
          <ToolBar
            handleAccept={() => {
              setIsToolBarShown(!isToolBarShown);
            }}
            isShown={isToolBarShown}
          />
        </SlideIn>
      </div>
    </div>
  );
};

export default App;
