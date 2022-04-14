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
export const BoxCardOne = styled.div`
    width: 23%;
    height: 37.5rem;
    
    

    &:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
`;
export const BoxCardTwo = styled.div`
    width: 23%;
    height: 37.5rem;

    &:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);        
    }
`;
export const BoxCardThree = styled.div`
    width: 23%;
    height: 37.5rem;
    &:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
`;
export const ImageCard = styled.img`
    font-size: 1.5rem;
    width: 100%;
`;
export const DescriptionCard = styled.p`
    font-size: 1.5rem;
    width: 90%;
    position: relative;
    left: 2rem;
    bottom: 15rem;
    display: flex;
    &:hover {
        display: flex;
    }
`;
