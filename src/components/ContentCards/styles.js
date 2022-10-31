import styled from "styled-components"
import BackbonesBG from "../../assets/images/bd_background.png"

export const DBContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #0b1617;
  overflow: hidden;
  z-index: 0;
`

export const DBWrapper = styled.div`
  padding: 4rem 4rem;
  /* max-width: 1440px; */
  width: 100%;
  min-height: calc(100vh - 4rem);
  height: 100%;
`

export const DBHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 1.75rem 4.563rem 0 4.563rem; */
  padding-top: 4.5rem;
  width: 100%;
  min-height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    margin: 0;
    align-items: center;
    justify-content: flex-start;
  }
`

// Text about the cards
export const DBAbout = styled.section`
  padding-top: 2rem;
  font-weight: 500;

  p,
  ul {
    max-width: 480px;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`

export const DBTitleBox = styled.div`
  & > h3 {
    color: #00c8db;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h3 {
      font-size: 1.5rem;
    }
  }
`

export const DBMainTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  font-family: GoshaSans;
  max-width: 300px;
  @media (max-width: 768px) {
    line-height: 4rem;
    font-size: 3.625rem;
  }
`

export const DBDescription = styled.h3`
  margin: 2.375rem 0 1rem;
  font-size: 1.875rem;
  font-weight: bold;
  font-family: CabinetGrotesk;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 300px;
    width: 40rem;
    margin: 0;
    padding-top: 0.5rem;
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
  /* font-size: 1em; */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const DBImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 2px solid red;

  h3 {
    color: #00c8db;
  }
  img {
    width: 500px;
  }
  @media (max-width: 768px) {
    justify-content: center;
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
      width: 15rem;
      padding-left: 1.5rem;
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

export const Card = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: 3.813rem 4.5rem;
  width: 33.22%;
  height: 455px;
  transition: 0.4s;
  h2 {
    font-size: 1.875rem;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      width: 100%;
      height: 3.813rem;
    }
    @media (max-width: 452px) {
      height: 5.719rem;
    }
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
    svg {
      color: #af39e6;
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 1024px) {
    width: 49.9%;
    height: 445px;
    border-bottom: solid 2px #0b1617;
  }
  @media (max-width: 600px) {
    height: 319px;
    padding: 2rem 1rem;
  }
  @media (max-width: 375px) {
    width: 49.7%;
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
  @media (max-width: 452px) {
    height: 8.75rem;
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
