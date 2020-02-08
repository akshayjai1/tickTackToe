import React, { useState } from "react";
import styled from "styled-components";

const Toggle = styled.input`
  display: flex;
  margin: 1em;
  height: 3em;
  width: 2em;
`;

const setMode = mode => {
  const root = document.getElementById("root");

  mode
    ? (root.style.background = "#d4d1d1")
    : (root.style.background = "unset");
};

const ToggleDarkMode = () => {
  const lastValue = localStorage.getItem("isDarkMode");
  const lastSetMode = lastValue === "true" || lastValue === null ? true : false;
  const [isDarkMode, toggleDarkMode] = useState(lastSetMode);

  setMode(lastSetMode);

  const changeMode = () => {
    const newMode = !isDarkMode;
    localStorage.setItem("isDarkMode", newMode);
    toggleDarkMode(newMode);
    setMode(lastSetMode);
  };

  return (
    <Toggle
      key="toggle"
      type="checkbox"
      checked={isDarkMode}
      onChange={changeMode}
    />
  );
};

export default ToggleDarkMode;
