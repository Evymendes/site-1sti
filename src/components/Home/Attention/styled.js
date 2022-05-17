import styled from "styled-components";

export const ContainerAttention = styled.section`
  width: 100%;
  background: #0B1617;

  @media (max-width: 768px) {
    height: 80vh;
    font-size: .9em;
  }
`;

export const AttentionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;
  height: 90vh;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  width: 60%;
  height: 70%;
  text-align: center;
  border: 2px solid #00C8DB;

  &:hover {
    box-shadow: inset 0 0 40px #00C8DB;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
`;

export const Description = styled.h3`
  width: 80%;
  font-size: 1.1em;
  font-weight: 300;
`;

export const Icon = styled.img`
  padding-top: 2px;
  width: 1.2rem;
  filter: brightness(0.5) sepia(1) saturate(10000%) hue-rotate(325deg);
`;

export const NewsLetter = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #FF0070;
  width: 100%;
  height: auto;
  font-size: 1em;
  
  ::placeholder {
    color: #FF0070;
  }

  @media (min-width: 480px) {
    min-width: 20rem;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #FF0070;
  height: 2rem;
`;

export const Subtitle = styled.p`
  padding-top: 4rem;
  color: #00C8DB;
  font-size: .875em;
`;