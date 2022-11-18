import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled"

const Articles = () => {
  const {
    firsti: {
      posts: [{
        author,
        textOne,
        imageCardOne,
        imageCardTwo,
        imageCover,
        textTwo,
        subtitle,
        textThree,
        textFor,
        linkLinkedin,
        editorial,
        deepTechTitle,
        imageDeeptech,
      }],
    },
  } = useStaticQuery(graphql`
    {
      firsti {
        posts {
          author
          textOne {
            html
          }
          imageCardOne {
            url
          }
          imageCardTwo {
            url
          }
          imageCover {
            url
          }
          textTwo
          subtitle
          textThree
          textFor {
            html
          }
          linkLinkedin
          editorial
          deepTechTitle
          imageDeeptech {
            url
          }
        }
      }
    }
  `);

  return (
    <>
      <S.Header>
        <S.ColorOne>
          <S.BackButton to={linkLinkedin}>
            <span>
              <StaticImage
                style={{ marginRight: '0.5rem' }}
                src="../../assets/images/icon-return.svg"
                alt="Imagem Ideia"
                layout="fixed"
              />
            </span>
            Insights
          </S.BackButton>
          <S.BoxImage style={{ backgroundImage: `url(${imageDeeptech.url})`, backgroundRepeat: 'no-repeat', backgroundSize: '28rem', backgroundPosition: 'center' }}></S.BoxImage>
        </S.ColorOne>
        <S.ColorTwo>
          <span>
            <p>
              {editorial}
            </p>
            <h1>
              {deepTechTitle}
            </h1>
          </span>
        </S.ColorTwo>
      </S.Header>
      <S.Container>
        <S.Wrapper>
          <S.SectionOne>
            <S.Linkedin>
              POR {author}
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
            <span dangerouslySetInnerHTML={{ __html: textOne.html }}></span>
            <S.BlockImagensMobile>
              <img
                src={imageCardOne.url}
                alt="Imagem Ideia"
                layout="fixed"
                width={288}
                height={192}
              />
              <img
                src={imageCardTwo.url}
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
                src={imageCardOne.url}
                alt="Imagem Ideia"
                layout="fixed"
                style={{
                  width: 499,
                  height: 335,
                }}
              />
              <img
                src={imageCardTwo.url}
                alt="Imagem Ideia"
                layout="fixed"
              />
            </S.BlockImagensDesktop>
            <span>
              <p>
                {textTwo}
              </p>
            </span>
          </S.SectionOne>
          <S.SectionTwo>
            <span>
              <h1 style={{ width: '100%' }}>
                {subtitle}
              </h1>
              <p>
                {textThree}
              </p>
              <img
                src={imageCover.url}
                alt="Imagem Ideia"
                layout="fixed"
                style={{
                  width: 808,
                  height: 540,
                }}
              />
              <span dangerouslySetInnerHTML={{ __html: textFor.html }}></span>
            </span>
          </S.SectionTwo>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Articles