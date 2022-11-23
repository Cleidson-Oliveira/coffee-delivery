import styled from "styled-components";

interface CardProps {
    color: string
}

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    padding: 94px;
    margin: auto;

    & > div {
        
        & > div:first-child {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            margin-bottom: 3.125rem;
        }

        & div:last-child {
            display: flex;
            flex-wrap: wrap;
            row-gap: 1rem;
        }
    }

    h1 {
        font-weight: bold;
        font-size: 3rem;
    }

    img {
        width: fit-content;
    }
`;

export const Card = styled.div<CardProps>`
    display: flex;
    align-items: center;
    gap: .8rem;
    width: 48%;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        padding: .5rem;
        border-radius: 50%;
        background-color: ${({color}) => color};
    }
`;