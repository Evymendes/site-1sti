import styled from "styled-components";

export const DBContainer = styled.div`
  position: relative;
  background-color: #0B1617;
  background-image: url(${props => props.bg});
  background-size: 82vw;
  background-position: 40vw -22rem;
  background-repeat: no-repeat;
`;

export const DBWrapper = styled.div`
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
  
export const DBTitle = styled.h2`
  font-size: 3.5em;
  font-weight: 600;
`;
  
export const DBDescription = styled.h3`
  margin: .5rem 0 5rem;
  font-size: 1.8em;
  font-weight: 400;
`;
  
export const DBSubtitle = styled.h4`
  margin: 3rem 0 2rem;
  font-size: 1.7em;
  font-weight: 600;

  &:last-child {
    font-size: 1.25em;
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

  &:before {
    content: '∙';
    position: absolute;
    left: -10px;
    font-size: 1.1em;
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
  padding: 2rem 2.6rem;
  max-width: 600px;
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
  padding: 4rem 0 8rem;
`;

export const Service = styled.div`
  position: relative;
  padding: 2.5rem 5rem 3.5rem;
  transition: .4s;
  z-index: 1;

  h3 {
    margin: 0 0 2rem;
  }

  &:first-child {
    margin-bottom: 3rem;
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