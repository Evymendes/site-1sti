import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// styles
import * as S from "./styled.js"

// components
import SubscribeButton from "../SubscribeButton"
import Header from "../Header"

// i18n
import { i18n } from "../../translate/i18n"

// assets
import GlobeIcon from "../../assets/images/globe_icon.svg"
import Arrow from "../../assets/images/arrow-icon.png"
import ArrowRight from "../../assets/images/arrow-up-right-blue.svg"

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        contentContacts {
          titleContact
          titleContactPt
          descriptionContact
          descriptionContactPt
          descriptionContactUs
          descriptionContactUsPt
          titleBook
          titleBookPt
          paragraphBook
          paragraphBookPt
          deepLink
          titleNewsletter
          titleNewsletterPt
          paragraphNewsletter
          paragraphNewsletterPt
          titleCareers
          titleCareersPt
          paragraphCareers
          paragraphCareersPt
          imageBook {
            url
          }
          linkCarrers
          textJoinUs
          textJoinUsPt
        }
      }
    }
  `)

  const {
    titleContact,
    titleContactPt,
    descriptionContact,
    descriptionContactPt,
    descriptionContactUs,
    descriptionContactUsPt,
    titleBook,
    titleBookPt,
    paragraphBook,
    paragraphBookPt,
    deepLink,
    titleNewsletter,
    titleNewsletterPt,
    paragraphNewsletter,
    paragraphNewsletterPt,
    titleCareers,
    titleCareersPt,
    paragraphCareers,
    paragraphCareersPt,
    imageBook,
    linkCarrers,
    textJoinUs,
    textJoinUsPt,
  } = data.firsti.contentContacts[0]

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxTitleBook>
          <Header
            positionText="3rem"
            title={i18n.language === "en" ? titleContact : titleContactPt}
          />
        </S.BoxTitleBook>
        <S.Content>
          <S.BoxDescriptionContact>
            <S.UpText>
              <p>
                {i18n.language === "en"
                  ? descriptionContact
                  : descriptionContactPt}
              </p>
              <p>
                {i18n.language === "en"
                  ? descriptionContactUs
                  : descriptionContactUsPt}
                <a href="mailto:ola@1sti.com.br">ola@1sti.com.br</a>
              </p>
            </S.UpText>
          </S.BoxDescriptionContact>
          <S.BoxBook>
            <S.LineBox>
              <S.Boxes>
                <h4>{i18n.language === "en" ? titleBook : titleBookPt}</h4>
                <p>
                  {i18n.language === "en" ? paragraphBook : paragraphBookPt}
                </p>
                <S.BookLink>
                  <img src={GlobeIcon} alt="" />
                  <a href={deepLink} target="_blank" rel="noreferrer">
                    deeptechamplified.com
                  </a>
                  <span>
                    <img src={ArrowRight} alt="right arrow" />
                  </span>
                </S.BookLink>
                <S.Image
                  src={imageBook.url}
                  alt="Book cover - 'Deep Tech and the amplified organization, by Simon Robinson, Igor Couto and Maria Moraes Robinson'"
                />
              </S.Boxes>
              <S.Boxes>
                <h4>
                  {i18n.language === "en" ? titleNewsletter : titleNewsletterPt}
                </h4>
                <p>
                  {i18n.language === "en"
                    ? paragraphNewsletter
                    : paragraphNewsletterPt}
                </p>
                <S.Label>
                  <S.NewsLetter
                    type="email"
                    placeholder={
                      i18n.language === "en"
                        ? "enter your email for updates"
                        : "digite seu email para receber atualizações"
                    }
                  />
                  <SubscribeButton>
                    <S.Icon src={Arrow} alt="Arrow icon" />
                  </SubscribeButton>
                </S.Label>
              </S.Boxes>
              <S.Boxes>
                <h4>
                  {i18n.language === "en" ? titleCareers : titleCareersPt}
                </h4>
                <p>
                  {i18n.language === "en"
                    ? paragraphCareers
                    : paragraphCareersPt}{" "}
                  <a href={linkCarrers}>
                    {i18n.language === "en" ? textJoinUs : textJoinUsPt}
                  </a>
                </p>
              </S.Boxes>
            </S.LineBox>
          </S.BoxBook>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default Content
