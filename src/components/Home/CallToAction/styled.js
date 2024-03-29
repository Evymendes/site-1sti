import styled, { keyframes } from "styled-components"
import Buttons2States from "../../../components/Buttons2States"
import Wrapper from "../../../components/Wrapper"

export const Buttons = styled(Buttons2States)`
  width: 100%;
  margin: 0;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  button {
    margin: 0;
    @media(max-width: 400px) {
      button {
        max-width: 100px;
      
      }
    }
  }

` 

export const CTAContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    background: #0b1617;
  }

  & .Teste1 {
    animation-name: Teste;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    @keyframes Teste {
      0% {
        opacity: 1;
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-50px);
        opacity: 0;
      }
    }
  }
`

export const BGVideo = styled.video`
  position: absolute;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`

export const ImgMob = styled.img`
  margin-top: 4.625rem;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`

export const CTAWrapper = styled.section`
  width: 100%;
  margin-top: 5rem;
  padding-top: 3.2rem;
  height: 51.5vw;
  background: transparent
    linear-gradient(270deg, #ffffff00 0%, #0b1617a8 66%, #0b1617 100%) 0% 0%
    no-repeat padding-box;

  animation-name: Testee;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @keyframes Testee {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    height: 100vh;
  }

  h1,
  h3 {
    max-width: 430px;
    width: 100%;
  }

  @media (min-width: 1440px) {
    h1,
    h3 {
      max-width: 45vw;
    }
  }
  @media (max-width: 1200px) {
    h1,
    h3 {
      max-width: 60vw;
    }
  }
  @media (max-width: 1024px) {
    padding-top: 2rem;

    h1,
    h3 {
      max-width: 75vw;
    }
  }

  @media (max-width: 768px) {
    width: 75%;
    height: auto;

    h1 {
      padding: 0;
      font-size: 3.8em;
    }

    h3 {
      font-size: 1.3em;
    }
  }
`

export const CTAContent = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  
  
`

export const CTATextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  @media (max-width: 1024px) {
    padding-top: 1.5rem;
  }
`

export const CTAAbout = styled.h3`
  font-size: 1.375em;
  font-weight: 400;
  line-height: 1.5;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);

  @media (max-width: 950px) {
    font-size: 1.1rem;
    padding-bottom: 0.5rem;
  }
`

export const CTAOptions = styled.div`

  padding-top: 3.2rem;
  a:first-child {
    margin-right: 1.5rem;
  }
  @media (max-width: 1024px) {
    padding-top: 2rem;
  }
  @media (max-width: 768px) {
    a:last-child {
      display: none;
    }
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`
