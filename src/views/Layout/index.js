import React from "react";

import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";

import { Content } from "./styles";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />

      <Header />

      <Content>{children}</Content>
    </>
  );
}

export default Layout;
