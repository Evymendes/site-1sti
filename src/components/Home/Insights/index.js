import React from "react";
import * as S from "./styled";
import Button from "../../../components/Button"
import ImageOne from "../../../images/1sti-Instagram4.png"
import ImageTwo from "../../../images/insights-deeptech.svg"
import ImageThree from "../../../images/DT-Imagem-3-Concha.png"

const Insights = () => (
    <S.ContainerInsights>

        <S.ContentContainer>

            <S.BoxText>
                <S.Title>Insights</S.Title>
                <S.Description>Texto convidativo. With the customer, from the inside to the inside.</S.Description>
                <Button>Go to Index</Button>
            </S.BoxText>

            <S.BoxCard>
                <S.ImageCard src={ImageOne} alt="" />
                <S.DescriptionCard>Article</S.DescriptionCard>
                <S.TitleCard>What is Augmented Agility?</S.TitleCard>
            </S.BoxCard>
            <S.BoxCard>
                <S.ImageCard src={ImageTwo} alt="" />
                <S.DescriptionCard>Editorial</S.DescriptionCard>
                <S.TitleCard>Deep Tech and the Future of Education</S.TitleCard>
            </S.BoxCard>
            <S.BoxCard>
                <S.ImageCard src={ImageThree} alt="" />
                <S.DescriptionCard>Visual Essay</S.DescriptionCard>
                <S.TitleCard>Digital Horizon</S.TitleCard>
            </S.BoxCard>

        </S.ContentContainer>

    </S.ContainerInsights>
);

export default Insights