import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
// Components
import Layout from '../components/Layout'
import {ContentDeepAnalytics} from '../components/ContentDeepAnalytics'

export default function DeepAnalytics() {
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
    <Layout seo="Deep Analytics">
      <ContentDeepAnalytics datas={firsti.services[0]}/>
    </Layout>
  )
}