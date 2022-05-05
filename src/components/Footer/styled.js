import styled from "styled-components";


export const ContainerFooter = styled.footer`
  background: #0B1617;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
export const ContentContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 2px solid #00C8DB;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2.5rem 0;
    gap: 2rem;
  }
`;
export const ContainerImagePacto = styled.div`
  width: 10%;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const SocialMediaMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 5rem;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const ImagePacto = styled.img`
  width: auto;
`;
export const Ecosystem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    
  }
`;
export const EcosystemTitle = styled.p`
  margin-bottom: 1rem;
  font-size: .95em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const EcosystemItem = styled.a`
  padding-top: 8px;
  color: #fff;
  font: 500 1.2em 'CabinetGrotesk';
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const SocialMedia = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
  
`;
export const ImageLogo = styled.img`
  width: auto;
  cursor: pointer;
`;
export const Work = styled.div`
  width: 33%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const WorkTitle = styled.h3`
  font-size: 1.625rem;
`;
export const WorkSubtitle = styled.p`
  padding: .6rem 0 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
`;
export const WorkButton = styled.button`
  width: 9.25rem;
  height: 3.75rem;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  font-size: 1rem;
  color: #171717;
  margin-top: 1rem;

  &:hover {
    background: #0B1617;
    color: #FFFFFF;
  }
`;