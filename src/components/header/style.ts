import styled, {css} from "styled-components";

interface ButtonCartProps {
    productsAmount: number
}

export const Conteiner = styled.header`
    width: 100%;
    height: 6.5rem;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    margin: auto;
`;

export const Logo = styled.img``;

export const Actions = styled.div`

`;

export const ButtonCart = styled.button<ButtonCartProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 6px;
    border: none;
    background-color: ${({theme}) => theme.colors.yellow.light};
    cursor: pointer;

    ${({theme, productsAmount}) => productsAmount > 0 && css`
        &:after {
            content: "${productsAmount.toString()}";
            position: absolute;
            top: -5px;
            right: -5px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 15px;
            min-height: 15px;
            box-sizing: border-box;
            border-radius: 50%;
            background-color: ${theme.colors.yellow.dark};
            color: white;
            font-size: .6rem;
            font-family: 'Roboto';
        }
    `}
`;