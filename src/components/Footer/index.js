import React from "react";

import * as S from "./styled";
import Button from "../Button";

const Footer = ({ data }) => (
  <S.ContainerFooter>
      <S.ContentContainer>
        <S.ContainerImagePacto>
          <S.ImagePacto src={data.globalLogo.url} alt="" />
          <S.SocialMediaMobile>
            {data.socialLinks.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noreferrer">
                <S.ImageLogo src={item.icon.url} alt={item.icon.alt} />
              </a>
            ))}
          </S.SocialMediaMobile>
        </S.ContainerImagePacto>
        
        <S.Ecosystem>
          <S.EcosystemTitle>{data.links.title}</S.EcosystemTitle>
          {data.links.list.map((item, i) => (
            <S.EcosystemItem key={i} href={item.link}>{item.website}</S.EcosystemItem>
          ))}
        </S.Ecosystem>
        
        <S.SocialMedia>
          {data.socialLinks.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noreferrer">
              <S.ImageLogo src={item.icon.url} alt={item.icon.alt} />
            </a>
          ))}
        </S.SocialMedia>

        <S.Work>
          <S.WorkTitle>{data.title}</S.WorkTitle>
          <S.WorkSubtitle>{data.paragraph}</S.WorkSubtitle>
          <Button to="">See openings</Button>
        </S.Work>
      </S.ContentContainer>
  </S.ContainerFooter>
);

export default Footer