import React from "react"
import * as S from "./styled"
import SubscribeButton from "../../SubscribeButton"

//i18n
import { i18n } from "../../../translate/i18n"

import Arrow from "../../../assets/images/arrow-icon.png"

export default function Attention({ data }) {
  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.ContainerAttention>
      <S.AttentionWrapper>
        <S.Box>
          <S.Title>
            {i18n.t(i18n.language === "pt" ? "titlePt" : "title")}
          </S.Title>
          <S.Description>
            {i18n.t(i18n.language === "pt" ? "paragraphPt" : "paragraph")}
          </S.Description>
          <S.Label>
            <S.NewsLetter
              type="email"
              placeholder={i18n.t(
                i18n.language === "pt" ? "Cadastre-se" : "Register"
              )}
            />
            <SubscribeButton>
              <S.Icon src={Arrow} alt="Arrow icon" />
            </SubscribeButton>
          </S.Label>
        </S.Box>
      </S.AttentionWrapper>
    </S.ContainerAttention>
  )
}
