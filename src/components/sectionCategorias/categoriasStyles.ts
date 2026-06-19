import styled from "styled-components";

export const CategoriasContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 200px 50px 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const CategoriasCardsContainer = styled.div`
    display: flex;
    gap: 80px;
    padding: 10px 0px;
    box-sizing: border-box;
`

export const CategoriasCard = styled.div`
    width: calc(100% / 4);
    min-width: 150px;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 22px;
    text-align: center;
    border-radius: 12px;
    box-shadow: 4px 6px 14px #bd9f6723;
    padding-bottom: 40px;
    color: white;
    transition: 1s;
    cursor: pointer;

    &:hover{
        box-shadow: 4px 6px 22px 10px #bd9f6723;
        transform: scale(1.02);
    }

`

export const CardImageContainer = styled.div`
    width: 95%;
    height: auto;
    margin-bottom: 12px;
    border-radius: 12px;
    box-sizing: border-box;

`

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 12px;
`