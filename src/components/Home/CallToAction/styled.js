import styled from "styled-components";

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
`;

export const BGVideo = styled.video`
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
  margin: 0 auto;
  padding: 0 0 4rem;
  width: 100%;
  height: 100vh;
  max-width: 1440px;

  h1,
  h3 {
    max-width: 430px;
    width: 100%;
  }
  
  @media (min-width: 1440px) {
    padding-bottom: 7rem;
    width: 90%;

    h1,
    h3 {
      max-width: 35vw;
    }
  }

  @media (max-width: 1440px) {
    padding: 4rem;
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