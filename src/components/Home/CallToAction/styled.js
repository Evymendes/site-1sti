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
  position: absolute;
  width: 100%;
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
  padding: calc(3rem + 5.25rem) 0 4rem;
  width: 90%;
  height: 100vh;

  h1,
  h3 {
    max-width: 430px;
    width: 100%;
  }

  @media (max-width:768px) {
    padding: 4rem 0;
    width: 80%;
    height: auto;

    h3 {
      font-size: 1.35em;
    }
  }
`;

export const CTATextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CTATitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 4em;
  line-height: 1.2;
  text-shadow: 0 0 16px rgba(0,0,0,.5);
`;

export const CTAAbout = styled.h3`
  padding: 2rem 0;
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.5;
  text-shadow: 0 0 12px rgba(0,0,0,.5);
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