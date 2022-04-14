import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const Btn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.2);
    transition: .3s ease-in-out;
  }
`;

export default function SubscribeButton({ children, path }) {
  return (
    <Link to={path || ""}>
      <Btn>{children}</Btn>
    </Link>
  );
}