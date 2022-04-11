import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const Btn = styled.button`
  padding: 1rem 1.3rem;
  border: 1px solid #fff;
  border-radius: 6px;
  background: #fff;
  transition: .1s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #fff;
    background: #0b1617;
  }
`;

export default function Button({ children, path }) {
  return (
    <Link to={path || ""}>
      <Btn>{children}</Btn>
    </Link>
  );
}