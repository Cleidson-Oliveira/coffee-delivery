import styled, { css } from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
        ${({theme}) => css`
            color: ${theme.colors.yellow.mid};
            font-family: ${({theme}) => theme.fontFamily.header};
        `}
    }

    a {
        width: 100%;
        padding: 12px;
        border-radius: 6px;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        transition: all .3s ease;

        ${({theme}) => css`
            background-color: ${theme.colors.yellow.mid};
            font-size: ${theme.fontSize.text.sm}px;
            color: white;
            
            :hover {
                background-color: ${theme.colors.yellow.dark};
            }
        `}
    }
`;