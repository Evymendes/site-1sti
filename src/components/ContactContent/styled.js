import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0B1617;
  
  a {
    color: #38EEFF;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  padding: 4rem 0;

  @media (max-width: 1440px) {
    padding: 4rem 4rem;
  }
  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
`;

export const UpText = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.2;

  p {
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3em;
    line-height: 1.5;
  }
`
export const LineBox = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0 2rem;
  width: 100%;
  font-size: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0 5rem;

    & > div {
      padding: 3rem 0;
      width: 100%;
    }
  }
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 19rem;
  font-size: 1.25rem;
  font-weight: 200;
  line-height: 1.5;

  &:nth-child(2) {
    margin: 0 1rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    letter-spacing: 0.125rem;
    font-weight: 500;
  }
`;

export const BookLink = styled.div`
  margin-top: 1rem;
  
  a,
  span {
    margin-left: 5px;
    font-weight: 300;
    transition: .3s;
  }

  @media (min-width: 768px) {
    span {
      opacity: 0;
    }

    &:hover {
      a {
        font-weight: 600;
      }

      span {
        opacity: 1;
      }
    }
  }
`;

export const NewsLetter = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  margin-top: 1rem;
  width: 100%;
  height: auto;
  font-size: 1.25rem;

  ::placeholder {
    color: #FFF;
    font-size: 1rem;
    opacity: 1;
  }
`;

export const Image = styled.img``;

export const Icon = styled.img`
  width: 1.2rem;
  padding-top: 1rem;
  fill: #FF0070;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;

  &:hover button {
    transform: translateX(5px);
  }
`;