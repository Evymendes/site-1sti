import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

import DigitalPlatform from "../components/ContentCards/DigitalPlatforms/index.js"

const ContentCardsPage = () => {
  const query = useStaticQuery(graphql`
    {
      firsti {
        services {
          cards
          knowMore
          knowMorePt
        }
      }
    }
  `)
  const { firsti } = query
  return (
    <Layout seo="Digital Platforms">
      <DigitalPlatform datas={firsti.services[0]} />
    </Layout>
  )
}

export default ContentCardsPage
