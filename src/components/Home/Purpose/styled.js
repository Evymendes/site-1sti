import styled from "styled-components";
import ImgCard from "../../../images/Group8008.svg"

export const ContainerPurpose = styled.section`
    height: 220vh;
    width: 100%;
    background: #0B1617;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ContentContainer = styled.div`
    width: 90%;

    display: flex;
    justify-content: space-between;
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
`;
export const ImagePurpose = styled.img`
    
`;





export const ContainerCards = styled.div`
    width: 90%;
    height: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
`;
export const BoxCards = styled.div`
    display: flex;
    justify-content: space-between;
    width: 74%;
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
    
`;
export const ImageCard = styled.img`
    width: 3rem;
`;
export const TitleCard = styled.h2`
    font-size: 1.125rem;
    text-align: center;
    height: 20%;
`;
export const TitleCardPink = styled.h2`
    font-size: 1.125rem;
    text-align: center;
    color: #FF0070;
`;
export const TextCard = styled.p`
    font-size: .875rem;
    height: 45%;
    text-align: left;
`;


