import React from "react"

import * as S from "./styled"

//components
import Button from "../../../components/Button"

//i18n
import { i18n } from "../../../translate/i18n"
import Wrapper from "../../Wrapper"

export default function Insights({ data }) {
  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.ContainerInsights>
      <Wrapper>
        <S.ContentContainer>
          <S.BoxText>
            <S.Title>
              {i18n.t(i18n.language === "pt" ? "titlePt" : "title")}
            </S.Title>
            <S.Description>
              {i18n.t(i18n.language === "pt" ? "paragraphPt" : "paragraph")}
            </S.Description>
            <Button to="">
              {i18n.t(i18n.language === "pt" ? "textButtonPt" : "textButton")}
            </Button>
          </S.BoxText>

          <S.CardsContainer>
            <S.CardsBox>
              {i18n.language === "pt"
                ? data.cards.cardPt.map((insight, i) => (
                    <S.Card key={i}>
                      <S.ImageCard src={insight.img} alt="" />
                      <S.DescriptionCard>{insight.title}</S.DescriptionCard>
                      <S.TitleCard>{insight.description}</S.TitleCard>
                    </S.Card>
                  ))
                : data.cards.card.map((insight, i) => (
                    <S.Card key={i}>
                      <S.ImageCard src={insight.img} alt="" />
                      <S.DescriptionCard>{insight.title}</S.DescriptionCard>
                      <S.TitleCard>{insight.description}</S.TitleCard>
                    </S.Card>
                  ))}
            </S.CardsBox>
          </S.CardsContainer>
        </S.ContentContainer>
      </Wrapper>
    </S.ContainerInsights>
  )
}
