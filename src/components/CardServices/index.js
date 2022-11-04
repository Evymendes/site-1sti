import React from "react"

import * as S from "./styles.js"

//images
import IconPlus from "../../assets/images/plus_icon.svg"
import { Link } from "gatsby"

export default function Services({ title, subscription, link, knowMorePt }) {
  return (
    <S.ContainerServices>
      <S.ContentServices>
        <S.BoxTexts>
          <S.TitleServices>{title}</S.TitleServices>
          <S.Description>{subscription}</S.Description>
        </S.BoxTexts>

        <S.LinkKnowMore>
          <Link to={link}>{knowMorePt ? knowMorePt : 'Saiba mais'}</Link>
          <img src={IconPlus} alt="Ícone de um +" />
        </S.LinkKnowMore>
      </S.ContentServices>
    </S.ContainerServices>
  )
}
