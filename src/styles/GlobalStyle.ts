import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html,
    body,
    #root{

        min-height:100%;

        background:${({theme})=>theme.colors.background};

    }

    body{

        font-family:${({theme})=>theme.fonts.body};

        overflow-x:hidden;

    }

    button,
    input,
    textarea{

        font-family:inherit;

    }

    a{

        color:inherit;

        text-decoration:none;

    }

    img{

        display:block;

        max-width:100%;

    }

`;