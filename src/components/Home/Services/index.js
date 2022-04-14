import React from "react";
import * as S from "./styled";
import Button from "../../../components/Button"
import ImageOne from "../../../images/Component51.png"
import ImageTwo from "../../../images/Component52.png"
import ImageThree from "../../../images/Component53.png"

const Services = () => (
    <S.ContainerServices>

        <S.ContentContainer>

            <S.BoxText>
                <S.Title>Services</S.Title>
                <S.Description>With the customer, from the inside to the inside.</S.Description>
                <Button>See more</Button>
            </S.BoxText>

            <S.BoxCardOne>
                <S.ImageCard src={ImageOne} alt="" />
                <S.DescriptionCard>The Foundation of Scalable Digital Platforms</S.DescriptionCard>
            </S.BoxCardOne>
            <S.BoxCardTwo>
                <S.ImageCard src={ImageTwo} alt="" />
                <S.DescriptionCard>Elevation, Scaling and Amplification</S.DescriptionCard>
            </S.BoxCardTwo>
            <S.BoxCardThree>
                <S.ImageCard src={ImageThree} alt="" />
                <S.DescriptionCard>Fit for the future, now</S.DescriptionCard>
            </S.BoxCardThree>

        </S.ContentContainer>

    </S.ContainerServices>
);

export default Services