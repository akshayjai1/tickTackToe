import React from "react";
import logo from "../logo.png";
import styled, { keyframes } from "styled-components";
import ToggleDarkMode from "../components/ToggleDarkMode";

const PageLayoutContainer = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const Header = styled.header`
  position: sticky;
  right: 0px;
  left: 0px;
  top: 0px;
  opacity: 0.9;
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
  font-size: calc(10px + 2vmin);
`;

const ToggleDarkModeContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1em;
`;

const logoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const WebsiteLogo = styled.img`
  width: 3em;
  height: 3em;
  pointer-events: none;
  max-height: 10vh;
  animation: ${logoAnimation} infinite 20s linear;
  float: left;
`;

const PageLayout = ({ children }) => {
  return (
    <PageLayoutContainer>
      <Header>
        <WebsiteLogo src={logo} alt="logo" />
        <ToggleDarkModeContainer>
          <ToggleDarkMode/>
        </ToggleDarkModeContainer>
      </Header>
      {children}
    </PageLayoutContainer>
  );
};

export default PageLayout;
