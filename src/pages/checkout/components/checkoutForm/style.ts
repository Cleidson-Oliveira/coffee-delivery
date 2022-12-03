import styled, { css } from "styled-components";

export const Conteiner = styled.form`
    display: flex;
    gap: 2rem;
    margin: 40px auto;
    width: 80%;

    & > div {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`;

export const Title = styled.h2`
    margin-bottom: 1rem;

    ${({theme}) => css`
        font-family: ${theme.fontFamily.header};
        font-size: ${theme.fontSize.title.sm}px;
    `}
`;

export const AddressFormConteiner = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 60px);
    gap: 1rem .5rem;
    padding: 40px;
    border-radius: 6px;
    margin-bottom: 1rem;
    background-color: ${({theme}) => theme.colors.base.card};

    header {
        grid-row: 1/2;
        grid-column: 1/9;
    }
    
    input {
        padding: 12px;
        border: none;
        border-radius: 6px;
        background-color: ${({theme}) => theme.colors.base.input};
        color: ${({theme}) => theme.colors.base.text};

        &::placeholder {
            color: ${({theme}) => theme.colors.base.label};
        }
        &:focus-visible, &:focus {
            outline: none;
        }
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active {
            box-shadow: 0 0 0 30px ${({theme}) => theme.colors.base.input} inset !important;
            -webkit-box-shadow: 0 0 0 30px ${({theme}) => theme.colors.base.input} inset !important;
            -webkit-text-fill-color: ${({theme}) => theme.colors.base.text} !important;
        }

        &:nth-child(2) {
            grid-row: 2/3;
            grid-column: 1/4;
        }
        &:nth-child(3) {
            grid-row: 3/4;
            grid-column: 1/9;
        }
        &:nth-child(4) {
            grid-row: 4/5;
            grid-column: 1/4;
        }
        &:nth-child(5) {
            grid-row: 4/5;
            grid-column: 4/9;
        }
        &:nth-child(6) {
            grid-row: 5/6;
            grid-column: 1/4;
        }
        &:nth-child(7) {
            grid-row: 5/6;
            grid-column: 4/8;
        }
        &:nth-child(8) {
            grid-row: 5/6;
            grid-column: 8/9;
        }
    }

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        padding: 40px 20px;
    }
`;

export const PaymentFormConteiner = styled.div`
    padding: 40px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors.base.card};

    & > div {
        display: flex;
        gap: .5rem;
        margin-top: 1rem;
    }

    label {
        display: flex;
        align-items: center;
        gap: .5rem;
        flex: 1;
        padding: 1rem;
        border: 2px solid transparent;
        border-radius: 6px;
        text-transform: uppercase;
        white-space: nowrap;
        cursor: pointer;

        ${({theme}) => css`
            background-color: ${theme.colors.base.button};
            color: ${theme.colors.base.text};
            font-size: ${theme.fontSize.text.sm}px;
        `}

        input {
            display: none;
        }

        :has(input[type="radio"]:checked) {
            border: 2px solid ${({theme}) => theme.colors.purple.mid};
        }
    }

    @media screen and (max-width: 600px) {
        padding: 40px 20px;

        & > div {
            flex-direction: column;
        }
    }
`;

export const SelectedProducts = styled.div`
    padding: 40px 25px;
    border-radius: 6px 44px 6px 44px;
    background-color: ${({theme}) => theme.colors.base.card};
    width: 100%;
`;

export const PurshaseResume = styled.div`
    padding: 1.5rem 0;
    font-size: 14px;

    div {
        display: flex;
        justify-content: space-between;

        &:nth-child(2) {
            margin: .75rem 0;
        }

        &:last-child {
            font-size: 20px;
            font-weight: bold;
        }
    }
`;