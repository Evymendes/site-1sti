import styled, { keyframes } from "styled-components";

export const CTAContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  @media (max-width:768px) {
    font-size: .85rem;
    background: #0B1617;
  }

  & .Teste1{
    animation-name: Teste;
    animation-duration: 1s;
    animation-fill-mode: forwards; 
    @keyframes Teste{
      0%{
        opacity: 1;
        transform: translateX(0px);
      }
      100%{
        transform: translateX(-50px);
        opacity: 0;
      }
    }

`;

export const BGVideo = styled.video`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }
  source{
    z-index: 10;
  }
`;

export const ImgMob = styled.img`
  margin-top: 4.625rem;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CTAWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 0;
  width: 100%;
  height: auto;
  max-width: 1440px;
  background: transparent linear-gradient(270deg, #FFFFFF00 0%, #0B1617A8 66%, #0B1617 100%) 0% 0% no-repeat padding-box;
  

  animation-name: Testee;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @keyframes Testee{
    0%{
      opacity: 0;
      transform: translateX(-50px);
    }
    100%{
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @media (max-width:1440px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 768px) {
    height: 100vh;
  }

  h1,
  h3 {
    margin: 0 4.313rem;
    max-width: 430px;
    width: 100%;
  }
  
  @media (min-width: 1440px) {
    h1,
    h3 {
      max-width: 35vw;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
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
`;


export const CTATextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CTAAbout = styled.h3`
  padding: 2rem 0 3rem;
  font-size: 1.375em;
  font-weight: 400;
  line-height: 1.5;
  text-shadow: 0 0 12px rgba(0,0,0,.5);
  
  @media (min-width: 1440px) {
    padding-bottom: 3rem;
  }
`;

export const CTAOptions = styled.div`
  a:first-child {
    margin-right: 1.5rem;
  }
  
  @media (max-width: 768px) {
    a:last-child {
      display: none;
    }
  }
`;