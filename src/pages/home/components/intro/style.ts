import styled, { keyframes } from "styled-components";

interface CardProps {
    color: string
}

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 94px 0;
    margin: auto;

    img {
        width: fit-content;
        animation: 1s ${fadeIn} ease-out;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column-reverse;
        gap: 1rem;
        max-width: 100vw;
        padding: 2rem 0 3rem;

        img {
            width: 80%;
            margin: 0 auto 1rem;
        }
    }
`;

export const TextContent = styled.div`
    
    width: 44%;

    h1 {
        font-family: ${({theme})=> theme.fontFamily.header};
        font-weight: bold;
        font-size: ${({theme}) => theme.fontSize.title.xl}px;
    }
    
    & > div:first-child {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-bottom: 3.125rem;

        p {
            font-size: ${({theme}) => theme.fontSize.text.xl}px;
        }
    }

    & > div:last-child {
        display: grid;
        grid-template-columns: 40% 1fr;
        gap: 1rem;
    }
    
    @media screen and (max-width: 600px) {
        width: 80%;

        h1 {
            font-size: 1.6rem;
        }

        & > div:first-child {
            margin-bottom: 1.5rem;

            p {
                font-size: 1.1rem;
            }
        }

        & > div:last-child {
            display: flex;
            flex-direction: column;
        }

    }
`;

export const Card = styled.div<CardProps>`
    display: flex;
    align-items: center;
    gap: .8rem;

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