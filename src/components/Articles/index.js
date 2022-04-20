import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled"

const Articles = () => (
  <S.Container>
    <S.Header>
      <S.ColorOne>
        <S.BackButton to="/insights">
          <StaticImage 
            style={{ marginRight: '0.5rem' }}
            src="../../images/icon-return.svg"
            alt="Imagem Ideia"
            layout="fixed"
          />
          Blog
        </S.BackButton>
        <S.BoxImage>
          <StaticImage 
            src="../../images/article-image.png"
            alt="Imagem Ideia"
            layout="fixed"
          />
        </S.BoxImage>
      </S.ColorOne>
      <S.ColorTwo>
        <span>  
          <p>EDITORIAL</p>
          <h1>Deep Tech and the future of education</h1>
        </span>
      </S.ColorTwo>
    </S.Header>
    <S.Wrapper>
      <S.SectionOne>
        <S.Linkedin>
          POR IGOR COUTO
          <StaticImage 
            src="../../images/linkedin.svg"
            alt="Imagem Ideia"
            layout="fixed"
          />
        </S.Linkedin>
        <span>
          <p>
            O trecho acima corresponde ao livro Ponto de Mutação do cientista Fritjof Capra. O autor, por meio do Tao (filosofia chinesa), propõe uma nova abordagem sobre a realidade. Segundo Capra, uma das alternativas para promover movimentos positivos e profundos no mundo é substituir os paradigmas cartesianos (Descartes) e mecanicistas (Isaac Newton), por uma visão sistêmica. Para ele, apesar desses pensamentos terem nos levado a lugares distantes no universo, restringiu a humanidade ao pensamento racional. Ao invés de a vida humana e natural serem assimiladas como um todo – interligadas e interdependentes –, Newton, por exemplo, propôs que o mundo fosse compreensível e previsível como os mecanismos de um relógio.<br></br><br></br>
            Tal pensamento influenciou, entre outras iniciativas, a construção de tecnologias completamente insustentáveis e desconectadas dos valores humanos. O exemplo mais recente foi a criação das moedas digitais, como o Bitcoin. Embora tenha popularizado uma tecnologia impressionante e próspera como o Blockchain, a inovação não foi capaz de prever impactos negativos nos recursos naturais do Planeta. De acordo com a pesquisa realizada pelo economista holandês Alex de Vries, do Experience Center da PwC, a rede de computadores envolvida na produção e mineração de bitcoins consumirá até o fim de 2018, 7,7 gigawatts por hora — 0,5% do consumo mundial de energia elétrica, o suficiente para abastecer um país do tamanho da Áustria.
          </p>
        </span>
        <span>
          <StaticImage 
            src="../../images/insights-menina3.png"
            alt="Imagem Ideia"
            layout="fixed"
          />
          <StaticImage 
            src="../../images/insights-menina2.png"
            alt="Imagem Ideia"
            layout="fixed"
          />
        </span>
        <span>
          <p>
            Além da exploração de recursos naturais, outras áreas da sociedade são afetadas por essa desconexão de valores: como o comportamento humano. A automação, que até então prometia libertar o homem do fardo do trabalho pesado, agora ameaça as suas habilidades intelectuais. Dados sobre o impacto da automação na disseminação de fake news em larga escala, nas Eleições Brasileiras de 2018, acionou um alerta vermelho: estamos produzindo tecnologias alienantes de grande aderência. A longo prazo, este comportamento poderia provocar um cenário degradante para o mercado: um batalhão de profissionais sem senso crítico, pouco capacitados, criativos, ou seja, uma massa irrelevante.
          </p>
        </span>
      </S.SectionOne>
      <S.SectionTwo>
        <span>
          <h1>O termo “Tecnologia com Alma” ganha importância ao traduzir bits e bytes em iniciativas com propósito.</h1>
          <p>Essa forma de desenhar tecnologias de maneira intencional está provocando um espiral ascendente em diversas áreas da sociedade: como na produção de alimentos na África, na qualidade da saúde na Índia e na educação no Brasil.</p>
          <StaticImage 
            src="../../images/insights-menina1.png"
            alt="Imagem Ideia"
            layout="fixed"
          />
          <p>A empresa Supplant está usando modelos de big data para ajudar países africanos a atingir autossuficiência na área da alimentação. Dados, coletados por meio de sensores revelam, em tempo real, um feedback sobre as condições do solo, do clima e das plantas. Dessa forma é possível otimizar o consumo de água, contendo o desperdício e buscar alternativas de plantio de novas espécies. Enquanto isso na Índia, startups (Portea, AdressHelt, Mitra Biotech e Artelus) utilizam aplicativos, plataformas, inteligência artificial e aprendizado de máquina para gerar diagnósticos, prognósticos e tratamentos de doenças de forma mais acessível à população. No Brasil, a 1STi, com o programa Vai na Web, promove um programa de educação digital avançada e de alto nível, abrangendo toda a gama de competências relacionadas à Tecnologia da Informação e habilidades socioemocionais. O programa é destinado para jovens de duas favelas do Rio de Janeiro: Complexo do Alemão e Morro do Prazeres. A iniciativa já formou mais de 150 jovens; destes, uma parte já está estabelecida na profissão, outra contribui com os sua própria comunidade e uma parcela continua evoluindo e prosperando em novas áreas.</p>
        </span>
      </S.SectionTwo>
    </S.Wrapper>
  </S.Container>
)

export default Articles