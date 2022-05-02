import React from "react";

import GlobalStyle from "../../styles/GlobalStyle";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <main style={{ marginTop: '4.625rem' }}>{children}</main>
    <Footer />
  </>
);

export default Layout