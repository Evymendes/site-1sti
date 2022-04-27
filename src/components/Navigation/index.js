import React, { useState } from "react";
import { Link } from "gatsby";

import * as S from "./styled";
import Logo from "../../images/1sti-logo.svg";
import LogoHover from "../../images/1sti-logo_hover.svg";
import Medium from "../../images/medium_icon.svg";
import Facebook from "../../images/facebook_icon.svg";
import LinkedIn from "../../images/linkedin_icon.svg";
import Instagram from "../../images/instagram_icon.svg";

export default function Navigation() {
  const [isEN, setIsEN] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLang = () => {
    setIsEN(isEN ? false : true);
  };

  return(
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
          <S.NavLink to="/" activeClassName="active">Home</S.NavLink>
          <S.NavLink to="/services" activeClassName="active">Services</S.NavLink>
          <S.NavLink to="/insights" activeClassName="active">Insights</S.NavLink>
          <a href="http://1sti.sistemapeoplenet.com.br/rh/vagas/triagem/e5f02f31ab6b4430acb17055751007d6" target="_blank" rel="noreferrer">Careers</a>
          <S.NavLink to="/contact" activeClassName="active">Contact</S.NavLink>
          <S.LangBtn
            onClick={() => handleLang()}
            isEN={isEN}
          >
            {isEN ? 'PT' : 'EN'}
          </S.LangBtn>

          <S.SocialBox>
            <img src={Medium} alt="Ícone do Medium" />
            <img src={Facebook} alt="Ícone do Facebook" />
            <img src={LinkedIn} alt="Ícone do LinkedIn" />
            <img src={Instagram} alt="Ícone do Instagram" />
          </S.SocialBox>
        </S.NavLinkBox>
      </S.NavWrapper>
    </S.NavBar>
  );
}