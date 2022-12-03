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

    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
        gap: 10px;
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

    @media screen and (max-width: 600px) {
        justify-content: center;

        span {
            text-align: center;
        }
    }
`;

export const Price = styled.div`
    font-weight: bold;

    @media screen and (max-width: 600px) {
        width: 100%;
        text-align: end;
    }
`;