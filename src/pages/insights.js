import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import Insights from "../components/Insights";

const Blog = () => (
  <Layout>
    <Seo title="Insights" />
    <Insights />
  </Layout>
);

export default Blog
