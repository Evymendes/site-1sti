import React, {useState} from 'react'
import styled from 'styled-components'
import PlayIcon from '../../assets/images/play-icon.svg'
import PlayIconHover from '../../assets/images/play-icon-hover.svg'

export const Div = styled.div`
  width: 100%;
  margin: 0 4.313rem;
  display: flex;
  @media(max-width: 768px){
    margin: 0 2rem;
    justify-content: space-between;
  }
  @media(max-width: 600px){
    margin: 0 1rem;
  }
`

export const ButtonOne = styled.button`
    transition: .4s;
    height: 59px;
    background-color: #FFF;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 0 1.25rem 0 2.75rem;
    font-size: 17px;
    font-family: CabinetGrotesk;
    font-weight: 500;
    background-image: url(${PlayIcon});
    background-repeat: no-repeat;
    background-position: 0.875rem 1rem;
    &:hover{
        cursor: pointer;
        background-color: #0B1617;
        background-image: url(${PlayIconHover});
        color: #FFF;
    }
`
export const ButtonTwo = styled.button`
    margin-left: 1.875rem;
    width: 163px;
    height: 59px;
    transition: .4s;
    background-color: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 5px;

    font-size: 17px;
    font-family: CabinetGrotesk;
    font-weight: 500;
    color: #FFF;
    &:hover{
        cursor: pointer;
        background-color: #0B1617;
    }
`

const isBrowser = typeof window !== "undefined";

export const isDesktop = () => {
    if (!isBrowser) {
      return;
    }
  
    return window.innerWidth > 768;
  };

export default function Button2State(color){

    const playVideo = () => {
        const ctVideo = document.getElementById("ct-video");
    
        if(ctVideo.play && isDesktop) {
          ctVideo.currentTime = 0;
          ctVideo.muted = false;
          ctVideo.play()
        }
      };


    return(
        <Div>
            <ButtonOne onClick={() => playVideo()}>Understand Deep Tech</ButtonOne>
            <ButtonTwo>Our clients</ButtonTwo>
        </Div>
    )
}