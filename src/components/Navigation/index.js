import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import * as S from "./styled"

// i18n
import { i18n } from "../../translate/i18n"

//i18n.language

import Logo from "../../assets/images/1sti-logo.svg"
import LogoHover from "../../assets/images/1sti-logo_hover.svg"
import Medium from "../../assets/images/medium_icon.svg"
import Facebook from "../../assets/images/facebook_icon.svg"
import LinkedIn from "../../assets/images/linkedin_icon.svg"
import Instagram from "../../assets/images/instagram_icon.svg"

export default function Navigation() {
  const [isEN, setIsEN] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const I18N_STORAGE_KEY = "i18nextLng"
  const Button_Language = "buttonlanguage"

  const handleLangEn = () => {
    localStorage.setItem(I18N_STORAGE_KEY, "pt")
    window.location = window.location
    localStorage.setItem(Button_Language, false)
  }

  const handleLangPt = () => {
    setIsEN(I18N_STORAGE_KEY === "en" ? false : true)
    localStorage.setItem(I18N_STORAGE_KEY, "en")
    window.location = window.location
  }

  useEffect(() => {
    if (i18n.language === "en") {
      setIsEN(true)
    } else {
      setIsEN(false)
    }
  }, [])

  return (
    <S.NavBar>
      <S.NavWrapper>
        <Link to="/">
          <S.NavLogoBox>
            <S.NavLogo src={Logo} alt="1STI Logo" />
            <S.NavLogoHover src={LogoHover} alt="" />
          </S.NavLogoBox>
        </Link>

        <S.MenuBtn
          onClick={() => setIsOpen(isOpen ? false : true)}
          isOpen={isOpen}
        />

        <S.NavLinkBox isOpen={isOpen}>
          <S.NavLink to="/" activeClassName="active">
            Home
          </S.NavLink>
          <S.NavLink to="/services" activeClassName="active">
            Services
          </S.NavLink>
          <S.NavLink to="/insights" activeClassName="active">
            Insights
          </S.NavLink>
          <a href="https://1sti.solides.jobs" target="_blank" rel="noreferrer">
            Careers
          </a>
          <S.NavLink to="/contact" activeClassName="active">
            Contact
          </S.NavLink>
          <S.LangBtn isEN={isEN}>
            {isEN === false ? (
              <button
                onClick={() => {
                  handleLangPt()
                }}
              >
                PT
              </button>
            ) : (
              <button
                onClick={() => {
                  handleLangEn()
                }}
              >
                EN
              </button>
            )}
          </S.LangBtn>

          <S.SocialBox>
            <a
              href="https://www.linkedin.com/company/1sti"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="Ícone do LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/ola_1sti"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Ícone do Instagram" />
            </a>
            <a href="https://medium.com/1sti" target="_blank" rel="noreferrer">
              <img src={Medium} alt="Ícone do Medium" />
            </a>
            <a
              href="https://web.facebook.com/ola1STi/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="Ícone do Facebook" />
            </a>
          </S.SocialBox>
        </S.NavLinkBox>
      </S.NavWrapper>
    </S.NavBar>
  )
}
