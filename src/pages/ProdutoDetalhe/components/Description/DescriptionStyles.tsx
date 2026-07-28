import styled from "styled-components";

export const Container = styled.section`

    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.xl}px;

    padding:${({theme})=>theme.spacing.xl}px;

    background:${({theme})=>theme.colors.surface};

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.xl}px;

    box-shadow:${({theme})=>theme.shadows.sm};

    transition:
        border-color .25s,
        transform .25s;

    &:hover{

        border-color:${({theme})=>theme.colors.gold};

    }

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        padding:${({theme})=>theme.spacing.lg}px;

        gap:${({theme})=>theme.spacing.lg}px;

    }

`;

export const Header = styled.div`

    display:flex;

    align-items:center;

`;

export const Title = styled.h2`

    margin:0;

    font-family:${({theme})=>theme.fonts.heading};

    font-size:2rem;

    font-weight:600;

    color:${({theme})=>theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        font-size:1.7rem;

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:1.5rem;

    }

`;

export const Text = styled.p`

    margin:0;

    font-family:${({theme})=>theme.fonts.body};

    font-size:1rem;

    line-height:2;

    color:${({theme})=>theme.colors.textSecondary};

    white-space:pre-line;

    text-align:justify;

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        font-size:.95rem;

        line-height:1.9;

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:.9rem;

        line-height:1.8;

        text-align:left;

    }

`;

