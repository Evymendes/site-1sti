import styled from 'styled-components'

export const Journeys = styled.section`
    margin: 10rem 4.563rem 0 4.563rem;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1250px){
        flex-direction: column;
    }
    @media(max-width: 1024px){
        margin-top: 28rem;
    }
    @media(max-width: 768px){
        margin: 47rem 1.5rem;
    }

`
export const Left = styled.div`
    max-width: 15rem;
    min-width: 13.563rem;
`
export const Right = styled.div`
    margin-top: 9rem;
    max-width: 55rem;
    min-width: 52rem;
    @media(max-width: 1250px){
        margin-top: 30px;
        min-width: 20rem;
    }
    @media(max-width: 375px){
        min-width: 18rem;
    }
    @media(min-width: 1600px){
        max-width: 100rem;
        min-width: 70rem;
    }
    @media(min-width: 1800px){
        min-width: 80rem;
    }
`
export const Education = styled.div`
    @media(max-width: 768px){
        margin-top: 1rem;
    }
`
export const Title = styled.p`
    text-transform: uppercase;
    letter-spacing: 1.4px;
    color: #00C8DB;
    font-size: 0.875rem;
    font-weight: 600;
    font-family: CabinetGrotesk;
    text-align: center;
    @media(max-width: 1250px){
        text-align: left;
    }
`
export const LineCyan = styled.div`
    margin-top: 0.5rem;
    width: 100%;
    height: 2px;
    background-color: #00C8DB;
`
export const Institutions = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    @media(max-width: 1250px){
        gap: 40px;
        flex-wrap: wrap;
        justify-content: start;
    }
`
export const Cogna = styled.img`
    width: 127px;
    height: 45px;
    @media(max-width: 600px){
        width: 100px;
        height: 35px;
    }
`
export const Somos = styled.img`
    width: 144px;
    height: 78px;
    @media(max-width: 600px){
        width: 120px;
        height: 65px;
    }
`
export const Cruzeiro = styled.img`
    width: 240px;
    height: 75px;
    @media(max-width: 600px){
        width: 160px;
        height: 50px;
    }
    @media(max-width: 370px){
        width: 130px;
        height: 40px;
    }
`
export const Laureate = styled.img`
    width: 180px;
    height: 45px;
    @media(max-width: 600px){
        width: 120px;
        height: 30px;
    }
    @media(max-width: 370px){
        width: 100px;
        height: 30px;
    }
`
export const Sirio = styled.img`
    height: 54px;
    width: 224px;
    margin-top: 40px;
`
export const Sulamerica = styled.img`
    height: 41px;
    width: 162px;
    margin-top: 40px;
`
export const Marisa = styled.img`
    height: 30px;
    width: 140px;
    margin-top: 50px;
`
export const InstitutionsTwo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 50px auto;
    @media(max-width: 1250px){
        margin: 162px 0;
        flex-direction: column;
    }
`
export const Health = styled.div`
    @media(max-width: 768px){
        margin-top: 2.8rem;
    }
`
export const Insurance = styled.div`
    @media(max-width: 768px){
        margin-top: 2.8rem;
    }
`
export const Retail = styled.div`
    @media(max-width: 768px){
        margin-top: 2.8rem;
    }
`