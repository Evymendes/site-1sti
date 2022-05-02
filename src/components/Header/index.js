import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  padding: 2rem 0 4rem;
  font-size: 4em;

  @media (max-width: 768px) {
    padding: 4rem 0 2rem;
    font-size: 3em;
  }
`;

export default function Header({ title }) {
  return <Title>{title}</Title>;
}