import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #ffffff95;
  backdrop-filter: blur(30px);
  background-color: #ffffff95;
  z-index: 1;
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

export const NavLogoBox = styled.div`
  display: flex;

  img {
    transition: .2s;
  }

  &:hover {
    img:first-child {
      display: none;
    }
    img:last-child {
      display: block;
    }
  }
`;

export const NavLogo = styled.img`
  cursor: pointer;
`;

export const NavLogoHover = styled.img`
  display: none;
`;

export const NavLinkBox = styled.div`
  .active {
    border-bottom: 3px solid;
  }
`;

export const NavLink = styled(GatsbyLink)`
  position: relative;
  margin-left: 2rem;
  color: #222;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.125rem;
`;

export const LangBtn = styled.button`
  position: relative;
  margin-left: 2rem;
  min-width: 1.5rem;
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