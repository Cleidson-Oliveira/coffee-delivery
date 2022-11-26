import styled, { css } from "styled-components";

export const Conteiner = styled.button`
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all .3s ease;

    ${({theme}) => css`
        background-color: ${theme.colors.yellow.mid};
        font-size: ${theme.fontSize.text.sm};
        color: white;
        
        :hover {
            background-color: ${theme.colors.yellow.dark};
        }
    `}

`;