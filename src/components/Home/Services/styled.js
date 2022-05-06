import styled from "styled-components";

export const ContainerServices = styled.section`
    width: 100%;
    background: #0B1617;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;
    width: 90%;

    a {
        margin: 0 auto;

        @media (min-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
        width: 80%;

        & > div {
            width: 100%;

            div {
                margin-bottom: 2rem;
                width: 100%;
            }
        }
    }
`;

export const BoxText = styled.div`
    padding-top: 4rem;
    width: 18%;

    @media (max-width: 900px) {
        padding: 0;

        a {
            display: none;
        }
    }
`;

export const Title = styled.h2`
    font-size: 2.7em;
    line-height: 1.1;
`;

export const Description = styled.p`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0 2.5rem;
    font-size: 1.2em;
    font-weight: 200;
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.4rem 2.2rem 2.5rem;
    width: 32%;
    min-height: 85vh;
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
        transition: .3s;
        z-index: -2;
    }

    .card-id {
        font-weight: 400;
        text-align: center;
        transition: .3s;
    }

    &:hover {
        &:before {
            border-color: #00C8DB;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }

        .card-id {
            color: #00C8DB;
        }

        p {
            visibility: visible;
            opacity: 1;
        }
    }

    @media (max-width: 1200px) {
        padding: 1.2rem 1.5rem 2rem;
        min-height: 50vh;
        font-size: .7em;
    }

    @media (max-width: 768px) {
        font-size: .9em;

        p {
            padding: 10rem 0 1rem;
        }
    }
`;

export const ImageCard = styled.img`
    font-size: 1.5rem;
    width: 100%;
`;

export const DescriptionCard = styled.p`
    display: flex;
    flex-direction: column;
    padding-top: 20rem;
    font-size: 1.4em;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
    z-index: 1;
`;
