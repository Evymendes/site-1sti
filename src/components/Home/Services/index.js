import React from "react";

import * as S from "./styled";

import Button from "../../../components/Button";
import Backbones from "../../../images/ScreenShot2021-09-15at19.29.36.png";
import Platforms from "../../../images/ScreenShot2021-09-15at18.32.12.png";
import Technologies from "../../../images/ScreenShot2021-09-15at18.32.21.png";


export default function Services() {
    const servicesList = [
        {
            bg: Backbones,
            description: 'The Foundation of Scalable Digital Platforms',
            title: 'Digital Backbones',
        },
        {
            bg: Platforms,
            description: 'Elevation, Scaling and Amplification',
            title: 'Deep Tech Platforms',
        },
        {
            bg: Technologies,
            description: 'Fit for the future, now',
            title: 'Visionary Technologies',
        },
    ];

    return (
        <S.ContainerServices>
            <S.ContentContainer>
                <S.BoxText>
                    <S.Title>Services</S.Title>
                    <S.Description>
                        With the customer, 
                        <span>from the inside to the inside.</span>
                    </S.Description>
                    <Button to=''>See more</Button>
                </S.BoxText>

                <S.CardsContainer>
                    {servicesList.map((service, i) => (
                        <S.Card key={i} bg={service.bg}>
                            <S.Title className="card-id">0{i + 1}</S.Title>
                            <S.DescriptionCard>{service.description}</S.DescriptionCard>
                            <S.Title>{service.title}</S.Title>
                        </S.Card>
                    ))}
                </S.CardsContainer>
                
                <Button to=''>See more</Button>
            </S.ContentContainer>
        </S.ContainerServices>
    );
}