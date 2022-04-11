import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import CallToAction from "../components/CallToAction";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <CallToAction />
  </Layout>
);

export default IndexPage
