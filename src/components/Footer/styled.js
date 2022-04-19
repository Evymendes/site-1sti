import styled from "styled-components";


export const ContainerFooter = styled.footer`
  background: #0B1617;
  min-height: 55vh;
  height: 100%;
`;
export const ContentContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 2px solid #00C8DB;
  padding-top: 2.5rem;
`;
export const ContainerImagePacto = styled.div`
  width: 10%;
  display: flex;
`;
export const ImagePacto = styled.img`
  width: auto;
`;
export const Ecosystem = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const EcosystemTitle = styled.p`
  margin-bottom: 1rem;
  font-size: .95em;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const EcosystemItem = styled.a`
  padding-top: 8px;
  color: #fff;
  font: 200 1.2em 'CabinetGrotesk';
  text-decoration: none;
`;
export const SocialMedia = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  
`;
export const ImageLogo = styled.img`
  width: auto;
  cursor: pointer;
`;
export const Work = styled.div`
  width: 33%;
`;
export const WorkTitle = styled.h3`
  font-size: 1.625rem;
`;
export const WorkSubtitle = styled.p`
  padding: .6rem 0 1.5rem;
  font-size: 1.125rem;
  font-weight: 100;
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