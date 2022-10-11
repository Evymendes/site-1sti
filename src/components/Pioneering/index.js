import React, {useRef, useState} from 'react'
import * as S from './styles'
import Button from '../../components/Button/index'

//images
import Book from '../../assets/images/DT-Livro-Capa.png'
import ArrowL from '../../assets/images/seta_esq.svg'
import ArrowR from '../../assets/images/seta_dir.svg'

export default function Pioneering({}){

    const elementRef = useRef(null);

    const [arrowDisable, setArrowDisable] = useState(true);
    const unsplashed = "https://source.unsplash.com/200x200/";

    const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };


    const slideTexts = [
        {
            text: '"A powerful blueprint for developing a 21st-century purposeful organisation. CEOs, designers and technologists alike will all take inspiration from this transdisciplinary approach to Deep Tech."',
            author: '— Dave Gray, Founder of XPLANE and author of The Connected Company, Gamestorming and Liminal Thinking',
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

                    <S.Slider>
                        {slideTexts.map((item) =>(
                            <S.SlideOne>
                                <p>{item.text}</p>
                                <p><span>{item.author}</span></p>

                                <img
                        src={ArrowL}
                        alt="Setinha do slide"
                        onClick={() => {
                            handleHorizantalScroll(S.Slider.current, 25, 100, -100);
                        }}
                        />
                            </S.SlideOne>
                        ))}
                    <button>a</button>
                    
                    </S.Slider>
                    
                    <S.ButtonSlide>
                        
                        <img src={ArrowR} alt="Setinha do slide"/>
                    </S.ButtonSlide>

                </S.Right> 
            </S.PioneeringSection>
        
        </S.Container>
    )
}