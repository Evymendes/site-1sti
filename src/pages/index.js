import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import CallToAction from "../components/Home/CallToAction"
import Services from "../components/Home/Services"
import Insights from "../components/Home/Insights"
import Attention from "../components/Home/Attention"
import Pioneering from "../components/Pioneering"
import JourneysActive from "../components/Home/JourneyActive"

export default function IndexPage() {
  const query = useStaticQuery(graphql`
    {
      firsti {
        callToActions {
          title
          titlePt
          subtitle
          subtitlePt
          about
          aboutPt
          textButtonOne
          textButtonOnePt
          textButtonTwo
          textButtonTwoPt
          video {
            url
          }
        }
        insights {
          title
          titlePt
          paragraph
          paragraphPt
          cards
          textButton
          textButtonPt
        }
        services {
          title
          titlePt
          paragraph
          paragraphPt
          cards
          knowMore
          knowMorePt
        }
        activeJourneys {
          title
          titlePt
          text
          textPt
          textButton
          textButtonPt
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
          titlePt
          paragraphPt
        }
        pioneerings {
          title
          titlePt
          text
          textPt
          buttonText
          buttonTextPt
          altImg
          slider
          textPlaceholder
          textPlaceholderPt
        }
      }
    }
  `)
  const { firsti } = query
  return (
    <Layout seo="Home">
      <CallToAction data={firsti.callToActions[0]} />
      <Services data={firsti.services[0]} />
      <JourneysActive data={firsti.activeJourneys[0]} />
      <Insights data={firsti.insights[0]} />
      <Pioneering data={firsti.pioneerings[0]} />
      <Attention data={firsti.newsletters[0]} />
    </Layout>
  )
}
