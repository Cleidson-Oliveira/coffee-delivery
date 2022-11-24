import styled, { css } from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    justify-content: space-around;
    width: 72px;
    height: 38px;
    border-radius: 6px;

    ${({theme}) => css`
        background-color: ${theme.colors.base.button};
        color: ${theme.colors.purple.dark};
    `}

    & input {
        width: 30%;
        border: none;
        text-align: center;
        background-color: transparent;
        color: black;

        :focus {
            outline: none;
        }
    }
    & button {
        display: flex;
        align-items: center;
        padding: 0.2rem;;
        border: none;
        background-color: transparent;
        color: inherit;
    }
`;