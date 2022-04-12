import React, { useState } from "react";
import ImageLogo from "../../images/Component-5-37.svg"
import ImageLogoHover from "../../images/Component-5-37-hover.svg"


import * as S from "./styled";

export default function Navigation() {
  const [isEN, setIsEN] = useState(false);

  const handleLang = () => {
    setIsEN(isEN ? false : true);
  }

  return(
    <S.NavBar>
      <S.NavWrapper>
        {/* <S.NavImages> */}
          <S.NavImageLogo>
            <S.NavLogo src={ImageLogo} alt="Logo-1STi" />
          </S.NavImageLogo>
          <S.NavImageHover>
            <S.NavLogoHover src={ImageLogoHover} alt="" />
          </S.NavImageHover>
        {/* </S.NavImages> */}

        <S.NavLinkBox>          
          <S.NavLink to="/" activeClassName="active">Home</S.NavLink>
          <S.NavLink to="/services" activeClassName="active">Services</S.NavLink>
          <S.NavLink to="/blog" activeClassName="active">Blog</S.NavLink>
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