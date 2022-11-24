import styled, { css } from "styled-components";

export const Conteiner = styled.div`
    width: 80%;
    padding-bottom: 4rem;
    margin: auto;
`;

export const Title = styled.h2`
    margin-bottom: 54px;

    ${({theme}) => css`
        font-family: ${theme.fontFamily.header};
        font-size: ${theme.fontSize.title.lg};
    `}
`;

export const CardsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 1rem;
`;