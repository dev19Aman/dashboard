import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import * as metrics from "../../utils/uiMatrics";
import Appbar from "../Appbar";
import Footer from "../Footer";

const Layout = ({ children }: any) => {
  const [collapse, setCollapse] = useState(false);
  const handleToggle = () => {
    setCollapse((s) => !s);
  };
  return (
    <Main>
    <Root>
      <Sidebar />
      <Content className={collapse ? "full" : ""}>
        <Appbar handleToggle={handleToggle} />
        <Children>{children}</Children>
      </Content>
    </Root>
    <Footer />
    </Main>
  );
};

export default Layout;
const Main = styled.div`


`
const Root = styled.div`
  width: 100%;
  background-color: #F5F5F9;
  display: flex;
`;
const Content = styled(motion.div)`
  /* padding-left: ${metrics.sidebarWidth.full}px; */
  /* width: 100%; you can give width  */
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: ${metrics.sidebarWidth.transition("all")};
  &.full {
    padding-left: ${metrics.sidebarWidth.small}px;
  }
  &::-webkit-scrollbar-track {
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);

      border-radius: 120px;
    }
  }
`;
const Children = styled(motion.div)`
  height: calc(100vh - ${metrics.appbarHeight}px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
`;
