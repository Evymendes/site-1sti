import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled"

const Articles = () => {
  const {
    firsti: {
      articles: [{ linkExterno, textOne, textTwo, subTitle, textTree, textFor, imageDeeptech, editorial, deepTechTitle }],
    },
  } = useStaticQuery(graphql`
    {
      firsti {
        articles{
          imageDeeptech {
            url
          }
          editorial
          deepTechTitle
          linkExterno
          textOne {
            html
          }
          textTwo
          subTitle
          textTree
          textFor {
            html
          }
        }
      }
    }
  `);

  return (
    <>
      <S.Header>
        <S.ColorOne>
          <S.BackButton to={linkExterno}>
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
          <S.BoxImage style={{ backgroundImage: `url(${imageDeeptech.url})`, backgroundRepeat: 'no-repeat', backgroundSize: '28rem', backgroundPosition: 'center'}}></S.BoxImage>
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
              POR IGOR COUTO
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
            <span dangerouslySetInnerHTML={{__html: textOne.html}}></span>
            <S.BlockImagensMobile>
              <StaticImage 
                src="../../assets/images/insights-menina3.png"
                alt="Imagem Ideia"
                layout="fixed"
                width={288}
                height={192}
              />
              <StaticImage 
                src="../../assets/images/insights-menina2.png"
                alt="Imagem Ideia"
                layout="fixed"
                width={288}
                height={192}
              />
            </S.BlockImagensMobile>
            <S.BlockImagensDesktop>
              <StaticImage 
                src="../../assets/images/insights-menina3.png"
                alt="Imagem Ideia"
                layout="fixed"
              />
              <StaticImage 
                src="../../assets/images/insights-menina2.png"
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
                {subTitle}
              </h1>
              <p>
                {textTree}
              </p>
              <StaticImage
                src="../../assets/images/insights-menina1.png"
                alt="Imagem Ideia"
                layout="fixed"
                width={808}
                height={540}
              />
              <span dangerouslySetInnerHTML={{__html: textFor.html}}></span>
            </span>
          </S.SectionTwo>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Articles