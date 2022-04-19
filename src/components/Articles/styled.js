import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  width: 100%;
  padding-top: 4rem;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 4rem 4.6rem;
  width: 100%;
  min-height: calc(100vh - 4rem);
  height: 100%;
  background-color: #fff;
  border-left: 20px solid #0B1617;
  border-right: 20px solid #0B1617;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 85vh;
`;

export const ColorOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #742698;
  padding: 2.75rem 6rem;
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
  color: #171717;
  font-size: 16px;
  cursor: pointer;
`;

export const ColorTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #0B1617;

  span {
    text-align: center;
    color: #fff;

    h1 {
      width: 390px;
      font-weight: bold;
      line-height: 1.2;
      font-size: 38px;
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
`

export const SectionOne = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0B1617;

  span {
    display: flex;
    gap: 1rem;
    p {
      width: 40rem;
      font-size: 20px;
      line-height: 1.5;
      padding: 4rem 0;
      font-weight: 500;
    }
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0B1617;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      width: 50rem;
      font-size: 28px;
      line-height: 1;
      font-weight: bold;
      padding: 1rem 0;
    }
    p {
      width: 40rem;
      font-size: 20px;
      line-height: 1.5;
      padding: 4rem 0;
      font-weight: 500;
    }
  }
`;