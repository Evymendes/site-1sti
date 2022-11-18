import styled from "styled-components"
import Wrapper from "../Wrapper"

export const Container = styled.section`
  width: 100%;
  margin-top: 11rem;
  background-color: #0b1617;
  @media (max-width: 1024px) {
    margin-top: 0;
  }
`
export const PioneeringSection = styled(Wrapper)`
  display: flex;
  justify-content: space-between;

  gap: 50px;

  @media(max-width: 960px) {
    flex-wrap: wrap;
  }
  
`
export const Left = styled.div`
  /* max-width: 18.688rem; */
  max-width: 310px;

  button {
    margin-top: 3.375rem;
    @media (max-width: 1024px) {
      margin-top: 2.5rem;
    }
  }
  
`
export const Title = styled.h2`
  font-size: 2.875rem;
  font-family: GoshaSans;
  @media (max-width: 1266px) {
    font-size: 2.3rem;
  }
`
export const Text = styled.p`
  line-height: 2rem;
  margin-top: 2.25rem;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: CabinetGrotesk;
  @media (max-width: 1266px) {
    font-size: 1rem;
  }
`
export const ImageBook = styled.img`
  width: 400px;
  height: auto;
  /* margin-left: 9.063rem; */
  box-shadow: 0px 0px 10px #00c8dbcc;
  border-radius: 5px;
  @media (max-width: 1440px) {
    max-width: 400px;
    height: 400px;
  }
  @media (max-width: 1266px) {
    width: 250px;

  }
 
`
export const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; 
  gap: 40px;
  padding-inline: 10px;
 
  @media(max-width: 960px) {
    flex-wrap: wrap;
  }

`
export const Slider = styled.div`
  display: flex;

  width: 18.9rem;
  overflow: hidden;
  transition: 0.4s;
  p {
    font-size: 1rem;
    font-family: CabinetGrotesk;
    font-weight: 200;
    width: 18.9rem;
    letter-spacing: 0;
    line-height: 19px;
    span {
      color: #7e7e7e;
    }
    @media (max-width: 1266px) {
      font-size: 0.9rem;
      width: 14rem;
    }
    @media (max-width: 1024px) {
      font-size: 1rem;
      width: 17.8rem;


    }
    @media (max-width: 350px) {
      width: 15.8rem;
    }
  }
  @media (max-width: 1266px) {
    margin: 2rem 2rem;
    width: 14rem;
  }
  @media (max-width: 1024px) {
    width: 17.8rem;
    border-radius: 5px;
    width: 285px;
    height: 484px;
  }
  @media (max-width: 350px) {
    width: 15.8rem;
    margin: 4.5rem 1rem 0 1rem;
  }
`
export const ButtonSlide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 78px;
  img {
    width: 31px;
    height: 26px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 1266px) {
    margin-top: 3rem;
  }
`
export const SlideOne = styled.div`
  transition: 0.4s;
  
  p {
    /* 19rem; */
  }
`
