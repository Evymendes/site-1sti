import React from "react"

import * as S from "./styled"

// i18n
import { i18n } from "../../../translate/i18n"

//images
import IconPlus from "../../../assets/images/plus_icon.svg"

export default function Services({ data }) {
  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.ContainerServices>
      <S.ContentContainer>
        <S.BoxText>
          <S.Title>
            {i18n.t(i18n.language === "pt" ? "titlePt" : "title")}
          </S.Title>
          <S.Description>
            {i18n.t(i18n.language === "pt" ? "paragraphPt" : "paragraph")}
          </S.Description>
        </S.BoxText>

        {i18n.language === "pt"
          ? data.cards.cardPt.map((item, i) => (
              <S.Card key={i} bg={item.bg}>
                <S.Title>{item.title}</S.Title>
                <S.DescriptionCard>{item.text}</S.DescriptionCard>
                <S.LinkKnowMore>
                  <a href={item.link}>
                    {i18n.t(i18n.language === "pt" ? "knowMorePt" : "knowMore")}
                  </a>
                  <img src={IconPlus} alt="Ícone de um +" />
                </S.LinkKnowMore>
              </S.Card>
            ))
          : data.cards.card.map((item, i) => (
              <S.Card key={i} bg={item.bg}>
                <S.Title>{item.title}</S.Title>
                <S.DescriptionCard>{item.text}</S.DescriptionCard>
                <S.LinkKnowMore>
                  <a href={item.link}>{data.knowMore}</a>
                  <img src={IconPlus} alt="Ícone de um +" />
                </S.LinkKnowMore>
              </S.Card>
            ))}

        <S.DivBlack></S.DivBlack>
      </S.ContentContainer>
    </S.ContainerServices>
  )
}
