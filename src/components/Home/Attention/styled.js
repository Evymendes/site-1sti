import styled from "styled-components";

export const ContainerAttention = styled.section`
  height: 90vh;
  width: 100%;
  background: #0B1617;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 80vh;
    font-size: .9em;
  }
`;

export const Box = styled.div`
  padding: 1rem;
  border: 2px solid #00C8DB;
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
`;

export const Description = styled.h3`
  width: 70%;
  font-size: 1.125em;
  font-weight: 300;
`;

export const Icon = styled.img`
  width: 1.2rem;
  padding-top: 1rem;
`;

export const NewsLetter = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #FF0070;
  margin-top: 1rem;
  width: 100%;
  height: auto;
  font-size: 1.25em;
  
  ::placeholder {
    color: #FF0070;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #FF0070;
`;

export const Subtitle = styled.p`
  padding-top: 2rem;
  color: #00C8DB;
  font-size: .875em;
`;