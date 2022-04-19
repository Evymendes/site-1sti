import React from "react";

import * as S from "./styled";
import Button from "../Button";

import ImagePactoGlobal from "../../images/Logo-Pacto_Global.png";
import LinkedIn from "../../images/linkedIn.png";
import Instagram from "../../images/instagram.png";
import Medium from "../../images/medium.png";
import Facebook from "../../images/facebook.png";

const Footer = () => (
  <S.ContainerFooter>
      <S.ContentContainer>
        <S.ContainerImagePacto>
          <S.ImagePacto src={ImagePactoGlobal} alt="" />
        </S.ContainerImagePacto>
        
        <S.Ecosystem>
          <S.EcosystemTitle>DEEP TECH ECOSYSTEM</S.EcosystemTitle>
          <S.EcosystemItem href="">Sofya</S.EcosystemItem>
          <S.EcosystemItem href="">Vai na Web</S.EcosystemItem>
          <S.EcosystemItem href="">Precisa Ser Institute</S.EcosystemItem>
        </S.Ecosystem>
        <S.SocialMedia>
          <a href="https://www.linkedin.com/company/1sti" target="_blank">
            <S.ImageLogo src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/ola_1sti" target="_blank">
            <S.ImageLogo src={Instagram} alt="" />
          </a>
          <a href="https://medium.com/1sti" target="_blank">
            <S.ImageLogo src={Medium} alt="" />
          </a>
          <a href="https://web.facebook.com/ola1STi/" target="_blank">
            <S.ImageLogo src={Facebook} alt="" />
          </a>
        </S.SocialMedia>

        <S.Work>
          <S.WorkTitle>Come work with us!</S.WorkTitle>
          <S.WorkSubtitle>We are always looking for talent to empower deep tech transformations.</S.WorkSubtitle>
          <Button to="">See openings</Button>
        </S.Work>
      </S.ContentContainer>
  </S.ContainerFooter>
);

export default Footer