import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
`;

export const BlockLink = styled(GatsbyLink)`
  display: flex;
  width: 602px;
  height: 602px;
  text-decoration: none;
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};

  span {
    padding: 3.75rem 0;
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
    }
  }
`;