import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Articles = ({ pageContext }) => {

  return (
    <>
      <S.Header>
        <S.ColorOne>
          <S.BackButton to={pageContext.linkLinkedin}>
            <span>
              <StaticImage
                style={{ marginRight: "0.5rem" }}
                src="../../assets/images/icon-return.svg"
                alt="Imagem Ideia"
                layout="fixed"
              />
            </span>
            Insights
          </S.BackButton>
          <S.BoxImage
            style={{
              backgroundImage: `url(${pageContext.imageDeeptech?.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "28rem",
              backgroundPosition: "center",
            }}
          ></S.BoxImage>
        </S.ColorOne>
        <S.ColorTwo>
          <span>
            <p>{pageContext.editorial}</p>
            <h1>{pageContext.deepTechTitle}</h1>
          </span>
        </S.ColorTwo>
      </S.Header>
      <S.Container>
        <S.Wrapper>
          <S.SectionOne>
            <S.Linkedin>
              POR {pageContext.author}
              <StaticImage
                src="../../assets/images/linkedin.svg"
                alt="Imagem Ideia"
                layout="fixed"
              />
              <StaticImage
                src="../../assets/images/arrow-up-right.svg"
                alt="Seta para link"
                layout="fixed"
              />
            </S.Linkedin>
            <span dangerouslySetInnerHTML={{ __html: pageContext.textOne?.html }}></span>
            <S.BlockImagensMobile>
              <img
                src={pageContext.imageCardOne?.url}
                alt="Imagem Ideia"
                layout="fixed"
                width={288}
                height={192}
              />
              <img
                src={pageContext.imageCardTwo?.url}
                alt="Imagem Ideia"
                layout="fixed"
                style={{
                  width: 288,
                  height: 192,
                }}
              />
            </S.BlockImagensMobile>
            <S.BlockImagensDesktop>
              <img
                src={pageContext.imageCardOne?.url}
                alt="Imagem Ideia"
                layout="fixed"
                style={{
                  width: 499,
                  height: 335,
                }}
              />
              <img src={pageContext.imageCardTwo?.url} alt="Imagem Ideia" layout="fixed" />
            </S.BlockImagensDesktop>
            <span>
              <p>{pageContext.textTwo}</p>
            </span>
          </S.SectionOne>
          <S.SectionTwo>
            <span>
              <h1 style={{ width: "100%" }}>{pageContext.subtitle}</h1>
              <p>{pageContext.textThree}</p>
              <img
                src={pageContext.imageCover?.url}
                alt="Imagem Ideia"
                layout="fixed"
                style={{
                  width: 808,
                  height: 540,
                }}
              />
              <span dangerouslySetInnerHTML={{ __html: pageContext.textFor?.html }}></span>
            </span>
          </S.SectionTwo>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Articles
