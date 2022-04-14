import React from "react";
import * as S from "./styled";
import Button from "../../../components/Button"
import LogoCogna from "../../../images/cogna.png"
import LogoSomos from "../../../images/somos.png" 
import LogoCruzeiro from "../../../images/Cruzeiro-do-Sul-pb-negativo.png"
import LogoLaureat from "../../../images/laureate-logo.svg"
import LogoSirio from "../../../images/sirio.png"
import LogoSulAmerica from "../../../images/sulamerica.png"


const Client = () => (
    <S.ContainerClient>
        <S.ContainerEducation>
            <S.Description>Education</S.Description>
            <S.BoxLogoEducation>
                <S.BoxImage>
                    <S.LogosEducation src={LogoCogna} alt="" />
                </S.BoxImage>
                <S.BoxImage>
                    <S.LogosEducation src={LogoSomos} alt="" />
                </S.BoxImage>
                <S.BoxImage>
                    <S.LogosEducation src={LogoCruzeiro} alt="" />
                </S.BoxImage>
                <S.BoxImage>
                    <S.LogosEducation src={LogoLaureat} alt="" />
                </S.BoxImage>
            </S.BoxLogoEducation>
        </S.ContainerEducation>

        <S.ContainerHealthEconomy>
            <S.BoxHealth>
                <S.Description>Health</S.Description>
                <S.BoxImageHealthEconomy>
                    <S.LogoHealth src={LogoSirio} alt="" />
                </S.BoxImageHealthEconomy>
            </S.BoxHealth>
            <S.BoxEconomy>
                <S.Description>Digital Economy</S.Description>
                <S.BoxImageHealthEconomy>
                    <S.LogoEconomy src={LogoSulAmerica} alt="" />
                </S.BoxImageHealthEconomy>
            </S.BoxEconomy>
        </S.ContainerHealthEconomy>
        <S.ContainerTitleWork>
            <S.TitleWork>Want to work with us?</S.TitleWork>
            <Button>Let’s talk</Button>
        </S.ContainerTitleWork>
        
    </S.ContainerClient>
);

export default Client