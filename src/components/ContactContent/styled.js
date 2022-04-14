import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background-color: #0B1617;
`
export const Title = styled.h1`
  font-size: 4rem;
  margin: 6rem 0rem 5rem;
  padding: 0  0 0 4rem;
  text-shadow: 0 0 16px rgba(0,0,0,.5);
`
export const UpText = styled.div`
  font-size: 1.75rem;
  line-height: 1.2;
  padding: 0 0 0 12rem;
  margin: 0 0 6rem;
  font-weight: 300;

  p {
    width: 42.063rem;
  }
`
export const LineBox = styled.section`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding: 0 0 2rem 9rem;
  width: 100%;
  justify-content: space-evenly;
`
export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 19rem;

  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 300;
  }
`
export const NewsLetter = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  margin-top: 1rem;

  :placeholder-shown {
    color: #FFF;
    font-size: 1.25rem;
  }
`
export const Image = styled.img`

`
export const BlueLine = styled.div`
  width: 90%;
  height: 0.05rem;
  background-color: #00C8DBCC;
  margin: 0 auto;
`;