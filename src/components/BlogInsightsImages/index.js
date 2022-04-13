import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled"

const styles = {
  hoverStyle: {
    '&:hover': { borderRadius: '50% !important' },
  }
};

const BlockImages = () => (
  <S.Container>
    <S.Wrapper>
      <S.BlockLink style={styles.hoverStyle} to="/">
        <S.Block>
          <span style={{ position: 'absolute', color: '#000', zIndex: '1' }}>
            <p>ARTICLE</p>
            <h1>What is Augmented Agility?</h1>
          </span>
          <StaticImage
            src="../../images/insights-ideia.png"
            alt="Imagem Ideia"
            layout="fixed"
            style={{ width: '100%', height: '100%' }}
          />
        </S.Block>
      </S.BlockLink>
      <S.BlockLink style={styles.hoverStyle} to="/">
        <S.Block color="#742698">
          <span>  
            <p>EDITORIAL</p>
            <h1>Deep Tech and the future of education</h1>
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