import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Imgheader from "../../assets/images/agility_img.png"
import { i18n } from "../../translate/i18n"
import * as S from "./styled"
import Header from "../Header"
import Button from "../Button"

import CardServices from "../CardServices"

export default function DigitalBackbones({data}) {
  const {
    firsti: {
      contentServices: [{ titleService, titleServicePt, subtitle, subtitlePt, descriptionProposals, descriptionProposalsPt, proposals, proposalsPt
      }],
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
        },
      
      }
    }
  `)


  const cardServicesData = [
    {
      id: 1,
      title: "Estratégia Digital",
      subscription: "A tecnologia como meio para transformações profundas",
      link: "/social-strategy",
    },
    {
      id: 2,
      title: "Backbones Digitais",
      subscription: "Acelerando inovações com agilidade aumentada",
      link: "/backbones-digitais",
    },
    {
      id: 3,
      title: "Plataformas Digitais",
      subscription: "O caminho para o presente e o futuro dos negócios",
    },
    {
      id: 4,
      title: "Inovação Deep Tech",
      subscription: "Tecnologias visionárias para inovação de alto impacto",
    },
    {
      id: 5,
      title: "Deep Analytics",
      subscription:
        "Amplificando análise de dados para multiplicar oportunidades",
    },
  ]

  // função para direcionar os cards via props
  const RenderCardServices = (card, index) => {
    return (
      <>
        {data.cards.card.map((card, index) => (
          <CardServices
            key={index}
            title={card.title}
            subscription={card.text}
            link={card.link}
          />
        ))}
      </>
    )
  }

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.DBContainer>
      <S.DBHeader>
        <S.Space>
          <S.DBTitleBox>
            <S.DBMainTitle>{i18n.language === 'pt' ? titleServicePt : titleService}</S.DBMainTitle>
            <S.DBDescription>{i18n.language === 'pt' ? subtitlePt : subtitle}</S.DBDescription>
          </S.DBTitleBox>
          <img src={Imgheader} alt="asdasds" />
        </S.Space>
      </S.DBHeader>
      <S.Content>
        <S.BoxInformations>
          <S.TextExpirience>
            {i18n.language === 'pt' ? descriptionProposalsPt : descriptionProposals}
          </S.TextExpirience>
          <S.List>
          {i18n.language === "pt" ? proposalsPt.proposals.map(item => (
            <li>{item.text}</li>
          )) : proposals.proposals.map(item => (
            <li>{item.text}</li>
          ))}
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
            />
            ))
          : data.cards.card.map((item, i) => (
            <CardServices
              key={i}
              title={item.title}
              subscription={item.text}
            />
            ))}
        </S.ListCard>
      </S.ContentListCards>
    </S.DBContainer>
  )
}
