import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin: 2rem 0;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    gap: 10rem;
  }

  @media (max-width: 500px) {
    gap: 12rem;
  }
`;

export const BlockLink = styled(GatsbyLink)`
  display: flex;
  width: 602px;
  height: 602px;
  text-decoration: none;

  @media (max-width: 900px) {
    width: 100%;
    height: 500px;
  }

  @media (max-width: 500px) {
    width: 288px;
    height: 288px;
  }
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};

  &:hover {
    border-radius: 50%;
    transition: .2s;
  }

  span {
    padding: 2rem 2rem;
    text-align: center;
    color: #fff;

    @media (max-width: 768px) {
      position: absolute;
      top: 32rem;

      color: #000;
    }
    @media (max-width: 500px) {
      top: 18rem;
    }

    h1 {
      width: 100%;
      max-width: 390px;
      font-weight: bold;
      line-height: 1.2;
      font-size: 36px;

      @media (max-width: 1024px) {
        font-size: 28px;
      }
    }
    p {
      letter-spacing: 1.4px;
      font-size: 14px;

      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`;