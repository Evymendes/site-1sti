import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// styles
import * as S from "./styles"

// i18n
import { i18n } from "../../translate/i18n"

// components
import CardServices from "../CardServices"

// assets
import IconPlus from "../../assets/images/plus_icon.svg"
import ImageStrategy from "../../assets/images/estrategia.png"

export default function ContentCard({ datas }) {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        contentCard {
          title
          titlePt
          subtitle
          subtitlePt
          description
          descriptionPt
          descriptionTwo
          descriptionTwoPt
          titleContactUs
          titleContactUsPt
          textButtonContactUs
          textButtonContactUsPt
        }
      }
    }
  `)

  const {
    title,
    titlePt,
    subtitle,
    subtitlePt,
    description,
    descriptionPt,
    descriptionTwo,
    descriptionTwoPt,
    titleContactUs,
    titleContactUsPt,
    textButtonContactUs,
    textButtonContactUsPt,
  } = data.firsti.contentCard[0]

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  // função para pegar a url e não renderizar o mesmo card da página atual
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <S.DBContainer>
      <S.DBHeader>
        <S.DBWrapper>
          <S.Space>
            <S.DBTitleBox>
              <S.DBMainTitle>
                {i18n.language === "pt" ? titlePt : title}
              </S.DBMainTitle>
              <S.DBImageBox>
                <S.DBDescription>
                  {i18n.language === "pt" ? subtitlePt : subtitle}
                </S.DBDescription>
                <img src={ImageStrategy} alt="Image Strategy" />
              </S.DBImageBox>
            </S.DBTitleBox>
            <S.DBAbout>
              <S.DBParagraph>
                {i18n.language === "pt" ? descriptionPt : description}
              </S.DBParagraph>
            </S.DBAbout>
            <S.DBAbout>
              <S.DBParagraph>
                {i18n.language === "pt" ? descriptionTwoPt : descriptionTwo}
              </S.DBParagraph>
            </S.DBAbout>
          </S.Space>
        </S.DBWrapper>
      </S.DBHeader>
      <S.DBContentContactUs>
        <S.DBContentContactUsWrapper>
          <S.DBContentContactUsTitle>
            <h2>
              {i18n.language === "pt" ? titleContactUsPt : titleContactUs}
            </h2>
          </S.DBContentContactUsTitle>
          <button>
            {i18n.language === "pt"
              ? textButtonContactUsPt
              : textButtonContactUs}
          </button>
        </S.DBContentContactUsWrapper>
        <S.ContentListCards>
          <S.ListCard>
            {i18n.language === "pt"
              ? datas.cards.cardPt.map((item, i) => {
                  return (
                    <>
                      {url !== item.link && (
                        <S.Card key={i}>
                          <S.Title>{item.title}</S.Title>
                          <S.DescriptionCard>{item.text}</S.DescriptionCard>
                          <S.LinkKnowMore>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Saiba mais
                            </a>
                            <img src={IconPlus} alt="Icon Plus" />
                          </S.LinkKnowMore>
                        </S.Card>
                      )}
                    </>
                  )
                })
              : datas.cards.card.map((item, i) => {
                  return (
                    <>
                      {url !== item.link && (
                        <S.Card key={i}>
                          <S.Title>{item.title}</S.Title>
                          <S.DescriptionCard>{item.text}</S.DescriptionCard>
                          <S.LinkKnowMore>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Saiba mais
                            </a>
                            <img src={IconPlus} alt="Icon Plus" />
                          </S.LinkKnowMore>
                        </S.Card>
                      )}
                    </>
                  )
                })}
          </S.ListCard>
        </S.ContentListCards>
      </S.DBContentContactUs>
    </S.DBContainer>
  )
}
