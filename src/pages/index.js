import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import CallToAction from "../components/CallToAction";
import Purpose from "../components/Purpose";
import Client from "../components/Client";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <CallToAction />
    <Purpose />
    <Client />
  </Layout>
);

export default IndexPage
