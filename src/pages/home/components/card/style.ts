import styled, { css } from "styled-components";

export const Conteiner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 256px;
    height: 310px;
    padding: 20px;
    padding-top: 110px;
    border-radius: 6px 36px 6px 36px;

    ${({theme}) => css`
        background-color: ${theme.colors.base.card};
    `}
`;

export const CoffeeImage = styled.img`
    position: absolute;
    top: -20px;
    width: 120px;
    height: 120px;
`;

export const Tag = styled.span`
    height: 30px;
    padding: 5px 10px;
    border-radius: 15px;

    ${({theme}) => css`
        color: ${theme.colors.yellow.dark};
        background-color: ${theme.colors.yellow.light};
    `}
`;

export const CoffeeName = styled.h2`
    ${({theme}) => css`
        font-size: ${theme.fontSize.title.md}px;
        font-family: ${theme.fontFamily.header};
    `}
`;

export const CoffeeDesc = styled.p`
    text-align: center;

    ${({theme}) => css`
        color: ${theme.colors.base.label};
        font-size: ${theme.fontSize.text.md}px;
        font-family: ${theme.fontFamily.text};
    `}
`;

export const CardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    p {
        font-size: ${({theme}) => theme.fontSize.text.md}px;
        
        span {
            font-size: ${({theme}) => theme.fontSize.text["2xl"]}px;
            font-family: ${({theme}) => theme.fontFamily.header};

        }
    }
`;