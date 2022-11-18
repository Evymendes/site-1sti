import React from 'react'
import * as S from './styles'
import {useStaticQuery, graphql} from 'gatsby'
// Components
import {EstructurePageCards} from '../EstructurePageCards'

// i18n
import {i18n} from '../../translate/i18n'

// Assets
import ImgDeepTech from '../../assets/images/inovacao_deep_tech.png'
import IconPlus from '../../assets/images/plus_icon.svg'
import ModeloDeepAnalytics from '../../assets/images/modelos.png'
import inovacaoDt from '../../assets/images/inovacao_dt.png'

export function ContentDeepTechInovation({datas}) {
  const data = useStaticQuery(graphql`
  query {
    firsti {
      pageDeepTechInovations {
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
} = data.firsti.pageDeepTechInovations[0]

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
          <S.DBImageBox isResponsive={true}>
            <img src={inovacaoDt} alt="Image Strategy" />
          </S.DBImageBox>
        </EstructurePageCards>
          <S.DBImageBox>
            <img src={ImgDeepTech} alt="Image Strategy" />
          </S.DBImageBox>
        </S.BoxHeander>
          <S.DBImageBox isResponsive>
            <img src={ModeloDeepAnalytics} alt="Image Strategy" />
          </S.DBImageBox>
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