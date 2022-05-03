import styled from "styled-components";

export const ContainerInsights = styled.section`
    width: 100%;
    background: #0B1617;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
    width: 90%;
    height: 100%;
`;

export const BoxText = styled.div`
    padding-top: 8rem;
    width: 18%;
    align-self: start;
`;

export const Title = styled.h2`
    font-size: 2.875rem;
    line-height: 1.1;
`;

export const Description = styled.p`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0 2.5rem;
    font-size: 1.2rem;
    font-weight: 200;
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 32%;
    
    &:hover {
        img {
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }

        h2 {
            text-decoration: underline;
        }
    }
`;

export const ImageCard = styled.img`
    width: 100%;
    transition: .3s;
`;

export const DescriptionCard = styled.p`
    margin: 1rem 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #999999;
`;

export const TitleCard = styled.h2`
    display: flex;
    flex-direction: column;
    min-height: 4.5rem;
    font-size: 1.75rem;
    line-height: 1.2;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
`;

