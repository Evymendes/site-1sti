import React, {useState} from "react";

import * as S from "./styled";
import Header from "../../../components/Header";
import Buttons2States from '../../../components/Buttons2States';

import ImageMobile from "../../../assets/images/Capa-Mobile-Video.jpg";
import { ChatVideoDimensions } from "@styled-icons/fluentui-system-filled/ChatVideo";


export default function CallToAction({ data }) {

const [isAppearing, setAppearing] = useState(false)

const toggleClass = () =>{
  setAppearing(!isAppearing);

    const ctVideo = document.getElementById("ct-video");

    if(ctVideo.muted === false && isAppearing === true) {
      ctVideo.pause()
    }

}

  return (
    <S.CTAContainer onClick={()=> toggleClass()}>
      <S.BGVideo id="ct-video" autoPlay muted>
        <source src={data.video.url} type="video/mp4" />
      </S.BGVideo>
      <S.ImgMob src={ImageMobile} alt="" />
  
      
      <S.CTAWrapper className={isAppearing ? 'Teste1' : null}>
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