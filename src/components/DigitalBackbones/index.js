import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Imgheader from '../../assets/images/agility_img.png'

import Services from '../Home/Services'

import * as S from "./styled";
import Header from "../Header";
import Button from "../Button";


export default function DigitalBackbones() {
  const {
    firsti: {
      contentServices: [{ 
        title,
        titlePt,
        subtitle,
        subtitlePt,
        publishedAt
      }],
    },
  } = useStaticQuery(graphql`
  query MyQueryServices {
    firsti {
      contentServices {
        title
        titlePt
        subtitle
        subtitlePt
        publishedAt
      }
    }
  }
`)

  const cardServicesData = [
    {
      id: 1,
      title: 'Estratégia Digital',
      subscription: 'A tecnologia como meio para transformações profundas'
    },
    {
      id: 2,
      title: 'Backbones Digitais',
      subscription: 'Acelerando inovações com agilidade aumentada' 
    },
    {
      id: 3,
      title: 'Plataformas Digitais',
      subscription: 'O caminho para o presente e o futuro dos negócios' 
    },
    {
      id: 4,
      title: 'Inovação Deep Tech',
      subscription: 'Tecnologias visionárias para inovação de alto impacto' 
    },
    {
      id: 5,
      title: 'Deep Analytics',
      subscription: 'Amplificando análise de dados para multiplicar oportunidades' 
    },
    {
      id: 6,
      title: 'Deep Analytics',
      subscription: 'Amplificando análise de dados para multiplicar oportunidades' 
    }
  ] 
    
  return (
    <S.DBContainer>
        <S.DBHeader>
        <S.Space>
          <S.DBTitleBox>
            <S.DBMainTitle>
              {titlePt}
            </S.DBMainTitle>
            <S.DBDescription>
              {subtitlePt}
            </S.DBDescription>
          </S.DBTitleBox>
          <img src={Imgheader} alt="asdasds"/>
        </S.Space>
        </S.DBHeader>
        <S.Content>
          <S.BoxInformations>
            <S.TextExpirience>
            Experiência profunda em arquitetura digital, iniciativas estratégicas e de missão crítica, sendo pioneira em Deep Tech, a 1STi está pronta para inserir sua empresa em uma jornada de tecnologia com alma e impacto, que:
            </S.TextExpirience>
            <S.List>
              <li>
              • <strong>Eleva</strong> propostas de valor,
              </li>
              <li>• <strong>Escala</strong> soluções com agilidade aumentada, e</li>
              <li>• <strong>Amplifica</strong> resultados com tecnologias emergentes e inovação profunda.</li>
            </S.List>
          </S.BoxInformations>

          <S.Teste>
            {cardServicesData.map(item => 
              item.id <= 2  && (
              <Services title={item.title} subscription={item.subscription}/>)
            )}
          </S.Teste>
          
        </S.Content>
          <S.ContentListCards>
            <S.ListCard>
            {cardServicesData.map(item => 
                item.id > 2  && (
                <Services title={item.title} subscription={item.subscription}/>)
              )}
            </S.ListCard>
          </S.ContentListCards>
    </S.DBContainer>
  );
}