import styled from "styled-components"

export const DBContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #0b1617;
  overflow: hidden;
  z-index: 0;
  padding-bottom: 4rem;
`

export const DBWrapper = styled.div`
  padding: 4rem 4rem;
  /* max-width: 1440px; */
  width: 100%;
  min-height: calc(100vh - 4rem);
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    padding: 2.063rem 2.063rem;
  }
`

export const DBHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 11rem;
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
  padding-bottom: 5rem;
  & > h3 {
    color: #00c8db;
  }

  @media (max-width: 768px) {
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
  font-weight: 600;
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

  span {
    font-weight: 200;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const DBImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  h3 {
    color: #00c8db;
  }
  img {
    width: 500px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
export const DBContentContactUs = styled.div`
  border-top: 1px solid #742698;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DBContentContactUsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 92px;
  padding: 2rem 0 3rem 0;

  button {
    height: 59px;
    width: 144px;
    background-color: #fff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  button:hover {
    background-color: #0b1617;
    color: #fff;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    button {
      font-size: 1rem;
    }
  }
`

export const DBContentContactUsTitle = styled.section`
  h2 {
    font-size: 2.5rem;
    font-weight: 400;
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
  display: grid;

  padding: 3.813rem 4.5rem;
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
    padding: 3rem 2rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 445px;
    border-bottom: solid 2px #0b1617;
  }
  @media (max-width: 600px) {
    height: 319px;
    padding: 2rem 1rem;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
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
    gap: 1px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
// imagem mobile

export const ImageMobile = styled.img`
  width: 50%;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 600px) {
    width: 65%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`
