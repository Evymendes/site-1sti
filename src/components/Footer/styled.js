import styled from "styled-components";


export const ContainerFooter = styled.footer`
  background: #0B1617;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 16.125rem;

`;
export const ContentContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 2px solid #00C8DB;
  padding-top: 2rem;
`;
export const ContainerImagePacto = styled.div`
  width: 15%;
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
  font-size: 1rem;
`;
export const EcosystemItem = styled.p`
  font-size: 1.25rem;
`;
export const SocialMedia = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  
`;
export const ImageLogo = styled.img`
  width: auto;
`;
export const Work = styled.div`
  width: 33%;
  
`;
export const WorkTitle = styled.h3`
  font-size: 1.625rem;
  padding-bottom: .5rem;
`;
export const WorkSubtitle = styled.p`
  font-size: 1.125rem;
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