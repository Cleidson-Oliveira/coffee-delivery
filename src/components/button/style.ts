import styled, { css } from "styled-components";

export const Conteiner = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 6px;
    transition: all .3s ease;

    ${({theme}) => css`
        background-color: ${theme.colors.purple.dark};
        
        :hover {
            background-color: ${theme.colors.purple.mid};
        }
    `}

`;