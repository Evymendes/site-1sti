import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styles"

import IconPlus from "../../assets/images/plus_icon.svg"

export default function ContentCard() {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        contentCard {
          title
          subtitle
          paragraphOne
          paragraphTwo
          titleContactUs
          textButtonContactUs
        }
      }
    }
  `)

  const {
    title,
    subtitle,
    paragraphOne,
    paragraphTwo,
    titleContactUs,
    textButtonContactUs,
  } = data.firsti.contentCard[0]

  return (
    <S.DBContainer>
      <S.DBHeader>
        <S.DBWrapper>
          <S.Space>
            <S.DBTitleBox>
              <S.DBMainTitle>{title}</S.DBMainTitle>
              <S.DBDescription>{subtitle}</S.DBDescription>
            </S.DBTitleBox>
            <S.DBImageBox>
              <h1>OI</h1>
            </S.DBImageBox>
            <S.DBAbout>
              <S.DBParagraph>{paragraphOne}</S.DBParagraph>
            </S.DBAbout>
            <S.DBAbout>
              <S.DBParagraph>{paragraphTwo}</S.DBParagraph>
            </S.DBAbout>
          </S.Space>
        </S.DBWrapper>
      </S.DBHeader>
      <S.DBContentContactUs>
        <S.DBContentContactUsWrapper>
          <S.DBContentContactUsTitle>
            <h2>{titleContactUs}</h2>
          </S.DBContentContactUsTitle>
          <button>{textButtonContactUs}</button>
        </S.DBContentContactUsWrapper>
        <S.ContainerServices>
          <S.ContentContainer>
            <S.Card>
              <S.Title>OIOIOI</S.Title>
              <S.DescriptionCard>OIOIOIO</S.DescriptionCard>
              <S.LinkKnowMore>
                <a href="#">AAAA</a>
                <img src={IconPlus} alt="" />
              </S.LinkKnowMore>
            </S.Card>
          </S.ContentContainer>
        </S.ContainerServices>
      </S.DBContentContactUs>
    </S.DBContainer>
  )
}
