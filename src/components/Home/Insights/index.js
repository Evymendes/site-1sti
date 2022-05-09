import React from "react";

import * as S from "./styled";
import Button from "../../../components/Button";

import AgilityImg from "../../../assets/images/agility_img.png";
import EducationImg from "../../../assets/images/education_img.svg";
import HorizonImg from "../../../assets/images/horizon_img.png";

export default function Insights() {
    const insightsList = [
        {
            img: AgilityImg,
            description: 'Article',
            title: 'What is Augmented Agility?',
        },
        {
            img: EducationImg,
            description: 'Editorial',
            title: 'Deep Tech and the Future of Education',
        },
        {
            img: HorizonImg,
            description: 'Visual Essay',
            title: 'Digital Horizon',
        },
    ];

    return (
        <S.ContainerInsights>
            <S.ContentContainer>
                <S.BoxText>
                    <S.Title>Insights</S.Title>
                    <S.Description>Texto convidativo. With the customer, from the inside to the inside.</S.Description>
                    <Button to=''>Go to Index</Button>
                </S.BoxText>

                <S.CardsContainer>
                    <S.CardsBox>
                        {insightsList.map((insight, i) => (
                            <S.Card key={i}>
                                <S.ImageCard src={insight.img} alt="" />
                                <S.DescriptionCard>{insight.description}</S.DescriptionCard>
                                <S.TitleCard>{insight.title}</S.TitleCard>
                            </S.Card>
                        ))}
                    </S.CardsBox>
                </S.CardsContainer>

                <Button to=''>Go to Index</Button>
            </S.ContentContainer>
        </S.ContainerInsights>
    );
}