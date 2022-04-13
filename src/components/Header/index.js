import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  padding: 2rem 0 4rem;
  font-size: 4em;
`;

export default function Header({ title }) {
  return <Title>{title}</Title>;
}