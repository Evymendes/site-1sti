import React from "react";

import * as S from "./styled";
import Button from "../../../components/Button";
// import VideoHome from "../../images/videos/video-1649703291.mp4"


const CallToAction = () => (
  <S.CTAContainer>
    {/* <S.DivVideo autoPlay preload="auto" >
      <S.Video src={VideoHome} type='video/mp4' /> */}
    
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
    {/* </S.DivVideo> */}
  </S.CTAContainer>
);

export default CallToAction