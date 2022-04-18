import React from "react";

import * as S from "./styled";
import Button from "../../Button";
import ImgPurpose from "../../../images/Group7998.png";
// import VideoHome from "../../images/videos/video-1649703291.mp4"


const Purpose = () => (
    <S.ContainerPurpose>
        <S.ContentContainer>

            <S.BoxText>
                <S.Title>Título</S.Title>
                <S.Description>Parágrafo de texto.</S.Description>
                <Button>CTA</Button>
            </S.BoxText>

            <S.BoxImage>
                <S.ImagePurpose src={ImgPurpose} alt="" />
            </S.BoxImage>

        </S.ContentContainer>
    </S.ContainerPurpose>
);

export default Purpose