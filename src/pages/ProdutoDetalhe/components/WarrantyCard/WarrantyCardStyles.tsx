import styled from "styled-components";

export const Container = styled.div`

    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.lg}px;

    padding:${({theme})=>theme.spacing.xl}px;

    background:${({theme})=>theme.colors.surface};

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.xl}px;

    box-shadow:${({theme})=>theme.shadows.sm};

    transition:border-color .25s;

    &:hover{

        border-color:${({theme})=>theme.colors.gold};

    }

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        padding:${({theme})=>theme.spacing.lg}px;

        gap:${({theme})=>theme.spacing.md}px;

    }

`;

export const IconContainer = styled.div`

    width:64px;

    height:64px;

    display:flex;

    align-items:center;

    justify-content:center;

    border-radius:50%;

    background:rgba(200,164,90,.12);

    color:${({theme})=>theme.colors.gold};

    font-size:34px;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        width:56px;

        height:56px;

        font-size:30px;

    }

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

export const Description = styled.p`

    margin:0;

    font-family:${({theme})=>theme.fonts.body};

    font-size:.98rem;

    line-height:1.8;

    color:${({theme})=>theme.colors.textSecondary};

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:.92rem;

        line-height:1.7;

    }

`;

export const Benefits = styled.div`

    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.md}px;

`;

export const BenefitItem = styled.div`

    display:flex;

    align-items:center;

    gap:${({theme})=>theme.spacing.sm}px;

    font-family:${({theme})=>theme.fonts.body};

    font-size:.95rem;

    color:${({theme})=>theme.colors.text};

    svg{

        flex-shrink:0;

        color:${({theme})=>theme.colors.gold};

        font-size:18px;

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:.9rem;

    }

`;

