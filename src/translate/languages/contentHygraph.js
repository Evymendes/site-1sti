import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function ContentHygraph() {
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
        pioneerings{
          title
          titlePt
          text
          textPt
          buttonText
          buttonTextPt
          altImg
          slider
        }
      }
    }
  `);

  const { firsti } = query;
  const { callToAction } = firsti.callToActions 
};
