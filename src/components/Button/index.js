import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const Btn = styled.button`
  padding: 1rem 1.3rem;
  font-size: 1em;
  border: 1px solid #fff;
  border-radius: 6px;
  background: #fff;
  transition: .4s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #fff;
    background: #0B1617;
  }
`;

export default function Button({ children, to, className }) {
  return (
    <Link to={to || ""} className={className}>
      <Btn>{children}</Btn>
    </Link>
  );
}