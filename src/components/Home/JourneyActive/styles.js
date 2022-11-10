import styled from 'styled-components'

export const Journeys = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 120px;

    @media(max-width: 880px) {
        flex-direction: column;
    }
   
`
export const Left = styled.div`
    width: 100%;
    max-width: 250px;
`
export const Right = styled.div`
    width: 100%;
    max-width: 75%;
    margin-top: 9rem;
    flex: 1;
    
    @media(max-width: 1250px){
        margin-top: 30px;
    }

    @media(max-width: 880px) {
        width: 100%;
        max-width: 100%;
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
    
`
export const LineCyan = styled.div`
    margin-top: 0.5rem;
    width: 100%;
    height: 2px;
    background-color: #00C8DB;
`
export const Institutions = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1250px){
        gap: 20px;
    }

    @media(max-width: 860px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        
    }
    
`
export const Cogna = styled.img`
    width: 100%;
    max-width: 150px;

    @media(max-width: 1150px){
        width: 100%;
        max-width: 100px;
    }

    @media(max-width: 600px){
        width: 100px;
        height: 35px;
    }
`
export const Somos = styled.img`
    width: 100%;
    max-width: 150px;

    @media(max-width: 1150px){
        width: 100%;
        max-width: 100px;
    }

    @media(max-width: 600px){
        width: 120px;
        height: 65px;
    }
`
export const Cruzeiro = styled.img`
    width: 100%;
    max-width: 250px;

    @media(max-width: 1150px){
        width: 100%;
        max-width: 170px;
    }

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
    width: 100%;
    max-width: 180px;
    height: auto;

    @media(max-width: 1150px){
        width: 100%;
        max-width: 120px;
    }

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
    width: 100%;
    max-width: 220px;
    height: auto;
    margin-top: 30px;

    @media(max-width: 1150px){
        width: 100%;
        max-width: 170px;
    }

    @media(max-width: 610px) {
        max-width: 200px;
    }
`
export const Sulamerica = styled.img`
    width: 100%;
    max-width: 170px;
    height: auto;
    margin-top: 30px;
    @media(max-width: 1150px){
        width: 100%;
        max-width: 125px;
    }

    @media(max-width: 610px) {
        max-width: 150px;
    }   
`
export const Marisa = styled.img`
     width: 100%;
    max-width: 200px;
    margin-top: 30px;
    @media(max-width: 1150px){
        width: 100%;
        max-width: 140px;
    }

    @media(max-width: 610px) {
        max-width: 130px;
    } 
`
export const InstitutionsTwo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 50px auto;

    @media(max-width: 860px) {
        margin: 20px auto;
        gap: 20px;
    }

    @media(max-width: 610px) {
        display: grid;
        grid-template-columns: 1fr;
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