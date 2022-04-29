import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0B1617;
`
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 6rem 0rem 5rem;
  padding: 0  0 0 4rem;
  text-shadow: 0 0 16px rgba(0,0,0,.5);
`
export const UpText = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.2;

  p {
    padding-bottom: 1.5rem;
  }
`
export const LineBox = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0 2rem;
  width: 100%;
  font-size: 1rem;
`
export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 19rem;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;

  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
  }
  
  span {
    margin-top: 1rem;

    a {
      color: #38EEFF;
    }
  }

  a {
    color: #fff;
  }
`
export const NewsLetter = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  margin-top: 1rem;
  width: 100%;
  height: auto;
  font-size: 1.25rem;

  :placeholder-shown {
    color: #FFF;
    font-size: 1rem;
    opacity: 1;
  }
`
export const Image = styled.img``;

export const Icon = styled.img`
  width: 1.2rem;
  padding-top: 1rem;
  fill: #FF0070;
`
export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;

  &:hover button {
    transform: translateX(5px);
  }
`