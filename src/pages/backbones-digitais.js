import React from 'react'
import {graphql ,useStaticQuery} from 'gatsby'
// Components
import Layout from "../components/Layout"
import {ContentBackbonesDigitais} from '../components/ContentbackbonesDigital'

export default function BackbonesDigitais() {
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
    <Layout seo="Backbones Digitais">
      <ContentBackbonesDigitais datas={firsti.services[0]}/>
    </Layout>
  )
}