import React from "react"
import * as S from "./styles"
import Button from "../../components/Button/index"

//images
import Book from "../../assets/images/DT-Livro-Capa.png"
import ArrowL from "../../assets/images/seta_esq.svg"
import ArrowR from "../../assets/images/seta_dir.svg"

//i18n
import { i18n } from "../../translate/i18n"

export default function Pioneering({ data }) {
  const goToRight = () => {
    document.getElementById("Slider").scrollLeft += 302.4
  }

  const goToLeft = () => {
    document.getElementById("Slider").scrollLeft -= 302.4
  }

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.Container>
      <S.PioneeringSection>
        <S.Left>
          <S.Title>
            {i18n.t(i18n.language === "pt" ? "titlePt" : "title")}
          </S.Title>
          <S.Text>{i18n.t(i18n.language === "pt" ? "textPt" : "text")}</S.Text>
          <Button>
            {i18n.t(i18n.language === "pt" ? "buttonTextPt" : "buttonText")}
          </Button>
        </S.Left>

        <S.Right>
          <S.ImageBook src={Book} alt={data.altImg} />

          <S.Slider id="Slider">
            {i18n.language === "pt"
              ? data.slider.slidersPt.map(item => (
                  <S.SlideOne>
                    <section>
                      <p>{item.text}</p>
                      <p>
                        <span>{item.author}</span>
                      </p>
                    </section>

                    <S.ButtonSlide>
                      <img
                        src={ArrowL}
                        alt="Setinha do slide"
                        onClick={() => {
                          goToLeft()
                        }}
                      />

                      <img
                        src={ArrowR}
                        alt="Setinha do slide"
                        onClick={() => {
                          goToRight()
                        }}
                      />
                    </S.ButtonSlide>
                  </S.SlideOne>
                ))
              : data.slider.sliders.map(item => (
                  <S.SlideOne>
                    <section>
                      <p>{item.text}</p>
                      <p>
                        <span>{item.author}</span>
                      </p>
                    </section>

                    <S.ButtonSlide>
                      <img
                        src={ArrowL}
                        alt="Setinha do slide"
                        onClick={() => {
                          goToLeft()
                        }}
                      />

                      <img
                        src={ArrowR}
                        alt="Setinha do slide"
                        onClick={() => {
                          goToRight()
                        }}
                      />
                    </S.ButtonSlide>
                  </S.SlideOne>
                ))}
          </S.Slider>
        </S.Right>
      </S.PioneeringSection>
    </S.Container>
  )
}
