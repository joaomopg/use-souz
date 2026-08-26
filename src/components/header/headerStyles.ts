import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 64px;

    padding: 0 190px;

    box-sizing: border-box;

    display: grid;

    grid-template-columns:
        minmax(260px, 1fr)
        minmax(320px, 1.4fr)
        minmax(300px, 1fr);

    align-items: center;

    gap: 24px;

    background-color: #000;

    position: fixed;

    top: 0;
    left: 0;

    z-index: 100;

    border-bottom:
        1px solid rgba(189, 159, 103, 0.12);


    .content .logo {
        height: 35px;

        position: relative;

        display: flex;

        gap: 8px;

        align-items: center;

        width: max-content;

        max-width: 58px;

        overflow: hidden;

        transition:
            max-width 0.8s ease-in-out;
    }


    .logo1 {
        font-family:
            "Montserrat",
            "Arial Black",
            sans-serif;

        font-weight: 900;

        font-size: 22px;

        color: #bd9f67;

        line-height: 1;

        display: flex;

        flex-direction: column;

        gap: 2px;

        white-space: nowrap;
    }


    .logo1 .underline {
        width: 100%;
        height: 3px;

        background-color: #bd9f67;

        border-radius: 2px;
    }


    .logo2 {
        font-family:
            "Montserrat",
            "Arial Black",
            sans-serif;

        font-weight: 900;

        font-size: 22px;

        line-height: 1;

        color: transparent;

        -webkit-text-stroke:
            1px #bd9f67;

        white-space: nowrap;
    }


    .content {
        display: flex;

        flex-direction: column;

        align-items: center;

        transition:
            all 0.5s ease-in-out;
    }


    .content .logo .trail {
        position: absolute;

        right: 0;

        height: 100%;
        width: 100%;

        opacity: 0;
    }


    .card.active .logo {
        max-width: 300px;

        animation:
            opacity 0.8s ease-in-out;
    }


    .card.active .content .logo-bottom-text {
        opacity: 1;

        letter-spacing: 6px;
    }


    .card.active .trail {
        animation:
            trail 0.8s ease-in-out;
    }


    @keyframes opacity {

        0% {
            border-right:
                1px solid transparent;
        }

        10% {
            border-right:
                1px solid #bd9f67;
        }

        80% {
            border-right:
                1px solid #bd9f67;
        }

        100% {
            border-right:
                1px solid transparent;
        }

    }


    @keyframes trail {

        0% {
            background:
                linear-gradient(
                    90deg,
                    rgba(189, 159, 103, 0) 90%,
                    rgb(189, 159, 103) 100%
                );

            opacity: 0;
        }

        30% {
            background:
                linear-gradient(
                    90deg,
                    rgba(189, 159, 103, 0) 70%,
                    rgb(189, 159, 103) 100%
                );

            opacity: 1;
        }

        70% {
            background:
                linear-gradient(
                    90deg,
                    rgba(189, 159, 103, 0) 70%,
                    rgb(189, 159, 103) 100%
                );

            opacity: 1;
        }

        95% {
            background:
                linear-gradient(
                    90deg,
                    rgba(189, 159, 103, 0) 90%,
                    rgb(189, 159, 103) 100%
                );

            opacity: 0;
        }

    }


    @media (
        max-width: 1400px
    ) {
        padding:
            0 80px;

        grid-template-columns:
            minmax(220px, 1fr)
            minmax(280px, 1.2fr)
            minmax(260px, 1fr);
    }


    @media (
        max-width: 1000px
    ) {
        padding:
            0 24px;

        grid-template-columns:
            auto
            1fr
            auto;

        gap: 14px;
    }
`;


export const LogoNameContainer = styled.div`
    min-width: 0;

    display: flex;

    align-items: center;

    gap: 10px;
`;


export const LogoLink = styled.a`
    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;
`;


export const LogoImg = styled.img`
    width: 44px;
    height: 44px;

    flex-shrink: 0;

    object-fit: contain;

    display: block;

    border-radius: 2px;
`;


export const SearchContainer = styled.div`
    min-width: 0;

    display: flex;

    align-items: center;

    justify-content: center;
`;


export const RegisterLoginContainer = styled.div`
    min-width: 0;

    height: 100%;

    display: flex;

    align-items: center;

    justify-content: flex-end;

    gap: 12px;


    svg {
        flex-shrink: 0;

        color: #a4823c;

        margin: 0;
    }
`;


export const ButtonsContainer = styled.div`
    display: flex;

    align-items: center;

    gap: 10px;

    color: #fff;

    font-size: 14px;

    white-space: nowrap;
`;


export const UserGreeting = styled.span`
    display: inline-flex;

    align-items: center;

    gap: 4px;

    color: #f2f2f2;

    font-size: 0.85rem;

    white-space: nowrap;


    strong {
        color: #bd9f67;

        font-weight: 700;
    }
`;


export const Separator = styled.span`
    color:
        rgba(255, 255, 255, 0.35);
`;


export const Button = styled.button`
    width: auto;
    height: 38px;

    padding: 0 4px;

    border: none;
    outline: none;

    background: transparent;

    color: #f2f2f2;

    font-family: inherit;

    font-size: 0.85rem;

    cursor: pointer;

    white-space: nowrap;

    transition:
        color 0.2s ease;


    &:hover {
        color: #bd9f67;
    }
`;

export const UserOrdersLabel = styled.span`
    font-size: 0.7rem;

    color:
        rgba(255, 255, 255, 0.5);

    transition:
        color 0.2s ease;
`;

export const UserArea = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    padding: 6px 10px;

    border-radius: 10px;

    cursor: pointer;

    transition:
        background 0.2s ease;

    &:hover {
        background:
            rgba(189, 159, 103, 0.08);

        ${UserOrdersLabel} {
            color: #bd9f67;
        }
    }
`;

export const UserIconWrapper = styled.div`
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        rgba(189, 159, 103, 0.12);

    color: #bd9f67;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1px;
`;

export const UserName = styled.span`
    font-size: 0.82rem;
    font-weight: 600;

    color: #f3f3f3;

    white-space: nowrap;
`;

export const LogoutButton = styled.button`
    padding: 0;

    border: none;

    background: transparent;

    color:
        rgba(255, 255, 255, 0.5);

    font-size: 0.7rem;

    text-align: left;

    cursor: pointer;

    transition:
        color 0.2s ease;

    &:hover {
        color: #bd9f67;
    }
`;
