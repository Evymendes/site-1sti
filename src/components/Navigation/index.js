import React, { useState } from "react";
import { Link } from "gatsby";

import * as S from "./styled";
import Logo from "../../images/1sti-logo.svg";
import LogoHover from "../../images/1sti-logo_hover.svg";

export default function Navigation() {
  const [isEN, setIsEN] = useState(false);

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

        <S.NavLinkBox>
          <S.NavLink to="/" activeClassName="active">Home</S.NavLink>
          <S.NavLink to="/services" activeClassName="active">Services</S.NavLink>
          <S.NavLink to="/insights" activeClassName="active">Insights</S.NavLink>
          <S.NavLink to="https://xd.adobe.com/view/ef7c34d8-c47f-45fd-a60a-27070eaeca3e-ba2f/?fullscreen" target="_blank" activeClassName="active">Careers</S.NavLink>
          <S.NavLink to="/contact" activeClassName="active">Contact</S.NavLink>
          <S.LangBtn
            onClick={() => handleLang()}
            isEN={isEN}
          >
            {isEN ? 'PT' : 'EN'}
          </S.LangBtn>
        </S.NavLinkBox>
      </S.NavWrapper>
    </S.NavBar>
  );
}