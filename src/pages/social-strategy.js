import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

import ContentCard from "../components/ContentCard"

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
    <Layout seo="Content Card">
      <ContentCard datas={firsti.services[0]} />
    </Layout>
  )
}

export default ContentCardsPage
