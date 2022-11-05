import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

// i18n
import { i18n } from "../../translate/i18n"

const BlockImages = () => {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        blogs {
          article
          articlePt
          whatIsTitle
          whatIsTitlePt
          editorial
          editorialPt
          deepTechTitle
          deepTechTitlePt
          whatIsLink
          deepTechLink
          imageWhatIs {
            url
          }
          imageDeeptech {
            url
          }
        }
      }
    }
  `)

  const {
    article,
    articlePt,
    whatIsTitle,
    whatIsTitlePt,
    editorial,
    editorialPt,
    deepTechTitle,
    deepTechTitlePt,
    whatIsLink,
    deepTechLink,
    imageWhatIs,
    imageDeeptech,
  } = data.firsti.blogs[0]

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.Container>
      <S.Wrapper>
        <S.BlockLink to={whatIsLink}>
          <S.Block
            style={{
              backgroundImage: `url(${imageWhatIs.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span style={{ color: "#000", zIndex: "1" }}>
              <p>{i18n.language === "en" ? article : articlePt}</p>
              <h1>{i18n.language === "en" ? whatIsTitle : whatIsTitlePt}</h1>
            </span>
          </S.Block>
        </S.BlockLink>
        <S.BlockLink to={deepTechLink}>
          <S.Block
            style={{
              backgroundImage: `url(${imageDeeptech.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "70%",
              backgroundPosition: "center",
            }}
            color="#742698"
          >
            <span>
              <p>{i18n.language === "en" ? editorial : editorialPt}</p>
              <h1>
                {i18n.language === "en" ? deepTechTitle : deepTechTitlePt}
              </h1>
            </span>
          </S.Block>
        </S.BlockLink>
      </S.Wrapper>
    </S.Container>
  )
}

export default BlockImages
