import { useState, useEffect } from "react";

function getWindowWidth() {
  const width = window.innerWidth;
  return width;
}
function getWindowHeight() {
  const height = window.innerHeight;
  return height;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState([getWindowWidth(), getWindowHeight()]);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions([getWindowWidth(), getWindowHeight()]);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
