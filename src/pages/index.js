import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import CallToAction from "../components/Home/CallToAction";
import Purpose from "../components/Home/Purpose";
import Services from "../components/Home/Services";
import Insights from "../components/Home/Insights";
import Attention from "../components/Home/Attention";

export default function IndexPage() {
  const query = useStaticQuery(graphql`
    {
      firsti {
        callToActions {
          title
          about
          video {
            url
          }
        }
        purposes {
          title
          paragraph
        }
        newsletters {
          title
          paragraph
          observation
        }
      }
    }
  `);
  const { firsti } = query;

  return (
    <Layout seo="Home">
      <CallToAction data={firsti.callToActions[0]} />
      <Purpose data={firsti.purposes[0]} />
      <Services />
      <Insights />
      <Attention data={firsti.newsletters[0]} />
    </Layout>
  )
};