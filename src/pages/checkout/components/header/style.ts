import styled from "styled-components";

export const Conteiner = styled.header`
    display: flex;
    gap: .5rem;
    padding-bottom: 1rem;

    span {
        display: block;
        font-size: ${({theme}) => theme.fontSize.text.md}px;

        &:first-child {
            font-size: ${({theme}) => theme.fontSize.text.base}px;
        }

    }
`;