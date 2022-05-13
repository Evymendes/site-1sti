import React from "react";

import GlobalStyle from "../../styles/GlobalStyle";
import Seo from "../seo";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children, seo }) => (
  <>
    <Seo title={seo} />
    
    <GlobalStyle />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout