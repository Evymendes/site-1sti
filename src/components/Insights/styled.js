import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-left: 20px solid #0B1617;
  border-right: 20px solid #0B1617;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 4.6rem 4rem;
  width: 100%;
  min-height: calc(100vh - 4rem);
  height: 100%;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const PageTitle = styled.h1`
  padding: 2rem 0 4rem;
  font-size: 4em;
  color: #171717;
`;

export const MoreButton = styled.button`
  width: 100%;
  height: 3.6875rem;
  font-weight: 500;
  font-size: 17px;
  color: #0B1617;
  background-color: transparent;
  border: 0;
  border: 1px #742698 solid;

  &:hover{
    color: #fff;
    transition: .2s;
    background-color: #742698
  }
`;