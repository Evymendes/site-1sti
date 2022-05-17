import React from "react";

import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import Seo from "../seo";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Main = styled.main`
  @media (min-width: 1440px) {
      font-size: 1.3rem;
  }
`;

const Layout = ({ children, seo }) => (
  <>
    <Seo title={seo} />
    
    <GlobalStyle />
    <Navigation />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout