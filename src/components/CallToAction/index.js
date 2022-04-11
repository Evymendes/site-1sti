import React from "react";

import * as S from "./styled";
import Button from "../Button";

const CallToAction = () => (
  <S.CTAContainer>
    <S.CTAWrapper>
      <S.CTATextBox>
        <S.CTATitle>Purpose, Technology & Impact</S.CTATitle>
        <S.CTAAbout>
          1STi is a Deep Tech consultancy that builds
          mission-critical digital architectures,
          enabling businesses to generate long-term
          value and embrace future change—now.
        </S.CTAAbout>
        <S.BtnBox>
          <Button>Call to Action One</Button>
          <Button>Call to Action Two</Button>
        </S.BtnBox>
      </S.CTATextBox>
    </S.CTAWrapper>
  </S.CTAContainer>
);

export default CallToAction