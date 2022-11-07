import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;

  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
  margin-top: 4.625rem;
  padding-block: 32px;
  padding-bottom: 150px;

  position: relative;
  overflow: hidden;

  @media (max-width: 1440px) {
    padding-inline: 70px;
  }

  @media (max-width: 1210px) {
    padding-inline: 40px;
    padding-block: 15px;
  }

  @media (max-width: 800px) {
    padding-inline: 30px;
  }
`

export const BoxHeander = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const DBImageBox = styled.div`
  display: ${props => (props.isResponsive ? "none" : "block")};

  width: 100%;
  max-width: 620px;
  margin-top: ${props => (props.isResponsive ? "32px" : "136px")};
  object-fit: cover;

  @media (max-width: 1024px) {
    display: ${props => (props.isResponsive ? "block" : "none")};
  }
`

export const DBContentContactUsWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  border-top: 1px solid #742698;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 82px;

  padding: 2rem 0;
  margin-inline: auto;

  button {
    background-color: #fff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 20px 24px;
    font-size: 1.2rem;
  }

  button:hover {
    background-color: #0b1617;
    color: #fff;
  }

  h2 {
    width: 100%;
    max-width: 480px;
    font-size: 30px;
  }

  @media (max-width: 1440px) {
    padding-inline: 70px;
  }

  @media (max-width: 1210px) {
    padding-inline: 40px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
    padding-inline: 20px;

    h2 {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

export const ContentListCards = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 60px;

  display: flex;

  @media (max-width: 1030px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ListCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
  margin-top: 1px;

  @media (max-width: 1030px) {
    display: flex;
    justify-content: end;
    gap: 1px;
  }

  @media (max-width: 1290px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const Card = styled.div`
  width: 100%;
  background-color: #000000;
  display: grid;

  padding: 3.813rem 4.5rem;
  transition: 0.4s;
  h2 {
    font-size: 1.875rem;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 18px;
      width: 100%;
    }
  }
  img {
    display: none;
  }
  &:hover {
    p {
      color: #38eeff;
    }
    h2 {
      font-weight: bold;
    }

    a {
      color: #af39e6;
    }
    img {
      display: block;
    }
  }
  @media (max-width: 768px) {
    padding-inline: 16px;
  }
`

export const Title = styled.h2`
  max-width: 80%;
  font-family: GoshaSans;
  font-size: 2.875rem;
  font-weight: bold;
  line-height: 1.2;
`

export const DescriptionCard = styled.p`
  height: 6.5rem;
  margin-top: 2.25rem;
  font-family: CabinetGrotesk;
  font-size: 1.375rem;
  color: #7e7e7e;
  z-index: 1;
  @media (max-width: 768px) {
    margin-top: 0.625rem;
    font-size: 1.2rem;
  }
`

export const LinkKnowMore = styled.div`
  display: flex;
  margin-top: 6.125rem;
  width: 100%;
  gap: 16px;

  img {
    width: 19px;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 15px;
    }
  }
  a {
    color: #000;
    font-size: 1.25rem;
    font-weight: 100;
    font-family: Cabinet Grotesk;
    text-decoration: none;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    margin-top: 1.75rem;
  }
`
