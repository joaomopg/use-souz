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

export const Header = styled.div`

    display:flex;

    align-items:center;

    gap:${({theme})=>theme.spacing.lg}px;

`;

export const IconContainer = styled.div`

    width:58px;

    height:58px;

    display:flex;

    align-items:center;

    justify-content:center;

    border-radius:50%;

    background:rgba(200,164,90,.12);

    color:${({theme})=>theme.colors.gold};

    font-size:28px;

    flex-shrink:0;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        width:52px;

        height:52px;

        font-size:24px;

    }

`;

export const Title = styled.h3`

    margin:0;

    font-family:${({theme})=>theme.fonts.heading};

    font-size:1.8rem;

    color:${({theme})=>theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        font-size:1.6rem;

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:1.4rem;

    }

`;

export const Description = styled.p`

    margin-top:6px;

    color:${({theme})=>theme.colors.textSecondary};

    font-family:${({theme})=>theme.fonts.body};

    line-height:1.6;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:.9rem;

    }

`;

export const CepContainer = styled.div`

    display:flex;

    gap:${({theme})=>theme.spacing.md}px;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        flex-direction:column;

    }

`;

export const CepInput = styled.input`

    flex:1;

    height:52px;

    min-height: 52px;

    padding:0 18px;

    background:${({theme})=>theme.colors.background};

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.md}px;

    color:${({theme})=>theme.colors.text};

    font-family:${({theme})=>theme.fonts.body};

    outline:none;

    transition:.25s;

    &:focus{

        border-color:${({theme})=>theme.colors.gold};

    }

`;

export const CalculateButton = styled.button`

    padding:0 28px;

    border:none;

    border-radius:${({theme})=>theme.radius.md}px;

    background:${({theme})=>theme.colors.gold};

    color:${({theme})=>theme.colors.black};

    font-weight:600;

    cursor:pointer;

    transition:
        background .25s,
        transform .2s;

    &:hover{

        background:${({theme})=>theme.colors.goldHover};

        transform:translateY(-2px);

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        width:100%;

        height:50px;

    }

`;

export const Benefits = styled.div`

    display:flex;

    gap:${({theme})=>theme.spacing.xl}px;

    flex-wrap:wrap;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        flex-direction:column;

        gap:${({theme})=>theme.spacing.md}px;

    }

`;

export const BenefitItem = styled.div`

    color:${({theme})=>theme.colors.textSecondary};

    font-family:${({theme})=>theme.fonts.body};

    font-size:.95rem;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:.9rem;

    }

`;

