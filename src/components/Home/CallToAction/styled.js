import styled from "styled-components";

export const CTAContainer = styled.header`
  background: #c75681;
  width: 100%;

  @media (max-width:768px) {
    background: #0B1617;
  }

`;
export const ImgMob = styled.img`
  display: none;

  @media (max-width:768px) {
    display: flex;
    width: 100%;
  }

`;

export const CTAWrapper = styled.section`
  margin: 0 auto;
  padding: 5rem 0;
  width: 90%;
  min-height: calc(100vh - 4rem);
  height: 100%;

  @media (max-width:768px) {
    display: flex;
    justify-content: center;
  }
`;


export const CTATextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40%;
  width: 100%;
  @media (max-width:768px) {
    max-width: 60%;
  }
  @media (max-width:650px) {
    max-width: 80%;
  }
`;

export const CTATitle = styled.h1`
  font-size: 4rem;
  text-shadow: 0 0 16px rgba(0,0,0,.5);
`;

export const CTAAbout = styled.h3`
  padding: 4rem 0 1rem;
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.4;
  text-shadow: 0 0 12px rgba(0,0,0,.5);
`;

export const CTAOptions = styled.div`
  a:first-child {
    margin-right: 1.5rem;
  }
`;