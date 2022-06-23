import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styled.js";
import SubscribeButton from "../SubscribeButton";
import Header from "../Header";

import GlobeIcon from "../../assets/images/globe_icon.svg";
import Arrow from "../../assets/images/arrow-icon.png";

const Content = () => {
  const {
    firsti: {
      contentContacts: [{ 
        descriptionContact,
        contactUs,
        emailLink,
        titleBook,
        paragraphBook,
        deepLink,
        titleNewsletter,
        paragraphNewsletter,
        titleCareers,
        paragraphCareers,
        linkCarrers,
        imageBook
      }],
    },
  } = useStaticQuery(graphql`
  query MyQueryContact {
    firsti {
      contentContacts {
        descriptionContact
        contactUs
        emailLink
        titleBook
        paragraphBook
        deepLink
        titleNewsletter
        paragraphNewsletter
        titleCareers
        paragraphCareers
        linkCarrers
        imageBook {
          url
        }
    }
  }
}
`)

  return(
    <S.Container>
      <S.Wrapper>
        <Header title="Contact" />
        
        <S.Content>
          <S.UpText>
            <p>
              {descriptionContact}
            </p>
            <p>{contactUs}<a href={emailLink}>ola@1sti.com.br</a></p>
          </S.UpText>

          <S.LineBox>
            <S.Boxes>
              <h4>
                {titleBook}
              </h4>
              <p>
                {paragraphBook}
              </p>
              <S.BookLink>
                <img src={GlobeIcon} alt="" />
                <a href={deepLink} target="_blank" rel="noreferrer">deeptechamplified.com</a> <span>&#129109;</span>
              </S.BookLink>
              <S.Image src={imageBook.url} alt="Book cover - 'Deep Tech and the amplified organization, by Simon Robinson, Igor Couto and Maria Moraes Robinson'"/>
            </S.Boxes>
            <S.Boxes>
              <h4>
                {titleNewsletter}
              </h4>
              <p>
                {paragraphNewsletter}
              </p>
              <S.Label>
                <S.NewsLetter type="email" placeholder="enter your email for updates" /> 
                <SubscribeButton><S.Icon src={Arrow} alt="Arrow icon"/></SubscribeButton>
              </S.Label>
            </S.Boxes>
            <S.Boxes>
              <h4>
                {titleCareers}
              </h4>
              <p>{paragraphCareers} <a href={linkCarrers}>join us!</a></p>
            </S.Boxes>
          </S.LineBox>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default Content;

