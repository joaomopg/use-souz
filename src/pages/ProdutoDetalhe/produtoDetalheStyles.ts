import styled from "styled-components";

export const Container = styled.div`
    background:${({theme})=>theme.colors.background};
    max-width: 1440px;
    margin: 0 auto;
    padding:
        ${({theme}) => theme.spacing.xxxxl}px
        ${({theme}) => theme.spacing.lg}px;
    
    @media(max-width:768px){

    padding:
        ${({theme})=>theme.spacing.xxxxl}px
        ${({theme})=>theme.spacing.md}px;

    }

`

export const TopSection = styled.div`
    display: grid;

    grid-template-columns:

    1fr
    430px;

    gap:${({theme}) => theme.spacing.xxl}px;

    align-items: start;

    @media(max-width:1100px){

        grid-template-columns:1fr;

    }
`

export const LeftColumn = styled.div`
    display:flex;

    flex-direction:column;

    gap:${({theme}) => theme.spacing.xl}px;

`

export const RightColumn = styled.div`
    display:flex;

    flex-direction:column;

    gap:${({theme}) => theme.spacing.xl}px;
`

export const BottomSection = styled.div`
    margin-top:${({theme}) => theme.spacing.xxl}px;

    display:flex;

    flex-direction:column;

    gap:${({theme}) => theme.spacing.xl}px;

    @media(max-width:768px){

        gap:${({theme})=>theme.spacing.lg}px;
        
    }
`