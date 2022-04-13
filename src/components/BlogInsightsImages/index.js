import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled"

const BlockImages = () => (
  <S.Container>
    <S.Wrapper>
      <S.BlockLink to="/">
        <S.Block>
          <span style={{ position: 'absolute', color: '#000', zIndex: '1' }}>
            <h2>ARTICLE</h2>
            <p>What is Augmented Agility?</p>
          </span>
          <StaticImage
            src="../../images/insights-ideia.png"
            alt="Imagem Ideia"
            layout="fixed"
            style={{ borderRadius: '50%', width: '100%', height: '100%' }}
          />
        </S.Block>
      </S.BlockLink>
      <S.BlockLink to="/">
        <S.Block color="#742698">
          <span>
            <h2>EDITORIAL</h2>
            <p>Deep Tech and the future of education</p>
          </span>
          <StaticImage 
            src="../../images/insights-deeptech.png"
            alt="Imagem Ideia"
            layout="fixed"
          />
        </S.Block>
      </S.BlockLink>
    </S.Wrapper>
  </S.Container>
)

export default BlockImages