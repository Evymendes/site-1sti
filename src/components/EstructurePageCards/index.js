import React from "react"

// styles
import * as S from "./styles"

// i18n
import { i18n } from "../../translate/i18n"



export function EstructurePageCards({title, titlePt, subtitlePt, subtitle, descriptionPt, description, descriptionTwo, descriptionTwoPt,children,}) {

  i18n.addResourceBundle("en", "translations")
  i18n.addResourceBundle("pt", "translations")

  return (
    <S.Space >
      <S.DBTitleBox>
        <S.DBMainTitle>
          {i18n.language === "pt" ? titlePt : title}
        </S.DBMainTitle>
        <S.DBDescription>
          {i18n.language === "pt" ? subtitlePt : subtitle}
        </S.DBDescription>
      </S.DBTitleBox>
      {children}
      <S.BoxTexts >
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
      </S.BoxTexts>
    </S.Space>
  )
}