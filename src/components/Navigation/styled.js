import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.625rem;
  font-size: 1em;
  background-color: #ffffff95;
  backdrop-filter: blur(30px);
  border-top: 10px solid #0B1617;
  z-index: 30;

  @media (min-width: 1440px) {
    height: 5.5rem;
    font-size: 1.2rem;
  }
`;

export const NavWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;
  height: 100%;
  border-bottom: 2px solid #504d50;

  @media (max-width: 768px) {
    padding: 0 2rem;
    width: 100%;
  }
`;

export const MenuBtn = styled.button`
  position: relative;
  border: none;
  background: none;
  width: 2.5rem;
  height: 2.5px;
  background: ${props => props.isOpen ? 'none' :'#0B1617'};
  transition: .3s;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 2.5rem;
    height: 2.5px;
    background: #0B1617;
    transition: .3s;
  }

  &:before {
    top: ${props => props.isOpen ? '0' : '-9px'};
    right: 0;
    transform: rotate(${props => props.isOpen ? '45' :'0'}deg);
  }

  &:after {
    right: 0;
    bottom: ${props => props.isOpen ? '0' : '-9px'};
    transform: rotate(${props => props.isOpen ? '-45' :'0'}deg);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLogoBox = styled.div`
  display: flex;

  img {
    transition: .2s;
  }

  @media (min-width: 768px) {
    &:hover {
      img:first-child {
        display: none;
      }
      img:last-child {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: end;
    width: calc(50vw - 3rem + 2.5rem);
  }
`;

export const LangBtn = styled.button`
  position: relative;
  margin-left: 2rem;
  width: 1.6rem;
  font-size: 1.1em;
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
    left: 90%;
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

export const NavLogo = styled.img`
  cursor: pointer;
  max-width: 3rem;
`;

export const NavLogoHover = styled.img`
  display: none;
`;

export const NavLinkBox = styled.div`
  a {
    margin-left: 2rem;
    color: #222;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.125em;
  }

  @media (min-width: 768px) {
    .active {
      border-bottom: 3px solid;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: calc(4.625rem - 10px);
    left: 0;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    padding: 4rem 3rem 1rem;
    width: 100vw;
    height: calc(100vh - 4.625rem);
    font-size: 2em;
    background: #16202c;
    transition: .3s;

    a,
    button {
      margin: .8rem 0;
      color: #fff;
      font-size: 1em;

      &:before,
      &:after {
        opacity: 1;
        visibility: visible;
      }

      &:before {
        width: 2.7rem;
        background: #fff;
      }

      &:after {
        left: 3rem;
        min-width: 4rem;
      }
    }
  }
`;

export const NavLink = styled(GatsbyLink)`
  position: relative;
`;

export const SocialBox = styled.figure`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
  width: 40%;

  a {
    margin-bottom: 2rem;
    width: 35%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;