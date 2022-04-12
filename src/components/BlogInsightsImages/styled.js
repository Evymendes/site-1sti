import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BlockLink = styled(GatsbyLink)`
  display: flex;
  width: 602px;
  height: 602px;
  margin: 0 0.5rem;
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
    position: ${(props) => props.more};
    padding-top: 3.75rem;
    text-align: center;
    color: #fff;

    h2 {
      font-weight: 300;
      font-size: 14px;
      letter-spacing: 1.4px;
    }
    p {
      width: 390px;
      font-weight: bold;
      line-height: 1;
      font-size: 38px;
    }
  }
`;