import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout";
import DigitalBackbones from "../components/DigitalBackbones";


function Services() {
  const query = useStaticQuery(graphql`
    {  
      firsti {
        services {
          title
          titlePt
          paragraph
          paragraphPt
          cards
          knowMore
          knowMorePt
        }
      }
    }
  `)

const { firsti } = query
  return (
    <Layout seo="Services">
      <DigitalBackbones data={firsti.services[0]}/>
    </Layout>
  ) 
}

export default Services
