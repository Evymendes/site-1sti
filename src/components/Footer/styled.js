import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background: #0B1617;
`;

export const ContentContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  margin: 0 4.563rem 0 4.563rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 2px solid #00C8DB;
  padding: 2rem 0;
  @media (max-width: 768px) {
    margin: 0 1rem 0 1rem;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 2.5rem 2rem;
    gap: 2rem;
  }
`;

export const ContainerImagePacto = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    
    & > div {
      width: 50%;
    }
  }
`;

export const SocialMediaMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 5rem;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 1.5rem 2rem;
  }
`;

export const ImagePacto = styled.img`
  width: 110px;
  height: 130px;
  @media(max-width: 500px){
    width: 7rem;
    height: 7rem;
  }
`;

export const Ecosystem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1200px) {
    margin: 0 1rem;
  }
  @media(max-width: 768px){
    margin: 0;
  }
`;

export const EcosystemTitle = styled.p`
  margin-bottom: 1rem;
  font-family: CabinetGrotesk;
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const EcosystemItem = styled.a`
  display: flex;
  align-items: center;
  padding-top: 8px;
  color: #fff;
  font-family: CabinetGrotesk;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
  width: 190px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageLogo = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 5px;
  cursor: pointer;
`;

export const Work = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WorkTitle = styled.h3`
  font-family: CabinetGrotesk;
  font-size: 30px;
  font-weight: 400;
`;

export const WorkSubtitle = styled.p`
  padding: .6rem 0 1.5rem;
  font-size: 18px;
  font-family: CabinetGrotesk;
  font-weight: 300;
`;

export const WorkButton = styled.button`
  width: 9.25rem;
  height: 3.75rem;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  font-family: CabinetGrotesk;
  font-size: 17px;
  font-weight: 500;
  color: #171717;
  margin-top: 1rem;

  &:hover {
    background: #0B1617;
    color: #FFFFFF;
  }
`;