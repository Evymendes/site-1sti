import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  padding: calc(1.5rem + 5.25rem) 0 4rem;
  font-size: 4em;
  line-height: 1.2;
  text-shadow: 0 0 16px rgba(0,0,0,.5);
  color: ${props => props.color};

  @media (max-width: 768px) {
    padding: 4rem 0 2rem;
    font-size: 3em;
  }
`;

const Header = ({ title, color }) => (
  <Title color={color}>
    {Array.isArray(title) 
      ? title.map(title => <span>{title}</span>)
      : title
    }
  </Title>
);

export default Header