import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
// Components
import Layout from '../components/Layout'
import {ContentDeepTechInovation} from '../components/ContentDeepTechInovation'

export default function DeepTechInovation() {
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
    <Layout seo="Deep Tech Innovation">
      <ContentDeepTechInovation datas={firsti.services[0]}/>
    </Layout>
  )
}