import React from "react";
import * as S from "./styled";


const Attention = () => (
    <S.ContainerAttention>
        <S.Box>
            <S.Title>Stay tuned</S.Title>
            <S.Description>Subscribe to our newsletter to be the first to hear the 
                latest news about Deep Tech and receive updates, 
                exclusive content, and more.
            </S.Description>
            <S.Label>
                <S.Input type="email" placeholder="enter your email for updates" /> 
                <S.Submit type="submit" value="Enviar" />
            </S.Label>
            <S.Subtitle>*Selecting this option you authorize 1STi to send you personalized content.</S.Subtitle>
        </S.Box>
    </S.ContainerAttention>
);

export default Attention