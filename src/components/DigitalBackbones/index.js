import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Imgheader from "../../assets/images/agility_img.png"
import { i18n } from "../../translate/i18n"
import * as S from "./styled"
import Header from "../Header"

import CardServices from "../CardServices"

export default function DigitalBackbones({ data }) {
  const {
    firsti: {
      contentServices: [
        {
          titleService,
          titleServicePt,
          subtitle,
          subtitlePt,
          descriptionProposals,
          descriptionProposalsPt,
          proposals,
          proposalsPt,
        },
      ],
    },
  } = useStaticQuery(graphql`
    query MyQueryServices {
      firsti {
        contentServices {
          titleService
          titleServicePt
          subtitle
          subtitlePt
          descriptionProposals
          descriptionProposalsPt
          proposals
          proposalsPt
        }
      }
    }
  `)

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.DBContainer>
      <S.DBHeader>
        <S.Space>
          <S.DBTitleBox>
            <S.DBMainTitle>
              {i18n.language === "pt" ? titleServicePt : titleService}
            </S.DBMainTitle>
            <S.DBDescription>
              {i18n.language === "pt" ? subtitlePt : subtitle}
            </S.DBDescription>
          </S.DBTitleBox>
          <img src={Imgheader} alt="asdasds" />
        </S.Space>
      </S.DBHeader>
      <S.Content>
        <S.BoxInformations>
          <S.TextExpirience>
            {i18n.language === "pt"
              ? descriptionProposalsPt
              : descriptionProposals}
          </S.TextExpirience>
          <S.List>
            {i18n.language === "pt"
              ? proposalsPt.proposals.map(item => <li>{item.text}</li>)
              : proposals.proposals.map(item => <li>{item.text}</li>)}
          </S.List>
        </S.BoxInformations>
      </S.Content>
      <S.ContentListCards>
        <S.ListCard>
          {i18n.language === "pt"
            ? data.cards.cardPt.map((item, i) => (
                <CardServices
                  key={i}
                  title={item.title}
                  subscription={item.text}
                  link={item.link}
                />
              ))
            : data.cards.card.map((item, i) => (
                <CardServices
                  key={i}
                  title={item.title}
                  subscription={item.text}
                  link={item.link}
                />
              ))}
        </S.ListCard>
      </S.ContentListCards>
    </S.DBContainer>
  )
}
