import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const Container = styled.div`
  width: 100%;
  padding-top: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 4rem);
  height: 100%;
  margin: 0 auto;
  padding: 4rem 4.6rem;
  background-color: #fff;
  border-left: 20px solid #0B1617;
  border-right: 20px solid #0B1617;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 85vh;

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
  color: #ffff;
  font-size: 16px;
  cursor: pointer;
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
    text-align: center;
    color: #fff;

    h1 {
      font-weight: bold;
      line-height: 1.2;
      font-size: 38px;
      @media (max-width: 768px) {
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
  color: #742698;
  gap: 1rem;
  cursor: pointer;

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
    max-width: 900px;
    gap: 1rem;

    @media (max-width: 768px) {
      align-items: center;
      flex-direction: column;
    }

    p {
      font-size: 20px;
      line-height: 1.5;
      padding: 4rem 0;
      font-weight: 500;
    }
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
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      @media (max-width: 1024px) {
        display: none;
      }
    }

    h1 {
      font-size: 28px;
      line-height: 1;
      font-weight: bold;
      padding: 1rem 0;
    }
    p {
      font-size: 20px;
      line-height: 1.5;
      padding: 4rem 0;
      font-weight: 500;
    }
  }
`;