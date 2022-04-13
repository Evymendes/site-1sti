import styled from "styled-components";

export const DBContainer = styled.section`
  padding-top: 4rem;
  background: #0B1617;
`;

export const DBWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const DBAbout = styled.div`
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

export const DBPartnering = styled.div`
  margin: 3rem 0;
  padding: 2rem 2.6rem;
  max-width: 680px;
  border: 1px solid #00C8DB;
  border-radius: 8px;
`;

export const DBPartneringBox = styled.div`
  margin-top: 1.5rem;

  a:first-child {
    margin-right: 1.5rem;
  }
`;