import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const NavBar = styled.nav`
  height: 4rem;
  width: 100%;
  z-index: 1;
  background-color: #ffffff95;
  backdrop-filter: blur(30px);
  position: fixed;
`;

export const NavWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  border-bottom: 2px solid #504d50;
`;

// export const NavImages = styled.div`
//   display: flex;
// `;


export const NavImageLogo = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    display: none;
  }
`;
export const NavImageHover = styled.div`
  display: none;

  &:hover {
    display: flex;
    align-items: center;
  }
`;

export const NavLogo = styled.img`
  margin-bottom: 0;
`;
export const NavLogoHover = styled.img`
  margin-bottom: 0;
`;

export const NavLinkBox = styled.div``;


export const NavLink = styled(GatsbyLink)`
  position: relative;
  margin-left: 2rem;
  color: #222;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.125rem;

  &:hover {
      border-bottom: 0.2rem solid ;
    }
`;

export const LangBtn = styled.button`
  position: relative;
  margin-left: 2rem;
  min-width: 1rem;
  border: none;
  background: none;
  cursor: pointer;

  &:before {
    content: '';
    bottom: 1px;
    width: 100%;
    height: 2px;
    background: #222;
  }

  &:after {
    content: '∙ ${props => props.isEN ? 'EN' : 'PT'}';
    top: 0;
    left: 85%;
    width: 3rem;
  }

  &:before,
  &:after {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
  }

  &:hover {
    &:before,
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
`;