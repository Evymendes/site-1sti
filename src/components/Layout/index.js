import React from "react";

import GlobalStyle from "../GlobalStyle";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
};

export default Layout