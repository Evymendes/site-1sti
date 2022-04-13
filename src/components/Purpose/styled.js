import styled from "styled-components";


export const ContainerPurpose = styled.section`
    height: 100vh;
    background: #0B1617;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContainerShapes = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &:hover {
        
    }
`;
export const BoxSquare = styled.div`

    &:hover {
        box-shadow: 0 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
    }
`;
export const TitlePurpose = styled.h3`
    font-size: 1.875rem;
    position: absolute;
    font-weight: 600;
    left: 12rem;
    top: 55rem;
    z-index: 3;
    width: 37%;

`;
export const Square = styled.div`
    width: 31.375rem;
    height: 31.375rem;
    background: #0B1617;
    border: 2px solid #742698;
    transform: matrix(1, -0.09, 0.09, 1, 0, 0);

    &:hover {
        box-shadow: inset 0 0 1rem #742698;
    }
`;
export const Circle = styled.div`
    width: 30.125rem;
    height: 30.125rem;
    border-radius: 50%;
    background: #0B1617;
    border: 2px solid #FF0070;
    margin-top: 8rem;

    &:hover {
        box-shadow: inset 0 0 1rem #FF0070;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
    }
`;