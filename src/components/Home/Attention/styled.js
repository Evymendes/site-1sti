import styled from "styled-components";


export const ContainerAttention = styled.section`
    height: 100vh;
    width: 100%;
    background: #0B1617;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Box = styled.div`
    border: 2px solid #00C8DB;
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const Title = styled.h2`
    text-align: center;
    font-size: 3.5rem;
    

`;
export const Description = styled.h3`
    text-align: center;
    width: 70%;
    font-size: 1.125rem;

`;
export const Icon = styled.img`
  width: 1.2rem;
  padding-top: 1rem;
`
export const NewsLetter = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #FF0070;
  margin-top: 1rem;
  width: 100%;
  height: auto;
  font-size: 1.25rem;
`
export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #FF0070;
`

export const Subtitle = styled.p`
    font-size: .875rem;

`;
