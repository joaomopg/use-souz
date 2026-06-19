import styled from "styled-components";

export const CartContainer = styled.div`
    position: relative;

    width: 42px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border-radius: 50%;

    transition: 0.25s;

    &:hover {
        background-color: rgba(0,0,0,0.06);
    }
`;

export const CartIcon = styled.svg`
    width: 28px;
    height: 28px;

    color: #444;

    transition: 0.25s;

    ${CartContainer}:hover & {
        color: #c9a227;
        transform: scale(1.05);
    }
`;

export const CartBadge = styled.div`
    position: absolute;

    top: 2px;
    right: 0px;

    min-width: 18px;
    height: 18px;

    padding: 0px 5px;

    border-radius: 999px;

    background-color: #d32f2f;
    color: white;

    font-size: 11px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    border: 2px solid white;
`;