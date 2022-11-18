import React from "react"

//i18n
import { i18n } from "../../translate/i18n"

import * as S from "./styled"
import Button from "../Button"

export default function Footer({ data }) {
  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.ContainerFooter>
      <S.ContentContainer>
        <S.ContainerImagePacto>
          <S.ImagePacto src={data.globalLogo.url} alt="" />
          <S.SocialMediaMobile>
            {data.socialLinks.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noreferrer">
                <S.ImageLogo src={item.icon.url} alt={item.icon.alt} />
              </a>
            ))}
          </S.SocialMediaMobile>
        </S.ContainerImagePacto>

        <S.Ecosystem>
          <S.EcosystemTitle>
            {i18n.t(i18n.language === "pt" ? "links.titlePt" : "links.title")}
          </S.EcosystemTitle>
          {data.links.list.map((item, i) => (
            <S.EcosystemItem key={i} href={item.link}>
              {item.website}
            </S.EcosystemItem>
          ))}
        </S.Ecosystem>

        <S.SocialMedia>
          {data.socialLinks.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noreferrer">
              <S.ImageLogo src={item.icon.url} alt={item.icon.alt} />
            </a>
          ))}
        </S.SocialMedia>

        <S.Work>
          <S.WorkTitle>
            {i18n.t(i18n.language === "pt" ? "titlePt" : "title")}
          </S.WorkTitle>
          <S.WorkSubtitle>
            {i18n.t(i18n.language === "pt" ? "paragraphPt" : "paragraph")}
          </S.WorkSubtitle>
          <S.WorkButton to="">
            {i18n.t(i18n.language === "pt" ? "textButtonPt" : "textButton")}
          </S.WorkButton>
        </S.Work>
      </S.ContentContainer>
    </S.ContainerFooter>
  )
}
