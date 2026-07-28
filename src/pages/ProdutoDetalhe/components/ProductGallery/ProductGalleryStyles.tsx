import styled from "styled-components";

export const Container = styled.div`
    display:flex;

    gap:${({theme})=>theme.spacing.lg}px;

    width:100%;

    height:720px;

    padding:${({theme})=>theme.spacing.lg}px;

    background:${({theme})=>theme.colors.surface};

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.xl}px;

    box-shadow:${({theme})=>theme.shadows.md};

    box-sizing:border-box;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){

        flex-direction:column-reverse;

        height:auto;

    }
`;

export const ThumbnailColumn = styled.div`
    width:88px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 12px;

    @media (max-width:${({theme})=>theme.breakpoints.tablet}px){

        width:100%;

        flex-direction:row;

        justify-content:center;

    }
`;

export const Thumbnails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    gap: 12px;

    overflow-y: auto;
    overflow-x: hidden;

    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width:${({theme})=>theme.breakpoints.tablet}px){

        overflow-x:auto;
        overflow-y:hidden;
        flex-direction:row;
        width:100%;

    }
`;

export const Thumbnail = styled.div<{ $selected: boolean }>`
    width: 78px;
    height: 78px;

    padding: 3px;

    box-sizing: border-box;

    border-radius: ${({theme})=>theme.radius.md}px;

    background:${({theme})=>theme.colors.surface};

    border:1px solid
        ${({theme,$selected})=>
            $selected
                ?theme.colors.gold
                :theme.colors.border};

    transition:.25s;

    cursor:pointer;

    img{

        width:100%;

        height:100%;

        border-radius:calc(${({theme})=>theme.radius.md}px - 3px);

        object-fit:cover;

        display:block;

    }

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        width: 60px;
        height: 60px;

    }

`;

export const ScrollButton = styled.button`
    width: 40px;
    height: 40px;

    border:1px solid ${({theme})=>theme.colors.border};
    border-radius: 50%;

    background:${({theme})=>theme.colors.surfaceHover};
    color:${({theme})=>theme.colors.text};

    cursor: pointer;

    transition: .2s;

    &:hover{
        border:1px solid ${({theme})=>theme.colors.goldHover};
    }

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        display:none;

    }

`;

export const MainImage = styled.div`
    flex:1;

    border: 1px solid ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) => theme.radius.xl}px;

    overflow:hidden;

    display:flex;

    justify-content:center;

    align-items:center;

    background:#fff;

    img{
        width:100%;
        height:100%;

        object-fit:cover;

        display:block;
    }
`;