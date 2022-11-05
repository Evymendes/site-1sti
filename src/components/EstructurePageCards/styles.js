import styled from 'styled-components'

export const Space = styled.div`
  display: flex;
  align-items: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 2;

  @media (max-width: 768px) {
    margin: 0;
    align-items: center;

  }
`

export const DBTitleBox = styled.div`
  width: 100%;
  z-index: 2;


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
  margin: 32px 0 100px 0;
  font-size: 1.875rem;
  font-weight: 600;
  font-family: CabinetGrotesk;
  width: 100%;
  max-width: 500px;
  z-index: 2;
  

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 0.5rem;
    font-size: 1.3rem;
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

export const BoxTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 2;

  @media (max-width: 1340px) {
    position: inital;
    bottom: 0;

    margin-top: 64px;
  }
`

export const DBAbout = styled.section`
  font-weight: 500;
  font-size: 18px;
 

`

export const DBParagraph = styled.p`
  width: 100%;
  max-width: 555px;
  display: flex;
  flex-direction: column;
  display: block;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`