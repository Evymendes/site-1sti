import React from "react";

import * as S from "./styled";
import Header from "../../../components/Header";
import Button from "../../../components/Button";

import ImageMobile from "../../../assets/images/Capa-Mobile-Video.jpg";

const isBrowser = typeof window !== "undefined";

export const isDesktop = () => {
  if (!isBrowser) {
    return;
  }

  return window.innerWidth > 768;
};

export default function CallToAction({ data }) {
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
        <source src={data.video.url} type="video/mp4" />
      </S.BGVideo>
      <S.ImgMob src={ImageMobile} alt="" />
  
      <S.CTAWrapper>
        <Header title={data.title} />
  
        <S.CTATextBox>
          <S.CTAAbout>{data.about}</S.CTAAbout>
          <S.CTAOptions>
            <Button to="/">Call to Action One</Button>
            <Button to="/">Call to Action Two</Button>
          </S.CTAOptions>
        </S.CTATextBox>
      </S.CTAWrapper>
    </S.CTAContainer>
  );
};