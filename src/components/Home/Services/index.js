import React from "react"

import * as S from "./styled"
import Button from "../../../components/Button"

//images
import IconPlus from "../../../assets/images/plus_icon.svg"

export default function Services({ data }) {
  return (
    <S.ContainerServices>
      <S.ContentContainer>
        <S.BoxText>
          <S.Title>{data.title}</S.Title>
          <S.Description>{data.paragraph}</S.Description>
        </S.BoxText>

        {data.cards.card.map((item, i) => (
          <S.Card key={i} bg={item.bg}>
            <S.Title>{item.title}</S.Title>
            <S.DescriptionCard>{item.text}</S.DescriptionCard>
            <S.LinkKnowMore>
              <a href="#">{data.knowMore}</a>
              <img src={IconPlus} alt="Ícone de um +" />
            </S.LinkKnowMore>
          </S.Card>
        ))}
        <S.DivBlack></S.DivBlack>
      </S.ContentContainer>
    </S.ContainerServices>
  )
}
