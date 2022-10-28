import styled from "styled-components";
import BackbonesBG from "../../assets/images/bd_background.png";

export const DBContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 100px;
  padding-block: 2px;


`;

export const DBHeader = styled.header`
  width: 100%;
  

  @media(max-width: 1440px) {
    padding-inline: 70px;
  }

  @media(max-width: 800px) {
    padding-inline: 20px;
  }
`;

export const Space = styled.div`
  width: 100%;
  margin-top: 39px;
  display: flex;

  
  img {
    margin-left: 50px;
    width: 540px;
    height: 540px;
  }

  @media(max-width: 1030px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    img {
      width: 480px;
      height: 480px;
    }
  }

  @media(max-width: 700px) {
    img {
      width: 250px;
      height: 250px;

      position: relative;
      left: -30px;
    }
  }
`;

export const DBTitleBox = styled.div`
  width: 100%;
`;

export const DBMainTitle = styled.h2`
  font-size: 64px;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 0;
  

`;
  
export const DBDescription = styled.h3`
  width: 100%;
  max-width: 650px;
  margin-top: 32px;

  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  color: #38EEFF;
`;
  
export const BoxInformations = styled.div`
  position: relative;
  bottom: 160px;

  
  @media(max-width: 1440px) {
    padding-left: 70px;
  }

  @media(max-width: 800px) {
    padding-left: 20px;
  }

  @media(max-width: 1030px) {
    position: initial;
    margin-bottom: 32px;
  }
`

export const TextExpirience = styled.p`
  max-width: 360px;
  font-size: 18px;
  margin-bottom: 38px;

  @media(max-width: 800px) {
    font-size: 18px;
    font-weight: 400;
  } 

`


export const List = styled.ul`
  font-size: 18px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  strong {
    @media(max-width: 800px) {
      font-size: 18px;
      font-weight: 400;
    } 
  }

  li {
    flex: 1;
    line-height: 28px;

    @media(max-width: 800px) {
      font-size: 16px;
      font-weight: 400;
    } 
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin-top: 38px;

  @media(max-width: 1030px) {
    display: flex;
    flex-wrap: wrap;

  }
  

  
`

export const Teste = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  gap: 1px;
  
  
  @media(max-width: 1030px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

  }
`

export const ContentListCards = styled.div`
  width: 100%;
  display: flex;
  display: grid;

  @media(max-width: 1030px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ListCard = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1px;
  margin-top: 1px;

@media(max-width: 1030px) {
  display: flex;
  justify-content: end;
  gap: 1px;

}

;

  @media(max-width: 1030px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    

  }
`;




// Text about the service
export const DBAbout = styled.section`
  /* margin: 0 auto;
  width: 85%;
  font-weight: 300;

  p,
  ul {
    max-width: 480px;
  } */
`;

  
export const DBTitle = styled.h2`
  /* margin: 2.5rem 0 1rem;
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: .3px; */
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