import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const Btn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  user-select: none;
  transition: .2s ease-in-out;
`;

export default function SubscribeButton({ children, to }) {
  return (
    <Link to={to || ""}>
      <Btn>{children}</Btn>
    </Link>
  );
}