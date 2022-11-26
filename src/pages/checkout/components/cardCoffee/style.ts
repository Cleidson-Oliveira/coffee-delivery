import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.4rem;

    img {
        width: 64px;
        height: 64px;
    }

    & > div:nth-child(2) {
        flex: 1;
    }
`;