import React from "react";

import * as S from "./styled";
import Button from "../../../components/Button";

import ImageMobile from "../../../images/Capa-Mobile-Video.jpg";
import CTAVideo from "../../../images/videos/cta_video.mp4";

const isBrowser = typeof window !== "undefined";

export const isDesktop = () => {
  if (!isBrowser) {
    return;
  }

  return window.innerWidth > 768;
}

export default function CallToAction() {
  const playVideo = () => {
    const ctVideo = document.getElementById("ct-video");

    if(ctVideo.paused && isDesktop) {
      ctVideo.play(); 
    } else {
      ctVideo.pause();
    }
  };

  return (
    <S.CTAContainer onClick={() => playVideo()}>
      <S.BGVideo id="ct-video">
        <source src={CTAVideo} type="video/mp4" />
      </S.BGVideo>
      <S.ImgMob src={ImageMobile} alt="" />
  
      <S.CTAWrapper>
        <S.CTATitle>Purpose, Technology <span>& Impact</span></S.CTATitle>
  
        <S.CTATextBox>
          <S.CTAAbout>
            1STi is a Deep Tech consultancy that builds
            mission-critical digital architectures,
            enabling businesses to generate long-term
            value and embrace future change—now.
          </S.CTAAbout>
          <S.CTAOptions>
            <Button to="/">Call to Action One</Button>
            <Button to="/">Call to Action Two</Button>
          </S.CTAOptions>
        </S.CTATextBox>
      </S.CTAWrapper>
    </S.CTAContainer>
  );
};