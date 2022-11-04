import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0b1617;
`

export const Wrapper = styled.div`
  /* margin: 0 auto; */

  width: 100%;
  padding: 4rem 0;

  @media (max-width: 1440px) {
    /* padding: 4rem 4rem; */
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`

export const BoxTitleBook = styled.div`
  padding: 0 5rem;

  @media (max-width: 1440px) {
    padding: 0 4rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const Content = styled.div`
  margin: 0 auto;
`

export const BoxDescriptionContact = styled.div`
  width: 77%;
  margin: 0 auto;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 2rem;
    padding-left: 1rem;
  }
`

export const UpText = styled.div`
  max-width: 700px;
  width: 100%;

  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.2;

  p {
    padding-bottom: 1rem;
  }

  a {
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1.3em;
    line-height: 1.5;
  }
`

export const BoxBook = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const LineBox = styled.section`
  display: flex;
  justify-content: space-evenly;

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
`

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
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

  a {
    color: #fff;
  }
`

export const BookLink = styled.div`
  margin: 1rem 0 2rem;
  display: flex;
  align-items: center;

  img {
    width: 1.5rem;
  }

  a {
    color: #38eeff;
    margin: 0 10px;
    font-weight: 300;
  }

  span {
    color: #38eeff;
    font-size: 1.3em;
    transition: 0.3s;
  }

  img,
  span {
    margin-top: 5px;
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

  ::placeholder {
    color: #fff;
    font-size: 1rem;
    opacity: 1;
  }
`

export const Image = styled.img`
  box-shadow: 0 0 25px #38eeff;
`

export const Icon = styled.img`
  width: 1.2rem;
  padding-top: 1rem;
  fill: #ff0070;
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
