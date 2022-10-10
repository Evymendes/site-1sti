import styled from 'styled-components'

export const Container = styled.section`
    background-color: #0B1617;
    @media(max-width: 1024px){
        margin-top: 26.5rem;
    }
    @media(max-width: 768px){
        margin-top: 46rem;
    }
`
export const PioneeringSection = styled.section`
    margin: 0 4.563rem 0 4.563rem;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1024px){
        flex-direction: column;
    }
    @media(max-width: 768px){
        margin: 0 2.125rem 0 2.125rem;
    }
    @media(max-width: 600px){
        margin: 0 1rem 0 1rem;
    }
`
export const Left = styled.div`
    max-width: 18.688rem;
    min-width: 18rem;

    button{
        margin-top: 3.375rem;
        @media(max-width: 1024px){
            margin-top: 2.5rem; 
        }
    }
    @media(max-width: 1024px){
        margin-top: 10rem;
        max-width: 80%;
    }
`
export const Title = styled.h2`
    font-size: 2.875rem;
    font-family: GoshaSans;
    @media(max-width: 1266px){
        font-size: 2.3rem
    }
`
export const Text = styled.p`
    margin-top: 2.25rem;
    font-size: 1.125rem;
    font-family: CabinetGrotesk;
    @media(max-width: 1266px){
        font-size: 1rem;
    }
`
export const ImageBook = styled.img`
    width: 333px;
    height: 499px;
    margin-left: 9.063rem;
    box-shadow: 0px 0px 99px #00C8DBCC;
    border-radius: 5px;
    @media(max-width: 1440px){
       width: 20.813rem;
       height: 31.188rem;
    }
    @media(max-width: 1266px){
        margin-left: 4rem;
        width: 18rem;
        height: 27rem;
    }
    @media(max-width: 1024px){
        display: none;
    }
`
export const Right = styled.div`
    display: flex;

    @media(max-width: 1024px){
        margin-top: 5.625rem;
        background-color: #1B211B;
        border-radius: 5px;
        box-shadow: 0px 0px 99px #00C8DBCC;

        width: 322px;
        height: 484px;
    }
    @media(max-width: 350px){
        width: 290px;
    }
`
export const Slider = styled.div`
    border: solid hotpink;
    display: flex;
    margin: 6rem 3.125rem;
    width: 18.9rem;
    overflow: hidden;
    p{
        font-size: 1rem;
        font-family: CabinetGrotesk;
        font-weight: 200;
        width: 18.9rem;
        span{
            color: #7E7E7E;
        }
        @media(max-width: 1266px){
            font-size: 0.9rem;
            width: 13rem;
        }
        @media(max-width: 1024px){
            font-size: 1rem;
            width: 17.8rem;
        }
        @media(max-width: 350px){
            width: 15.8rem;
        }
    }
    @media(max-width: 1266px){
        margin: 2rem 2rem;
        width: 13rem;
    }
    @media(max-width: 1024px){
        width: 17.8rem;
        margin: 4.5rem 1.25rem 0 1.25rem;
    }
    @media(max-width: 350px){
        width: 15.8rem;
        margin: 4.5rem 1rem 0 1rem;
    }
`
export const ButtonSlide = styled.div`
    display: flex;
    img{
        margin-left: 1rem;
        width: 31px;
        height: 26px;
        &:hover{
            cursor: pointer;
        }
    }
`
export const SlideOne = styled.div`
    transition: 0.4s;
`