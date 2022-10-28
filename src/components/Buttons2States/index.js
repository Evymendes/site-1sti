import React, { useState } from "react"
import styled from "styled-components"
import PlayIcon from "../../assets/images/play-icon.svg"
import PlayIconHover from "../../assets/images/play-icon-hover.svg"
import { i18n } from "../../translate/i18n"

export const Div = styled.div`
  width: 100%;
  margin: 0 4.313rem;
  display: flex;
  @media (max-width: 768px) {
    margin: 0 2rem;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    margin: 0 1rem;
  }
`

export const ButtonOne = styled.button`
  transition: 0.4s;
  height: 59px;
  background-color: #fff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 0 1.25rem 0 2.75rem;
  font-size: 17px;
  font-family: CabinetGrotesk;
  font-weight: 500;
  background-image: url(${PlayIcon});
  background-repeat: no-repeat;
  background-position: 0.875rem 1rem;
  &:hover {
    cursor: pointer;
    background-color: #0b1617;
    background-image: url(${PlayIconHover});
    color: #fff;
  }
`
export const ButtonTwo = styled.button`
  margin-left: 1.875rem;
  width: 163px;
  height: 59px;
  transition: 0.4s;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;

  font-size: 17px;
  font-family: CabinetGrotesk;
  font-weight: 500;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: #0b1617;
  }
`

const isBrowser = typeof window !== "undefined"

export const isDesktop = () => {
  if (!isBrowser) {
    return
  }

  return window.innerWidth > 768
}

export default function Button2State({ data }) {
  const playVideo = () => {
    const ctVideo = document.getElementById("ct-video")

    if (ctVideo.play && isDesktop) {
      ctVideo.currentTime = 0
      ctVideo.muted = false
      ctVideo.play()
    }
  }

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <Div>
      <ButtonOne onClick={() => playVideo()}>
        {i18n.t(i18n.language === "pt" ? "textButtonOnePt" : "textButtonOne")}
      </ButtonOne>
      <ButtonTwo>
        {i18n.t(i18n.language === "pt" ? "textButtonTwoPt" : "textButtonTwo")}
      </ButtonTwo>
    </Div>
  )
}
