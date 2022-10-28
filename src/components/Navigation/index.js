import React, { useState } from "react"
import { Link } from "gatsby"

import * as S from "./styled"

import Logo from "../../assets/images/1sti-logo.svg"
import LogoHover from "../../assets/images/1sti-logo_hover.svg"
import Medium from "../../assets/images/medium_icon.svg"
import Facebook from "../../assets/images/facebook_icon.svg"
import LinkedIn from "../../assets/images/linkedin_icon.svg"
import Instagram from "../../assets/images/instagram_icon.svg"

export default function Navigation() {
  const [isEN, setIsEN] = useState(false)
  const [language, setLanguage] = useState("en")
  const [isOpen, setIsOpen] = useState(false)

  const I18N_STORAGE_KEY = "i18nextLng"

  const handleLang = () => {
    setIsEN(isEN ? false : true)
    setLanguage("pt")
  }

  const testTest = () => {
    if (language === "pt") {
      localStorage.setItem(I18N_STORAGE_KEY, language)
    } else if (language != "en") {
      localStorage.setItem(I18N_STORAGE_KEY, language)
    }
  }

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
          <S.NavLink to="/content-cards" activeClassName="active">
            About
          </S.NavLink>
          <a
            href="http://1sti.sistemapeoplenet.com.br/rh/vagas/triagem/e5f02f31ab6b4430acb17055751007d6"
            target="_blank"
            rel="noreferrer"
          >
            Careers
          </a>
          <S.NavLink to="/contact" activeClassName="active">
            Contact
          </S.NavLink>
          <S.LangBtn
            onClick={() => handleLang()}
            onChange={testTest()}
            isEN={isEN}
          >
            {isEN ? "PT" : "EN"}
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
