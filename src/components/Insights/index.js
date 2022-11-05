import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// styles
import * as S from "./styled"

// components
import Header from "../Header"
import BlockImages from "../BlogInsightsImages"
import CardsInsigts from "../CardsInsights"

// i18n
import { i18n } from "../../translate/i18n"

const Insights = () => {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        insights {
          title
          titlePt
          textButton
          textButtonPt
        }
      }
    }
  `)

  const { title, titlePt, textButton, textButtonPt } = data.firsti.insights[0]

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.Container>
      <S.Wrapper>
        <Header
          positionText="2rem"
          title={i18n.language === "en" ? title : titlePt}
          color="#000"
        />
        <BlockImages />
        <CardsInsigts />
        <S.MoreButton>
          {i18n.language === "en" ? textButton : textButtonPt}
        </S.MoreButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default Insights
