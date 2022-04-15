import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import CallToAction from "../components/Home/CallToAction";
import Purpose from "../components/Home/Purpose";
import Client from "../components/Home/Client";
import Services from "../components/Home/Services";
import Insights from "../components/Home/Insights";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <CallToAction />
    <Purpose />
    <Client />
    <Services />
    <Insights />
  </Layout>
);

export default IndexPage
