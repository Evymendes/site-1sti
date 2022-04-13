import React from "react";

import * as S from "./styled"

import BlockImages from "../BlogInsightsImages";
import CardsInsigts from "../CardsInsights"

const Insights = () => (
  <S.Container>
    <S.Wrapper>
        <S.PageTitle>Insights</S.PageTitle>
      <BlockImages />
      <CardsInsigts />
    </S.Wrapper>
  </S.Container>
)

export default Insights