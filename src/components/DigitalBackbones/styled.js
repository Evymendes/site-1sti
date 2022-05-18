import styled from "styled-components";
import BackbonesBG from "../../assets/images/bd_background.png";

export const DBContainer = styled.div`
  position: relative;
  background-color: #0B1617;
  z-index: 0;
`;

export const DBWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;

  @media (max-width: 1440px) {
    // padding: 4rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const DBHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

// Header's background
export const DBBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${BackbonesBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

// Text about the service
export const DBAbout = styled.section`
  margin: 3rem auto 5rem;
  width: 85%;
  font-weight: 300;

  p,
  ul {
    max-width: 480px;
  }
`;

export const DBTitleBox = styled.div`
  margin: 0 auto;
  width: 86%;

  & > h3 {
    color: #00C8DB;
  }
`;
  
export const DBMainTitle = styled.h2`
  font-size: 3.5em;
  font-weight: 600;
`;
  
export const DBTitle = styled.h2`
  margin: 2.5rem 0 1rem;
  font-size: 1.5em;
  font-weight: 600;
`;
  
export const DBDescription = styled.h3`
  margin: .5rem 0 3rem;
  font-size: 1.8em;
  font-weight: 400;
`;
  
export const DBSubtitle = styled.h3`
  margin: 1rem 0 2rem;
  font-size: 1em;
  font-weight: 400;
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
`;

export const DBStatistic = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`;

export const DBValue = styled.span`
  font: 500 4.7em CabinetGrotesk;
`;

// Partnering card
export const DBPartnering = styled.section`
  margin: 3rem 0 3rem 2rem;
  padding: 2.2rem 2.8rem;
  max-width: 700px;
  font-size: 1.1em;
  border: 1px solid #00C8DB;
  border-radius: 8px;
`;

export const DBPartneringBox = styled.div`
  margin-top: 1.5rem;

  a:first-child {
    margin-right: 1.5rem;
  }
`;

// Other Services
export const OtherServices = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;

  & > :not(p) {
    margin: 2rem 0;
  }
`;

export const ExploreText = styled.p`
  margin: 0 auto;
  width: 85%;
  font-size: 1.6em;
`;

export const Service = styled.div`
  position: relative;
  padding: 2.5rem 5rem 3.5rem;
  width: 98%;
  transition: .4s;
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
    border: 1px solid #000;
    border-radius: 8px;
    box-shadow: 0 0 4px #00000070;
    background-color: #131313;
    background-image: url(${props => props.bg});
    background-size: calc(100% + 2rem);
    background-position: -1rem, 0;
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
`;