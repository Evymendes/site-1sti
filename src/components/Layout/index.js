import React from "react";

import GlobalStyle from "../GlobalStyle";
import Navigation from "../Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
    </>
  )
};

export default Layout