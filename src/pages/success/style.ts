import styled, { css } from "styled-components";

export const Conteiner = styled.div`
    
    width: 80%;
    height: 100%;
    margin: 5rem auto;

    h1 {
        ${({theme}) => css`
            font-size: ${theme.fontSize.title.lg};
            font-family: ${theme.fontFamily.header};
            color: ${theme.colors.yellow.dark};
        `}
    }
        
    & > p {
        font-size: ${({theme}) => theme.fontSize.text.xl};
    }

    & > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 2.5rem;
    }
`;

export const DeliveryInfoConteiner = styled.div`

    border: solid 1px transparent;
    border-radius: 6px 36px 6px 36px;

    ${({theme}) => css`
        background-image: 
            linear-gradient(white, white), 
            linear-gradient(to right, ${theme.colors.yellow.dark}, ${theme.colors.purple.dark});
        background-origin: border-box;
        background-clip: content-box, border-box;
    `}

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 2rem;
        height: 100%;
        padding: 2.5rem;
        padding-right: 3.5rem;
    }
`;

export const DeliveryInfo = styled.div`
    display: flex;
    gap: 1rem;

    svg {
        line-height: 0;
        padding: 8px;
        box-sizing: content-box;
        border-radius: 50%;
    }

    &:nth-child(1) svg {
        background-color: ${({theme}) => theme.colors.purple.mid};
    }
    &:nth-child(2) svg {
        background-color: ${({theme}) => theme.colors.yellow.mid};
    }
    &:nth-child(3) svg {
        background-color: ${({theme}) => theme.colors.yellow.dark};
    }
    
`;