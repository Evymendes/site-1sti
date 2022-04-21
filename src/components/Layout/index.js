import React from "react";

import GlobalStyle from "../../styles/GlobalStyle";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout