import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import * as S from './styles'

// Components
import {EstructurePageCards} from '../EstructurePageCards'

// i18
import { i18n } from "../../translate/i18n"

// Assets
import ImgDeepAnalystics from '../../assets/images/deep_analystics.png'
import IconPlus from '../../assets/images/plus_icon.svg'



export function ContentDeepAnalytics({datas}) {
  const data = useStaticQuery(graphql`
  query {
    firsti {
      pageDeepAnalytics {
        titlePt
        title
        subTitle
        subTitlePt
        decriptionOne
        decriptionOnePt
        decriptionTwo
        decriptionTwoPt
      }

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
  textButtonContactUsPt,
  
} = data.firsti.contentCard[0]

const {
  titlePt,
  title,
  subTitle,
  subTitlePt,
  decriptionOne,
  decriptionOnePt,
  decriptionTwo,
  decriptionTwoPt
} = data.firsti.pageDeepAnalytics[0]

i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  const url = typeof window !== "undefined" ? window.location.pathname : ""

  return(
    <S.Container>
      <S.Content>
        <S.BoxHeander>
          <EstructurePageCards
            title={title}
            titlePt={titlePt}
            subtitlePt={subTitlePt}
            subtitle={subTitle}
            description={decriptionOne}
            descriptionPt={decriptionOnePt}
            descriptionTwo={decriptionTwo}
            descriptionTwoPt={decriptionTwoPt}
          >
            <S.DBImageBox isResponsive>
              <img src={ImgDeepAnalystics}/>
            </S.DBImageBox>
        </EstructurePageCards>
            <S.DBImageBox >
              <img src={ImgDeepAnalystics}/>
            </S.DBImageBox>
        </S.BoxHeander>
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