import React from 'react'
import * as S from './styles'
import Button from '../../components/Button/index'

//images
import Book from '../../assets/images/DT-Livro-Capa.png'
import ArrowL from '../../assets/images/seta_esq.svg'
import ArrowR from '../../assets/images/seta_dir.svg'

export default function Pioneering({}){

    const goToRight = ()=>{
        document.getElementById('Slider').scrollLeft += 302.4;
    }

    const goToLeft = ()=>{
        document.getElementById('Slider').scrollLeft -= 302.4;
    }


    const slideTexts = [
        {
            text: '"A powerful blueprint for developing a 21st-century purposeful organisation. CEOs, designers and technologists alike will all take inspiration from this transdisciplinary approach to Deep Tech."',
            author: '— Dave Gray, Founder of XPLANE and author of The Connected Company, Gamestorming and Liminal Thinking',
        },
        {
            text: '"At a time when the adoption of advanced technologies is accelerating, Deep Tech and the Amplified Organisation and its authors show how a systemic view and the relationships between these new technologies, humanity and the environment are of fundamental importance, since moments of true evolution never have technology as an end in itself."',
            author: '— Giuliano Michel Fernandes, Head of Marketing and Communications, CBMM',
        },
    ];

    return(
        <S.Container>
            <S.PioneeringSection>
                <S.Left>
                    <S.Title>Deep Tech Pioneering</S.Title>
                    <S.Text>Deep Tech and the Amplified Organisation provides readers with a powerful and pivotal multi-disciplinary approach to deep tech which has been created to elevate value propositions, scale platforms and amplify the impact of organisations.</S.Text>
                    <Button>Know more</Button>
                </S.Left>
                
                <S.Right>
                    <S.ImageBook src={Book} alt="capa de um livro"/>

                    <S.Slider id="Slider">
                        {slideTexts.map((item) =>(
                            <S.SlideOne>
                                <section>
                                    <p>{item.text}</p>
                                    <p><span>{item.author}</span></p>
                                </section>

                                <S.ButtonSlide>
                                    <img
                                        src={ArrowL}
                                        alt="Setinha do slide"
                                        onClick={() => {
                                        goToLeft();
                                    }}/>

                                    <img
                                        src={ArrowR}
                                        alt="Setinha do slide"
                                        onClick={() => {
                                            goToRight();
                                        }}/>
                                    </S.ButtonSlide>
                            </S.SlideOne>
                        ))}                    
                    </S.Slider>
                </S.Right> 
            </S.PioneeringSection>
        
        </S.Container>
    )
}