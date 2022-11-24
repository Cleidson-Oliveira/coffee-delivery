import styled from "styled-components";

interface CardProps {
    color: string
}

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 94px 0;
    margin: auto;

    img {
        width: fit-content;
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