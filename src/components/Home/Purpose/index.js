import React from "react";

import * as S from "./styled";
import Button from "../../Button";

import ImgPurpose from "../../../images/Group7998.png";
import ImgCardOne from "../../../images/noun-natural-language-processing-2985136.svg";
import ImgCardTwo from "../../../images/noun-deep-learning-2985132.svg";
import ImgCardThree from "../../../images/noun-artificial-intelligence-2985130.svg";
import ImgCardFour from "../../../images/noun-quantum-computing-4116531.svg";
import ImgCardFive from "../../../images/noun-future-textile-4116521.svg";
import ImgCardSix from "../../../images/noun-ai-training-data-2985134.svg";
import ImgCardSeven from "../../../images/noun-ai-ethics-2985138.svg";
import ImgCardEight from "../../../images/noun-computer-vision-2985143.svg";


const Purpose = () => (
    <S.ContainerPurpose>
        <S.ContentContainer>
            <S.BoxText>
                <S.Title>Título</S.Title>
                <S.Description>Parágrafo de texto.</S.Description>
                <Button to="">CTA</Button>
            </S.BoxText>
            <S.BoxImage>
                <S.ImagePurpose src={ImgPurpose} alt="" />
            </S.BoxImage>
        </S.ContentContainer>

        <S.ContainerCards>
            <S.BoxCards>
                <S.Card>
                    <S.ImageCard src={ImgCardOne} alt="" />
                    <S.TitleCard>LINGUAGEM NATURAL APLICADA</S.TitleCard>
                    <S.TextCard>
                        Reconhecimento e sintetização de fala, processamento, 
                        entendimento e inferência de redes de texto e aplicação em automação, 
                        inteligência e ciência.
                    </S.TextCard>
                </S.Card>
                <S.Card>
                    <S.ImageCard src={ImgCardTwo} alt="" />
                    <S.TitleCardPink>GRAFOS DE CONHECIMENTO EM BIG DATA</S.TitleCardPink>
                    <S.TextCard>
                        Hiper associação de conceitos e identificação em grandes massas de dados de comunidades, 
                        hierarquias, centralidades e projeções dinâmicas.
                    </S.TextCard>
                </S.Card>
                <S.Card>
                    <S.ImageCard src={ImgCardThree} alt="" />
                    <S.TitleCard>RACIOCINADORES DIGITAIS</S.TitleCard>
                    <S.TextCard>
                        Enriquecimento de dados através de ontologias e taxonomias e utilização de motor de cálculos 
                        e regras dinâmicas de extrema complexidade.
                    </S.TextCard>
                </S.Card>
                <S.Card>
                    <S.ImageCard src={ImgCardFour} alt="" />
                    <S.TitleCard>OTIMIZADORES DE NOVA GERAÇÃO</S.TitleCard>
                    <S.TextCard>
                        Algoritmos solucionadores baseados em nuvem e princípios de computação quântica.
                    </S.TextCard>
                </S.Card>
                <S.Card>
                    <S.ImageCard src={ImgCardFive} alt="" />
                    <S.TitleCard>MAPAS MULTIDIMENSIONAIS</S.TitleCard>
                    <S.TextCard>
                        Localização e analytics com navegação em camadas e sinalização super 
                        flexível baseada em geolocalização.
                    </S.TextCard>
                </S.Card>
                <S.Card>
                    <S.ImageCard src={ImgCardSix} alt="" />
                    <S.TitleCard>MODELOS DE A.I GIGANTES</S.TitleCard>
                    <S.TextCard>
                        Interpretação e geração de texto, modelos conversacionais, 
                        geração de imagens ou vídeos baseados em modelos disponíveis de escala extrema.
                    </S.TextCard>
                </S.Card>
                <S.Card>
                    <S.ImageCard src={ImgCardSeven} alt="" />
                    <S.TitleCard>CARTEIRAS DIGITAIS E NANOCONTRATOS</S.TitleCard>
                    <S.TextCard>
                        Proteção descentralizada de dados e utilização de contratos inteligentes 
                        para garantia de integridade transacional.
                    </S.TextCard>
                </S.Card>
                <S.Card>
                    <S.ImageCard src={ImgCardEight} alt="" />
                    <S.TitleCard>GÊMEOS DIGITAIS</S.TitleCard>
                    <S.TextCard>
                        Visão em tempo real de uma operação física através de um ambiente digital.
                    </S.TextCard>
                </S.Card>
            </S.BoxCards>
        </S.ContainerCards>

        <Button to="">Let's work</Button>
    </S.ContainerPurpose>
);

export default Purpose