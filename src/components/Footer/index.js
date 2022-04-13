import React from "react";
import ImagePactoGlobal from "../../images/Logo-Pacto_Global.png";
import LinkedIn from "../../images/linkedIn.png";
import Instagram from "../../images/instagram.png";
import Medium from "../../images/medium.png";
import Facebook from "../../images/facebook.png";

import * as S from "./styled";

const Footer = () => (
  <S.ContainerFooter>
      <S.ContentContainer>
        <S.ContainerImagePacto>
          <S.ImagePacto src={ImagePactoGlobal} alt="" />
        </S.ContainerImagePacto>
        <S.Ecosystem>
          <S.EcosystemTitle>DEEP TECH ECOSYSTEM</S.EcosystemTitle>
          <S.EcosystemItem>Sofya</S.EcosystemItem>
          <S.EcosystemItem>Vai na Web</S.EcosystemItem>
          <S.EcosystemItem>Precisa Ser Institute</S.EcosystemItem>
        </S.Ecosystem>
        <S.SocialMedia>
          <S.ImageLogo src={LinkedIn} alt="" />
          <S.ImageLogo src={Instagram} alt="" />
          <S.ImageLogo src={Medium} alt="" />
          <S.ImageLogo src={Facebook} alt="" />
        </S.SocialMedia>
        <S.Work>
          <S.WorkTitle>Come work with us!</S.WorkTitle>
          <S.WorkSubtitle>We are always looking for talent to empower deep tech transformations.</S.WorkSubtitle>
          <S.WorkButton>See openings</S.WorkButton>
        </S.Work>
      </S.ContentContainer>    
      

  </S.ContainerFooter>
);

export default Footer