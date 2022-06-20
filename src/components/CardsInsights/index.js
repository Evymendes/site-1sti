import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as S from './styled'

const Cards = () => {
  const {
    firsti: {
      blogs: [{ article, visualEssay, backboneText, digitalText, subvertingText, technology }],
    },
  } = useStaticQuery(graphql`
  query MyInsights{
    firsti {
      blogs{
        article
        visualEssay
        digitalText
        backboneText
        technology
        subvertingText
      }
    }
  }
`)

  return (

    <S.Container>
      <S.Wrapper>
        <S.BoxCard>
          <S.Card to="/">
            <StaticImage 
              src="../../assets/images/insights-leaf.png"
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{article}</p>
              <h1>{backboneText}</h1>
            </span>
          </S.Card>
          <S.Card to="/">
            <StaticImage 
              src="../../assets/images/insights-lula.png"
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{visualEssay}</p>
              <h1>{digitalText}</h1>
            </span>
          </S.Card>
          <S.Card to="/">
            <StaticImage 
              src="../../assets/images/insights-telephone.png"
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{article}</p>
              <h1>{subvertingText}</h1>
            </span>
          </S.Card>
          <S.Card to="/">
            <StaticImage 
              src="../../assets/images/insights-girl.png"
              alt="Imagem Ideia"
              layout="fixed"
              width={293}
              height={264}
            />
            <span>
              <p>{article}</p>
              <h1>{technology}</h1>
            </span>
          </S.Card>
        </S.BoxCard>
      </S.Wrapper>
    </S.Container>
  )
}

export default Cards