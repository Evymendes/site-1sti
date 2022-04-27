import React from "react";

import * as S from "./styled";
import Button from "../../../components/Button";
// import CTABackground from "../../images/videos/cta_video.mp4";


const CallToAction = () => (
  <S.CTAContainer>
    {/* <video autoPlay preload="auto" >
      <source src={CTABackground} type="video/mp4" />
    </video> */}
    
      <S.CTAWrapper>
        <S.CTATextBox>
          <S.CTATitle>Purpose, Technology & Impact</S.CTATitle>
          <S.CTAAbout>
            1STi is a Deep Tech consultancy that builds
            mission-critical digital architectures,
            enabling businesses to generate long-term
            value and embrace future change—now.
          </S.CTAAbout>
          <S.CTAOptions>
            <Button>Call to Action One</Button>
            <Button>Call to Action Two</Button>
          </S.CTAOptions>
        </S.CTATextBox>
      </S.CTAWrapper>
  </S.CTAContainer>
);

export default CallToAction