import styled from "styled-components";

export const ContainerAttention = styled.section`
  width: 100%;
  background: #0B1617;
  margin-top: 6rem;
  @media (max-width: 768px) {
    height: 80vh;
    font-size: .9em;
    margin-top: -15rem;
  }
`;

export const AttentionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 90vh;
  @media(max-width: 768px){
    margin: 0 1.313rem;
    justify-content: left;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  width: 40.813rem;
  height: 26.5rem;
  text-align: center;
  border: 2px solid #00C8DB;
  box-shadow: inset 0 0 40px #00C8DB;

  @media (max-width: 768px) {
    padding-left: 1.7rem;
    width: 90%;
    text-align: left;
    /* align-items: start; */
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
  transition: 0.4s;
  width: 1.2rem;
  filter: brightness(0.5) sepia(1) saturate(10000%) hue-rotate(325deg);
  
  @media(max-width: 500px){
    width: 1.1rem;
  }
`;

export const NewsLetter = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #FF0070;
  width: 100%;
  height: auto;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  ::placeholder {
    color: #FF0070;
  }

  :focus::placeholder {
    opacity: 0;
  }

  @media (min-width: 500px) {
    min-width: 20rem;
  }
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #FF0070;
  width: 350px;
  height: 2rem;

  &:hover img{
    margin-right: -7px;
  }
  @media(max-width: 500px){
    width: 80%;
  }
`;

export const Subtitle = styled.p`
  padding-top: 4rem;
  color: #00C8DB;
  font-size: .875em;
`;