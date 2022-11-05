import React from 'react'
import {graphql ,useStaticQuery} from 'gatsby'
import * as S from './styles'

// Assets
import ImgBackBones from '../../assets/images/backbones.png'
import IconPlus from '../../assets/images/plus_icon.svg'

// i18n
import {i18n} from '../../translate/i18n'

// Components
import { EstructurePageCards } from '../EstructurePageCards'

export function ContentBackbonesDigitais({datas}) {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        contentCard {
          titleContactUs
          titleContactUsPt
          textButtonContactUs
          textButtonContactUsPt
        }
      }
    }
  `)

  const {
    titleContactUs,
    titleContactUsPt,
    textButtonContactUs,
    textButtonContactUsPt
  } = data.firsti.contentCard[0]

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  const url = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <S.Container>
      <S.Content>
        <EstructurePageCards
          title="Backbones Digitais" 
          titlePt="Backbones Digitais" 
          subtitle="Acelerando inovações com agilidade aumentada" 
          subtitlePt="Acelerando inovações com agilidade aumentada" 
          description="Agilize a inserção e garanta a continuidade de sua empresa na economia digital, com uma fundação tecnológica escalável e flexível que viabiliza inovações e criação de novas capacidades na velocidade necessária para adaptação a mudanças e aproveitamento de oportunidades de mercado."
          descriptionPt="Agilize a inserção e garanta a continuidade de sua empresa na economia digital, com uma fundação tecnológica escalável e flexível que viabiliza inovações e criação de novas capacidades na velocidade necessária para adaptação a mudanças e aproveitamento de oportunidades de mercado."
          descriptionTwo="Os Backbones Digitais construídos pela 1STi implementam uma espinha dorsal de tecnologia de missão crítica com interoperabilidade, escalabilidade e integridade costuradas em seu DNA, abrindo caminho para que sua equipe desenvolva plataformas digitais que geram inovações profundas."
          descriptionTwoPt="Os Backbones Digitais construídos pela 1STi implementam uma espinha dorsal de tecnologia de missão crítica com interoperabilidade, escalabilidade e integridade costuradas em seu DNA, abrindo caminho para que sua equipe desenvolva plataformas digitais que geram inovações profundas."
        >
          <S.DBImageBox>
            <img src={ImgBackBones} alt="Image Strategy" />
          </S.DBImageBox>
        </EstructurePageCards>
      </S.Content>
      <div>
      <S.DBContentContactUsWrapper>
          <h2>
            {i18n.language === "pt" ? titleContactUsPt : titleContactUs}
          </h2>
          <button>
            {i18n.language === "pt"
              ? textButtonContactUsPt
              : textButtonContactUs}
          </button>
      </S.DBContentContactUsWrapper>
      <S.ContentListCards>
        <S.ListCard>
          {i18n.language === "pt"
            ? datas.cards.cardPt.map((item, i) => {
                return (
                  <>
                    {url !== item.link && (
                      <S.Card key={i}>
                        <S.Title>{item.title}</S.Title>
                        <S.DescriptionCard>{item.text}</S.DescriptionCard>
                        <S.LinkKnowMore>
                          <a href={item.link}>{datas.knowMorePt}</a>
                          <img src={IconPlus} alt="Icon Plus" />
                        </S.LinkKnowMore>
                      </S.Card>
                    )}
                  </>
                )
              })
            : datas.cards.card.map((item, i) => {
                return (
                  <>
                    {url !== item.link && (
                      <S.Card key={i}>
                        <S.Title>{item.title}</S.Title>
                        <S.DescriptionCard>{item.text}</S.DescriptionCard>
                        <S.LinkKnowMore>
                          <a href={item.link}>{datas.knowMore}</a>
                          <img src={IconPlus} alt="Icon Plus" />
                        </S.LinkKnowMore>
                      </S.Card>
                    )}
                  </>
                )
              })}
        </S.ListCard>
      </S.ContentListCards>
      </div>
    </S.Container>
  )
}