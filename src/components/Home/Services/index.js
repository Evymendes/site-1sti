import React from "react";
import * as S from "./styled";
import Button from "../../../components/Button"

const Services = () => (
    <S.ContainerServices>

        <S.ContentContainer>

            <S.BoxText>
                <S.Title>Services</S.Title>
                <S.Description>With the customer, from the inside to the inside.</S.Description>
                <Button>See more</Button>
            </S.BoxText>

            <S.BoxCard>
                <S.NumberCard>01</S.NumberCard>
                <S.DescriptionCard>The Foundation of Scalable Digital Platforms</S.DescriptionCard>
                <S.TitleCard>Digital Backbones</S.TitleCard>
            </S.BoxCard>
            <S.BoxCard>
                <S.NumberCard>02</S.NumberCard>
                <S.DescriptionCard>Elevation, Scaling and Amplification</S.DescriptionCard>
                <S.TitleCard>Deep Tech Platforms</S.TitleCard>
            </S.BoxCard>
            <S.BoxCard>
                <S.NumberCard>03</S.NumberCard>
                <S.DescriptionCard>Fit for the future, now</S.DescriptionCard>
                <S.TitleCard>Visionary Technologies</S.TitleCard>
            </S.BoxCard>

        </S.ContentContainer>

    </S.ContainerServices>
);

export default Services