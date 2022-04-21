import styled from "styled-components";

export const ContainerServices = styled.section`
    height: 100vh;
    width: 100%;
    background: #0B1617;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const Card = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    min-height: 80vh;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        border: 1px solid #000;
        transition: .5s;
        z-index: -2;
    }

    &:hover {

        &:before {
            border-color: #00C8DB;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }

        p {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const ImageCard = styled.img`
    font-size: 1.5rem;
    width: 100%;
`;

export const DescriptionCard = styled.p`
    padding-top: 12rem;
    width: 85%;
    font-size: 1.5rem;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
    z-index: 1;
`;
