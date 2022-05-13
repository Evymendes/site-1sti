import React from "react";

import Image1 from '../../assets/images/insights-ideia.jpg'
import Image2 from '../../assets/images/insights-deeptech.svg'

import * as S from "./styled"

const BlockImages = () => (
  <S.Container>
    <S.Wrapper>
      <S.BlockLink to="/">
        <S.Block style={{ backgroundImage: `url(${Image1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <span style={{ color: '#000', zIndex: '1' }}>
            <p>ARTICLE</p>
            <h1>What is Augmented Agility?</h1>
          </span>
        </S.Block>
      </S.BlockLink>
      <S.BlockLink to="/editorial-by-igor">
        <S.Block style={{ backgroundImage: `url(${Image2})`, backgroundRepeat: 'no-repeat', backgroundSize: '70%', backgroundPosition: 'center'}} color="#742698">
          <span>  
            <p>EDITORIAL</p>
            <h1>Deep Tech and the future of education</h1>
          </span>
        </S.Block>
      </S.BlockLink>
    </S.Wrapper>
  </S.Container>
)

export default BlockImages