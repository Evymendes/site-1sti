import React from "react";

import * as S from "./styled"

import BlockImages from "../BlogInsightsImages";

const Insights = () => (
  <S.Container>
    <S.Wrapper>
      <S.BoxHeader>
        <S.PageTitle>Insights</S.PageTitle>
      </S.BoxHeader>
      <BlockImages/>
    </S.Wrapper>
  </S.Container>
)

export default Insights