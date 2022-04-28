import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  
`

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 8rem;

  @media (max-width: 800px) {
    margin-top: 12rem;
  }
`

export const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Card = styled(GatsbyLink)`
  display: flex;
  width: 50%;
  padding: 2rem 0;
  text-decoration: none;
  color: #0B1617;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  &:hover{
    color: #742698;
  }

  span {
    padding-left: 1rem;

    @media (max-width: 1200px) {
      padding: 0;
    }

    @media (max-width: 768px) {
      text-align: center;
    }

    h1 {
      width: 274px;
      font-weight: bold;
      line-height: 1.2;
      font-size: 28px;
    }
    p {
      width: 274px;
      letter-spacing: 1.4px;
      font-size: 14px;
    }
  }
`