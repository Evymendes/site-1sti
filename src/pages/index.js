import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import CallToAction from "../components/Home/CallToAction";
import Purpose from "../components/Home/Purpose";
import Services from "../components/Home/Services";
import Insights from "../components/Home/Insights";
import Attention from "../components/Home/Attention";
import Pioneering from "../components/Pioneering";

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
        insights {
          title
          paragraph
        }
        services {
          title
          paragraph
        }
        purposes {
          title
          paragraph
          graphic {
            url
          }
          cards
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
      <Services data={firsti.services[0]} />
      <Insights data={firsti.insights[0]} />
      <Purpose data={firsti.purposes[0]} />
      <Attention data={firsti.newsletters[0]} /> */}
      <Pioneering/>
    </Layout>
  );
};