import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.base.button};

    img {
        width: 64px;
        height: 64px;
    }

    & + & {
        padding-top: 1.5rem;
    }
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    span {
        width: 100%;
    }

    & > div {
        height: 32px;
    }
    
    & > button {
        display: flex;
        align-items: center;
        gap: .2rem;
        padding: .5rem;
        border-radius: 6px;
        background-color: ${({theme}) => theme.colors.base.button};
    }
`;

export const Price = styled.div`
    font-weight: bold;
`;