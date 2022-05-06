import styled from "styled-components";
import ImgCard from "../../../images/Group8008.svg";

export const ContainerPurpose = styled.section`
    width: 100%;
    background: #0B1617;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        & > a {
            display: none;
        }
    }
`;

export const ContentContainer = styled.div`
    width: 90%;
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
    }
`;

export const BoxText = styled.div`
    width: 30%;

    @media (max-width: 768px) {
        margin: 0 auto;
        width: 90%;
        font-size: .9rem;

        p {
            margin-bottom: 1rem;
        }

        & > a {
            display: none;
        }
    }
`;

export const Title = styled.h2`
    margin-bottom: 1rem;
    font-size: 2.875em;
`;

export const Description = styled.p`
    margin-bottom: 3rem;
    font-size: 1.5em;
`;

export const BoxImage = styled.div`
    padding-right: 3rem;
    max-width: 58rem;

    @media (max-width: 768px) {
        width: 100vw;
        overflow-x: scroll;
    }
`;

export const ImagePurpose = styled.img`
    @media (max-width: 768px) {
        width: 175vw;
    }
`;

export const ContainerCards = styled.div`
    width: 90%;
    height: 45%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        display: flex;
        width: 100%;
        font-size: 1.2rem;
        overflow-x: scroll;
    }
`;

export const BoxCards = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin: 2rem 0;
    max-width: 65rem;

    @media (max-width: 768px) {
        flex-wrap: nowrap;
        justify-content: flex-start;
        padding-left: 3rem;
        min-width: 100vw;
    }
`;

export const Card = styled.div`
    margin: .5rem;
    padding: 10px 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 14.25rem;
    height: 20rem;
    background-image: url(${ImgCard});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 900px) {
        width: 12.8rem;
        height: 18rem;
    }

    @media (max-width: 768px) {
        margin: 2rem .5rem;
        min-width: 17rem;
        height: 24rem;
    }
`;

export const ImageCard = styled.img`
    width: 4rem;
`;

export const TitleCard = styled.h2`
    font-size: 1.2em;
    line-height: 1.1;
    text-align: center;
    color: #fff;
`;

export const TitleCardPink = styled.h2`
    font-size: 1.2em;
    line-height: 1.1;
    text-align: center;
    color: #FF0070;

    @media (max-width: 768px) {
        color: #fff;
    }
`;

export const TextCard = styled.p`
    font-size: .9em;
    font-weight: 300;
    line-height: 1.3;
    text-align: left;
`;


