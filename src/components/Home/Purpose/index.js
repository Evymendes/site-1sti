import React from "react";

import * as S from "./styled";
import Button from "../../Button";

import ImgPurpose from "../../../images/purpose_img.png";
import ImgCardOne from "../../../images/noun-natural-language-processing-2985136.svg";
import ImgCardTwo from "../../../images/noun-deep-learning-2985132.svg";
import ImgCardThree from "../../../images/noun-artificial-intelligence-2985130.svg";
import ImgCardFour from "../../../images/noun-quantum-computing-4116531.svg";
import ImgCardFive from "../../../images/noun-future-textile-4116521.svg";
import ImgCardSix from "../../../images/noun-ai-training-data-2985134.svg";
import ImgCardSeven from "../../../images/noun-ai-ethics-2985138.svg";
import ImgCardEight from "../../../images/noun-computer-vision-2985143.svg";


export default function Purpose () {
    const cardsList = [
        {
            icon: ImgCardOne,
            title: 'LINGUAGEM NATURAL APLICADA',
            text: 'Reconhecimento e sintetização de fala, processamento, entendimento e inferência de redes de texto e aplicação em automação, inteligência e ciência.',
        },
        {
            icon: ImgCardTwo,
            title: 'GRAFOS DE CONHECIMENTO EM BIG DATA',
            text: 'Hiper associação de conceitos e identificação em grandes massas de dados de comunidades, hierarquias, centralidades e projeções dinâmicas.',
            new: true,
        },
        {
            icon: ImgCardThree,
            title: 'RACIOCINADORES DIGITAIS',
            text: 'Enriquecimento de dados através de ontologias e taxonomias e utilização de motor de cálculos e regras dinâmicas de extrema complexidade.',
        },
        {
            icon: ImgCardFour,
            title: 'OTIMIZADORES DE NOVA GERAÇÃO',
            text: 'Algoritmos solucionadores baseados em nuvem e princípios de computação quântica.',
        },
        {
            icon: ImgCardFive,
            title: 'MAPAS MULTIDIMENSIONAIS',
            text: 'Localização e analytics com navegação em camadas e sinalização super flexível baseada em geolocalização.',
        },
        {
            icon: ImgCardSix,
            title: 'MODELOS DE A.I GIGANTES',
            text: 'Interpretação e geração de texto, modelos conversacionais, geração de imagens ou vídeos baseados em modelos disponíveis de escala extrema.',
        },
        {
            icon: ImgCardSeven,
            title: 'CARTEIRAS DIGITAIS E NANOCONTRATOS',
            text: 'Proteção descentralizada de dados e utilização de contratos inteligentes para garantia de integridade transacional.',
        },
        {
            icon: ImgCardEight,
            title: 'GÊMEOS DIGITAIS',
            text: 'Visão em tempo real de uma operação física através de um ambiente digital.',
        },
    ];

    return (
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
                    {cardsList.map((card, i) => (
                        <S.Card key={i} new={card.new}>
                            <S.ImageCard src={card.icon} alt="" />
                            <S.TitleCard>{card.title}</S.TitleCard>
                            <S.TextCard>{card.text}</S.TextCard>
                        </S.Card>
                    ))}
                </S.BoxCards>
            </S.ContainerCards>

            <Button to="">Let's work</Button>
        </S.ContainerPurpose>
    );
}