import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  width: 100%;
  padding-top: 4rem;
  background-color: #fff;
  border-left: 20px solid #0B1617;
  border-right: 20px solid #0B1617;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  min-height: calc(100vh - 4rem);
  height: 100%;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 1440px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColorOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #742698;
  padding: 2.75rem 6rem;

  @media (max-width: 1920px) {
    padding: 2.75rem 13rem;
  }

  @media (max-width: 1440px) {
    padding: 2.75rem 4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 70%;
    padding: 2.75rem 2rem;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const BackButton = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  width: 30%;
  height: 4rem;
  color: #ffff;
  font-size: 16px;
  cursor: pointer;

  &:hover{
    span {
      padding-right: 0.5rem;
      transition: .4s;
    }
  }

  span {
    display: flex;
    justify-content: flex-end;
    width: 3rem;
    height: 1rem;
  }
`;

export const ColorTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #0B1617;

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
    padding: 0 2rem;
  }

  span {
    width: 30rem;
    text-align: center;
    color: #fff;

    h1 {
      font-weight: bold;
      line-height: 1.2;
      font-size: 38px;
      @media (max-width: 390px) {
        font-size: 28px;
      }
    }
    p {
      letter-spacing: 1.4px;
      font-size: 14px;
      color: #00C8DB;
      padding-bottom: 2rem;
    }
  }
`;

export const Linkedin = styled(GatsbyLink)`
  position: absolute;
  left: 0;
  top: 4rem;
  display: flex;
  align-items: center;
  font-size: 13px;
  text-decoration: underline;
  color: #742698;
  gap: 1rem;
  cursor: pointer;

  div:nth-child(2n+2) {
    opacity: 0;
  }

  &:hover {
    div {
      opacity: 1;
      transition: .4s;
    }
  }

  div {
    opacity: 0.4;
  }

  @media (max-width: 1440px) {
    top: 2rem;
  }
`

export const SectionOne = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #0B1617;

  span {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    p {
      max-width: 622px;
      font-size: 21px;
      line-height: 1.8;
      padding: 4rem 0;
      font-weight: 500;
    }
  }
`;

export const BlockImagensDesktop = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1150px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BlockImagensMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SectionTwo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #0B1617;

  span {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      @media (max-width: 1024px) {
        display: none;
      }
    }

    h1 {
      max-width: 800px;
      font-size: 28px;
      line-height: 1.4;
      font-weight: bold;
      padding: 1rem 0;
    }
    p {
      max-width: 602px;
      font-size: 21px;
      line-height: 1.8;
      padding: 4rem 0;
      font-weight: 500;
    }
  }
`;