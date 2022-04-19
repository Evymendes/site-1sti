import styled from "styled-components";


export const ContainerInsights = styled.section`
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
    align-items: center;
`;
export const BoxText = styled.div`
    width: 22%;
    margin-bottom: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`;
export const Title = styled.h2`
    font-size: 2.875rem;
    margin-bottom: 1rem;
`;
export const Description = styled.p`
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;
export const BoxCard = styled.div`
    width: 23%;
    /* height: 37.5rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const ImageCard = styled.img`
    width: 100%;
`;
export const DescriptionCard = styled.p`
    text-align: center;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #999999;
    margin-top: .5rem;
`;
export const TitleCard = styled.h2`
    margin-top: 2rem;
    font-size: 1.75rem;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
`;

