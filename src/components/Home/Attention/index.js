import React from "react";
import * as S from "./styled";
import Arrow from "../../../assets/images/arrow-icon.png";
import SubscribeButton from "../../SubscribeButton";


const Attention = () => (
    <S.ContainerAttention>
        <S.AttentionWrapper>
            <S.Box>
                <S.Title>Stay tuned</S.Title>
                <S.Description>Subscribe to our newsletter to be the first to hear the 
                    latest news about Deep Tech and receive updates, 
                    exclusive content, and more.
                </S.Description>
                <S.Label>
                    <S.NewsLetter type="email" placeholder="enter your email for updates" /> 
                    <SubscribeButton><S.Icon src={Arrow} alt="Arrow icon"/></SubscribeButton>
                </S.Label>
                <S.Subtitle>*Selecting this option you authorize 1STi to send you personalized content.</S.Subtitle>
            </S.Box>
        </S.AttentionWrapper>
    </S.ContainerAttention>
);

export default Attention