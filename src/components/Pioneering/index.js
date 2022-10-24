import React from 'react'
import * as S from './styles'
import Button from '../../components/Button/index'

//images
import Book from '../../assets/images/DT-Livro-Capa.png'
import ArrowL from '../../assets/images/seta_esq.svg'
import ArrowR from '../../assets/images/seta_dir.svg'

export default function Pioneering({data}){

    const goToRight = ()=>{
        document.getElementById('Slider').scrollLeft += 302.4;
    }

    const goToLeft = ()=>{
        document.getElementById('Slider').scrollLeft -= 302.4;
    }

    return(
        <S.Container>
            <S.PioneeringSection>
                <S.Left>
                    <S.Title>{data.title}</S.Title>
                    <S.Text>{data.text}</S.Text>
                    <Button>{data.buttonText}</Button>
                </S.Left>
                
                <S.Right>
                    <S.ImageBook src={Book} alt={data.altImg}/>

                    <S.Slider id="Slider">
                        {data.slider.sliders.map((item) =>(
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