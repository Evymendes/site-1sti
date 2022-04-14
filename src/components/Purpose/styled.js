import styled from "styled-components";

export const ContainerPurpose = styled.section`
    height: 100vh;
    background: #0B1617;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Square = styled.div`
    width: 31.375rem;
    height: 31.375rem;
    background: #0B1617;
    border: 2px solid #742698;
    transform: rotate(-5deg);
    transition: .4s;
`;

export const Circle = styled.div`
    width: 30.125rem;
    height: 30.125rem;
    border-radius: 50%;
    background: #0B1617;
    border: 2px solid #FF0070;
    margin-top: 8rem;
    transition: .4s;
`;

export const ContainerShapes = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &:hover {
        ${Circle} {
            box-shadow: inset 0 0 50px #FF0070;
            -webkit-transform: scale(1.1) translate(10px, -20px);
            transform: scale(1.1) translate(10px, -20px);
        }
        ${Square} {
            box-shadow: inset 0 0 50px #742698;
            -webkit-transform: rotate(-5deg) scale(1.1) translate(20px, 30px);
            transform: rotate(-5deg) scale(1.1) translate(20px, 30px);
        }
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