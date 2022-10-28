import React from "react"

import * as S from "./styled"

//components
import Button from "../../../components/Button"

//i18n
import { i18n } from "../../../translate/i18n"

// images
import AgilityImg from "../../../assets/images/agility_img.png"
import EducationImg from "../../../assets/images/education_img.svg"
import HorizonImg from "../../../assets/images/horizon_img.png"

export default function Insights({ data }) {
  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.ContainerInsights>
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
                    <S.DescriptionCard>{insight.description}</S.DescriptionCard>
                    <S.TitleCard>{insight.title}</S.TitleCard>
                  </S.Card>
                ))
              : data.cards.card.map((insight, i) => (
                  <S.Card key={i}>
                    <S.ImageCard src={insight.img} alt="" />
                    <S.DescriptionCard>{insight.description}</S.DescriptionCard>
                    <S.TitleCard>{insight.title}</S.TitleCard>
                  </S.Card>
                ))}
          </S.CardsBox>
        </S.CardsContainer>
      </S.ContentContainer>
    </S.ContainerInsights>
  )
}
