import React from "react"

import styled from "styled-components" 
import Wrapper from "../Wrapper"

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.positionText && props.positionText};
  font-size: 4em;
  line-height: 1.2;
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  color: ${props => props.color};

  @media (max-width: 1550px) {
    font-size: 3em;
    max-width: 400px;
  }
  @media (max-width: 1288px) {
    padding-bottom: 1rem;
    max-width: 250px;
    font-size: 3em;
    line-height: 1;
    padding-top: ${props => props.positionTextMob && props.positionTextMob};
  }
`

const Header = ({ title, color, positionText, positionTextMob }) => (
    <Title
      positionText={positionText}
      positionTextMob={positionTextMob}
      color={color}
    >
      {Array.isArray(title)
        ? title.map((title, i) => <span key={i}>{title}</span>)
        : title}
    </Title>
)

export default Header
