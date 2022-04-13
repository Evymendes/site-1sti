import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  
`

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 6rem;
`

export const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const Card = styled(GatsbyLink)`
  display: flex;
  width: 50%;
  padding: 2rem 0;
  text-decoration: none;
  color: #0B1617;

  &:hover{
    color: #742698;
  }

  span {
    padding-left: 1rem;
    h1 {
      width: 274px;
      font-weight: bold;
      line-height: 1.2;
      font-size: 28px;
    }
    p {
      letter-spacing: 1.4px;
      font-size: 14px;
    }
  }
`