import React, {useState} from "react";

import * as S from "./styled";
import Header from "../../../components/Header";
import Buttons2States from '../../../components/Buttons2States';

import ImageMobile from "../../../assets/images/Capa-Mobile-Video.jpg";

const isBrowser = typeof window !== "undefined";


export default function CallToAction({ data }) {

  
  const [active, setOpacity] = useState(true)

  const text = () => {
    const ctVideo = document.getElementById("ct-video");
    if(ctVideo.play){
      setOpacity(false)
    }
    
  };

  return (
    <S.CTAContainer>
      <S.BGVideo id="ct-video" autoPlay muted>
        <source src={data.video.url} type="video/mp4" />
      </S.BGVideo>
      <S.ImgMob src={ImageMobile} alt="" />
  
      
      <S.CTAWrapper active={active} >
        <Header title={data.title} />
  
        <S.CTATextBox>
          <S.CTAAbout>{data.about}</S.CTAAbout>
          <S.CTAOptions>
            <Buttons2States/>
          </S.CTAOptions>
        </S.CTATextBox>
      </S.CTAWrapper>
    </S.CTAContainer>
  );
};