import styled from "styled-components"
import BackbonesBG from "../../assets/images/bd_background.png"

export const DBContainer = styled.div`
  width: 100%;
  background-color: #0b1617;
  overflow: hidden;
  z-index: 0;
`

export const DBContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 6rem;
`

export const DBWrapper = styled.div`
  /* max-width: 1440px; */
  width: 100%;
  height: 100%;
`

export const DBHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1440px) {
    padding-inline: 70px;
  }

  @media (max-width: 1210px) {
    padding-inline: 40px;
  }

  @media (max-width: 800px) {
    padding-inline: 20px;
    justify-content: center;
    align-items: center;
  }
`

export const Space = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 0;
    align-items: center;
    justify-content: flex-start;
  }
`
export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  gap: 32px;

  @media (max-width: 1340px) {
    position: inital;
    bottom: 0;

    margin-top: 64px;
  }
`

// Text about the cards
export const DBAbout = styled.section`
  font-weight: 500;

  p,
  ul {
    width: 100%;
    max-width: 480px;
    padding-bottom: 2rem;
  }
`

export const DBTitleBox = styled.div`
  width: 100%;
  max-width: 500px;

  @media (max-width: 1340px) {
    margin-bottom: 32px;
  }

  & > h3 {
    color: #00c8db;
  }
`

export const DBMainTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  font-family: GoshaSans;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    line-height: 4rem;
    font-size: 2.5rem;
  }
`

export const DBDescription = styled.h3`
  margin: 2.375rem 0 5rem 0;
  font-size: 1.875rem;
  font-weight: 600;
  font-family: CabinetGrotesk;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 0.5rem;
    font-size: 1.3rem;
  }
`

export const DBSubtitle = styled.h3`
  margin: 1.5rem 0 2rem;
  font-size: 1.3em;
  font-weight: 400;
`

export const DBParagraph = styled.p`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const DBImageBox = styled.div`
  width: 100%;
  max-width: 627px;
  margin-top: 106px;

  img {
    width: 100%;
    height: 439px;
  }

  @media (max-width: 1340px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`
export const DBContentContactUs = styled.div`
  border-top: 1px solid #742698;
`

export const DBContentContactUsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 0;

  button {
    background-color: #fff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 2rem;
    font-size: 1.2rem;
  }

  button:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      font-size: 1rem;
      padding: 1.5rem;
    }
  }
`

export const DBContentContactUsTitle = styled.section`
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    width: 40rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding-bottom: 1rem;
      width: 100%;
      max-width: 370px;
      text-align: center;
    }
  }
`
export const ContainerServices = styled.section`
  width: 100%;
  height: auto;
  background-color: #0b1617;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem;
`

export const ContentListCards = styled.div`
  width: 100%;
  display: grid;

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
  grid-gap: 1px;
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
