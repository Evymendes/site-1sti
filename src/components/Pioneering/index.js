import React from 'react'
import * as S from './styles'
import Button from '../../components/Button/index'

//images
import Book from '../../assets/images/DT-Livro-Capa.png'
import ArrowL from '../../assets/images/seta_esq.svg'
import ArrowR from '../../assets/images/seta_dir.svg'

export default function Pioneering({data}){

    return(
        <S.Container>
            <S.PioneeringSection>
                <S.Left>
                    <S.Title>Deep Tech Pioneering</S.Title>
                    <S.Text>Deep Tech and the Amplified Organisation provides readers with a powerful and pivotal multi-disciplinary approach to deep tech which has been created to elevate value propositions, scale platforms and amplify the impact of organisations.</S.Text>
                    <Button>Know more</Button>
                </S.Left>
                <S.ImageBook src={Book} alt="capa de um livro"/>
                <S.Right>
                    <S.Slider>
                        <S.Input1 id="s1" type="radio" name="slider" checked />
                        <S.Input2 id="s2" type="radio" name="slider"/>
                        <S.SlideOne>
                            <p>“A powerful blueprint for developing a 21st-century purposeful organisation. CEOs, designers and technologists alike will all take inspiration from this transdisciplinary approach to Deep Tech.”<br/><br/><span> — Dave Gray, Founder of XPLANE and author of The Connected Company, Gamestorming and Liminal Thinking</span></p>
                        </S.SlideOne>
                        <S.SlideTwo>
                            <p>"At a time when the adoption of advanced technologies is accelerating, Deep Tech and the Amplified Organisation and its authors show how a systemic view and the relationships between these new technologies, humanity and the environment are of fundamental importance, since moments of true evolution never have technology as an end in itself."<br/><br/><span>— Giuliano Michel Fernandes, Head of Marketing and Communications, CBMM</span></p>
                        </S.SlideTwo>
                    </S.Slider>
                    <S.ButtonSlide>
                        <label for="s1"><img src={ArrowL}/></label>
                        <label for ="s2"><img src={ArrowR}/></label>
                    </S.ButtonSlide>
                </S.Right> 
            </S.PioneeringSection>
        
        </S.Container>
    )
}