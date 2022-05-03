import styled from "styled-components";
import ImgCard from "../../../images/Group8008.svg"

export const ContainerPurpose = styled.section`
    width: 100%;
    background: #0B1617;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width:768px) {
        
    }
`;
export const ContentContainer = styled.div`
    width: 90%;
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;

    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
    }
`;
export const BoxText = styled.div`
    width: 22%;
    height: 15rem;
`;
export const Title = styled.h2`
    font-size: 2.875rem;
    margin-bottom: 1rem;
`;
export const Description = styled.p`
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;
export const BoxImage = styled.div`
    width: 65%;
    margin-right: 3rem;

    @media (max-width:768px) {
        width: 100%;
    }
`;
export const ImagePurpose = styled.img`
    
`;





export const ContainerCards = styled.div`
    width: 90%;
    height: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (max-width:768px) {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        width: 100%;
        
    }
`;
export const BoxCards = styled.div`
    display: flex;
    justify-content: space-between;
    width: 74%;
    

    @media (max-width:768px) {
        margin-left: 45rem;
    }
`;
export const BoxCardsTwo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 74%;
    

    @media (max-width:768px) {
        padding-left: 48rem;
    }
`;
export const Card = styled.div`
    background-image: url(${ImgCard});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 20rem;
    width: 14.25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width:768px) {
        height: 24rem;
        min-width: 17rem;
        margin: 2rem;
    }
    
`;
export const ImageCard = styled.img`
    width: 3rem;
`;
export const TitleCard = styled.h2`
    font-size: 1.125rem;
    text-align: center;
    height: 20%;
    color: #fff;
`;
export const TitleCardPink = styled.h2`
    font-size: 1.125rem;
    text-align: center;
    color: #FF0070;

    @media (max-width:768px) {
        color: #fff;
    }
`;
export const TextCard = styled.p`
    font-size: .875rem;
    height: 45%;
    text-align: left;
`;


