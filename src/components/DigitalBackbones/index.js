import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styled";
import Header from "../Header";
import Button from "../Button";

export default function DigitalBackbones() {
  const {
    firsti: {
      contentServices: [{ 
        digitalBlackbones, 
        companieOne, 
        companieTwo, 
        companieTree, 
        companies, 
        subCompanieOne, 
        subCompanieTwo, 
        subCompanieTree, 
        subTitle, 
        textWhatIs, 
        partneringText, 
        whatIs,
        deepTitle,
        deepSub,
        visionaryTitle,
        visionarySub,
        imageCubo,
        imageEstrela,
        imageCuboMobile,
        imageEstrelaMobile,
        explorer
      }],
    },
  } = useStaticQuery(graphql`
  query MyQueryServices {
    firsti {
      contentServices {
        digitalBlackbones
        companieOne
        companieTwo
        companieTree
        companies
        subCompanieOne
        subCompanieTwo
        subCompanieTree
        subTitle
        textWhatIs
        partneringText
        whatIs
        deepTitle
        deepSub
        visionaryTitle
        visionarySub
        imageCubo {
          url
        }
        imageEstrela {
          url
        }
        imageCuboMobile {
          url
        }
        imageEstrelaMobile {
          url
        }
        explorer
      }
    }
  }
`)
  

    
  return (
    <S.DBContainer>
        <S.DBHeader>
          <S.DBBackground />
        <S.Space>
          <Header title="Our Services" />
          <S.DBTitleBox>
            <S.DBMainTitle>
              {digitalBlackbones}
            </S.DBMainTitle>
            <S.DBDescription>
              {subTitle}
            </S.DBDescription>
          </S.DBTitleBox>
        </S.Space>
        </S.DBHeader>
      <S.DBWrapper>

        <S.DBAbout>
          <S.DBParagraph>Before embarking on a digital transformation, businesses often contend with complexities that stem from:</S.DBParagraph>

          <S.DBList>
            <S.DBListItem>Data that lives in siloed systems that do not communicate</S.DBListItem>
            <S.DBListItem>Teams that function alongside one another without effective collaboration</S.DBListItem>
            <S.DBListItem>Structural complexities that appear to threaten the possibility of truly digitising</S.DBListItem>
          </S.DBList>

          <S.DBParagraph>To overcome these complexities and achieve a successful digital transformation, businesses need a strong digital backbone.</S.DBParagraph>
          <S.DBTitle>{whatIs}</S.DBTitle>
          <S.DBParagraph>{textWhatIs}</S.DBParagraph>
          <S.DBSubtitle>{companies}</S.DBSubtitle>

          <S.DBAdvantages>
            <S.DBStatistic>
              <S.DBValue>{companieOne}</S.DBValue>
              <S.DBParagraph>{subCompanieOne}</S.DBParagraph>
            </S.DBStatistic>
            <S.DBStatistic>
              <S.DBValue>{companieTwo}</S.DBValue>
              <S.DBParagraph>{subCompanieTwo}</S.DBParagraph>
            </S.DBStatistic>
            <S.DBStatistic>
              <S.DBValue>{companieTree}</S.DBValue>
              <S.DBParagraph>{subCompanieTree}</S.DBParagraph>
            </S.DBStatistic>
          </S.DBAdvantages>
        </S.DBAbout>

        <S.DBPartnering>
          <S.DBPartneringWrapper>
            {partneringText}
            <S.DBPartneringBox>
              <Button>Download One Page</Button>
              <Button>Read Case Study</Button>
            </S.DBPartneringBox>
          </S.DBPartneringWrapper>
        </S.DBPartnering>

        <S.OtherServices>
          <S.ExploreText>
            {explorer}
          </S.ExploreText>
          <S.Service bg={imageEstrela.url} mobileBg={imageEstrelaMobile.url}>
            <S.DBMainTitle>{deepTitle}</S.DBMainTitle>
            <S.DBDescription>{deepSub}</S.DBDescription>
            <Button to="/services">Read more</Button>
          </S.Service>
          <Button to="/services">Read more</Button>

          <S.Service bg={imageCubo.url} mobileBg={imageCuboMobile.url}>
            <S.DBMainTitle>{visionaryTitle}</S.DBMainTitle>
            <S.DBDescription>{visionarySub}</S.DBDescription>
            <Button to="/services">Read more</Button>
          </S.Service>
          <Button to="/services">Read more</Button>
        </S.OtherServices>
      </S.DBWrapper>
    </S.DBContainer>
  );
}