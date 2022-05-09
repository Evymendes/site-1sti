import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as S from './styled'

const Cards = () => (
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
            <p>ARTICLE</p>
            <h1>Educational Backbone and a new digital operational model</h1>
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
            <p>VISUAL ESSAY</p>
            <h1>Digital Horizon</h1>
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
            <p>ARTICLE</p>
            <h1>Subverting the game logic</h1>
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
            <p>ARTICLE</p>
            <h1>Technology, teaching and learning</h1>
          </span>
        </S.Card>
      </S.BoxCard>
    </S.Wrapper>
  </S.Container>
)

export default Cards