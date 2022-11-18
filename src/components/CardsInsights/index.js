import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// styles
import * as S from "./styled"

// i18n
import { i18n } from "../../translate/i18n"

const Cards = ({ datas }) => {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        blogs {
          slug
          article
          articlePt
          imageBackbone {
            url
          }
          backboneText
          backboneTextPt
          imageDigital {
            url
          }
          digitalText
          digitalTextPt
          imageSubverting {
            url
          }
          subvertingText
          subvertingTextPt
          imageTechnology {
            url
          }
          technology
          technologyTextPt
          visualEssay
          visualEssayPt
        }
      }
    }
  `)

  const {
    slug,
    article,
    articlePt,
    imageBackbone,
    backboneText,
    backboneTextPt,
    imageDigital,
    digitalText,
    digitalTextPt,
    imageSubverting,
    subvertingText,
    subvertingTextPt,
    imageTechnology,
    technology,
    technologyTextPt,
    visualEssay,
    visualEssayPt,
  } = data.firsti.blogs[0]

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxCard>
          <S.Card to={data.link}>
            <img
              src={imageBackbone.url}
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{i18n.language === "en" ? article : articlePt}</p>
              <h1>{i18n.language === "en" ? backboneText : backboneTextPt}</h1>
            </span>
          </S.Card>
          <S.Card to={data.link}>
            <img
              src={imageDigital.url}
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{i18n.language === "en" ? visualEssay : visualEssayPt}</p>
              <h1>{i18n.language === "en" ? digitalText : digitalTextPt}</h1>
            </span>
          </S.Card>
          <S.Card to={data.link}>
            <img
              src={imageSubverting.url}
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{i18n.language === "en" ? article : articlePt}</p>
              <h1>
                {i18n.language === "en" ? subvertingText : subvertingTextPt}
              </h1>
            </span>
          </S.Card>
          <S.Card to={`/blog/${slug}`}>
            <img
              src={imageTechnology.url}
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{i18n.language === "en" ? article : articlePt}</p>
              <h1>{i18n.language === "en" ? technology : technologyTextPt}</h1>
            </span>
          </S.Card>
        </S.BoxCard>
      </S.Wrapper>
    </S.Container>
  )
}

export default Cards
