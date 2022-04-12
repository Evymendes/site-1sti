import styled from "styled-components";


export const ContainerFooter = styled.footer`
  background: #0B1617;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 16.125rem;

`;
export const ContentContainer = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const ContainerImagePacto = styled.div`
  width: 15%;
  display: flex;
  
  
`;
export const ImagePacto = styled.img`


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
`;
export const Work = styled.div`
  width: 30%;
  
`;
export const WorkTitle = styled.h3`
  font-size: 1.625rem;
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

  &:hover {
    background: #0B1617;
    color: #FFFFFF;
  }
`;