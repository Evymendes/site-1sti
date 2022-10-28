import styled from "styled-components";
import BackbonesBG from "../../assets/images/bd_background.png";

export const DBContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #0B1617;
  overflow: hidden;
  z-index: 0;
`;

export const DBWrapper = styled.div`
  margin: 0 auto;
  padding: 4rem 0;
  max-width: 1440px;
  width: 100%;
  min-height: calc(100vh - 4rem);
  height: 100%;

  @media (max-width: 1440px) {
    padding: 4rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const DBHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0 2.5rem;
    min-height: auto;
    
    h1 {
      padding: 9rem 0 1rem;
    }
  }
`;

export const Space = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  border: solid red;
  margin: 1.75rem 4.563rem 0 4.563rem;
  padding-top: 4.5rem;
  
  width: 100%;
  min-height: calc(100vh - 4rem);

  @media (max-width: 1440px) {
    padding: 4rem 4rem 0 4rem;
  }

  @media (max-width: 768px) {
    padding: 0;
    min-height: auto;
    
    h1 {
      padding: 9rem 0 1rem;
    }
  }
`;


// Text about the service
export const DBAbout = styled.section`
  margin: 0 auto;
  width: 85%;
  font-weight: 300;

  p,
  ul {
    max-width: 480px;
  }
`;

export const DBTitleBox = styled.div`
  & > h3 {
    color: #00C8DB;
  }

  @media (max-width: 768px) {
    margin: 7rem auto 0;
    width: 100%;
  }
`;
  
export const DBMainTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  font-family: GoshaSans;
  @media (max-width: 768px) {
    max-width: 250px;
    font-size: 2.4em;
    line-height: 1;
  }
`;
  
export const DBTitle = styled.h2`
  margin: 2.5rem 0 1rem;
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: .3px;
`;
  
export const DBDescription = styled.h3`
  margin: 2.375rem 0 1rem;
  font-size: 1.875rem;
  font-weight: bold;
  font-family: CabinetGrotesk;
  width: 40rem;
  @media (max-width: 768px) {
    max-width: 240px;
    font-size: 1.2em;
  }
`;
  
export const DBSubtitle = styled.h3`
  margin: 1.5rem 0 2rem;
  font-size: 1.3em;
  font-weight: 400;

  @media (max-width: 768px) {
    margin: 4rem 0 1.5rem;
    font-size: 1.4em;
    font-weight: 600;
    line-height: 1.1;
  }
`;

export const DBParagraph = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1em;
`;

export const DBList = styled.ul`
  margin: 1.6rem 0;
  padding-left: 10px;
`;

export const DBListItem = styled.li`
  position: relative;
  font-size: .8em;

  &:before {
    content: '∙';
    position: absolute;
    left: -10px;
    font-size: 1.2em;
  }
`;

export const DBAdvantages = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DBStatistic = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  @media (max-width: 768px) {
    margin: 0 0 1.5rem;
  }
`;

export const DBValue = styled.span`
  font: 500 4.7em CabinetGrotesk;
`;

// Partnering card
export const DBPartnering = styled.section`
  margin: 0 auto;
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const DBPartneringWrapper = styled.div`
  padding: 2.2rem 2.8rem;
  max-width: 860px;
  font-size: 1.1em;
  border: 1px solid #00C8DB;
  border-radius: 8px;
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 2.5rem;
  }
`;

export const DBPartneringBox = styled.div`
  margin-top: 2rem;

  a:first-child {
    margin-right: 1.5rem;

    @media (max-width: 768px) {
      display: block;
      margin: 1.5rem 0;
    }
  }
`;

// Other Services
export const OtherServices = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 3rem;

  & > :not(p) {
    margin: 2rem 0;
  }

  & > a {
    margin: 0 0 3rem;
  }

  @media (min-width: 768px) {
    padding: 8rem 0;

    & > a {
      display: none;
    }
  }
`;

export const ExploreText = styled.p`
  margin: 0 auto;
  width: 75%;
  font-size: 1.6em;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Service = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 5.5rem 4rem;
  width: 100%;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0 0 4px #00000070;
  transition: .4s;
  overflow: hidden;
  z-index: 1;

  h3 {
    margin: 0 0 1.8rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #131313;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transform: scale(1.07);
    transition: .3s;
    z-index: -1;
  }

  &:hover {
    button {
      color: #fff;
      background: #0B1617;
    }

    &:before {
      border-color: #00C8DB;
      transform: scale(1.04);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: auto;
    min-height: 55vh;

    &:before {
      background-image: url(${props => props.mobileBg});
      transform: none;
    }

    h3 {
      margin: 0;
    }

    a {
      display: none;
    }
  }
`;