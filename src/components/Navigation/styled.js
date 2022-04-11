import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const NavBar = styled.nav`
  height: 4rem;
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

export const NavLogo = styled.img``;

export const NavLinkBox = styled.div``;

export const NavLink = styled(GatsbyLink)`
  position: relative;
  margin-left: 2rem;
  color: #222;
  font-weight: 600;
  text-decoration: none;
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