import styled, { keyframes } from "styled-components";

const fade = keyframes`

    from{

        opacity:0;

        transform:translateY(25px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

`;

export const Container = styled.div`

    position:fixed;

    right:32px;

    bottom:32px;

    display:flex;

    align-items:center;

    gap:14px;

    padding:18px 22px;

    border-radius:${({theme})=>theme.radius.lg}px;

    background:${({theme})=>theme.colors.surface};

    border:1px solid ${({theme})=>theme.colors.gold};

    box-shadow:${({theme})=>theme.shadows.md};

    animation:${fade} .3s ease;

    z-index:9999;

`;

export const Icon = styled.div`

    color:${({theme})=>theme.colors.success};

    font-size:22px;

`;

export const Message = styled.span`

    color:${({theme})=>theme.colors.text};

    font-family:${({theme})=>theme.fonts.body};

    font-size:15px;

    font-weight:500;

`;