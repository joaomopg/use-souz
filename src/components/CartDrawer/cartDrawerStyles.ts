import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;

    inset: 0;

    display: flex;
    justify-content: flex-end;

    background:
        rgba(0, 0, 0, 0.55);

    backdrop-filter:
        blur(3px);

    z-index: 1000;
`;


export const Drawer = styled.div`
    width: 420px;
    max-width: 100%;

    height: 100vh;

    display: flex;
    flex-direction: column;

    background: #faf9f7;

    border-left:
        1px solid #e5e1da;

    box-shadow:
        -10px 0 35px
        rgba(0, 0, 0, 0.2);

    color: #1f1f1f;

    @media (
        max-width:
        ${({ theme }) =>
            theme.breakpoints.mobile}px
    ) {
        width: 100%;
    }
`;


export const DrawerHeader = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    padding:
        ${({ theme }) =>
            theme.spacing.lg}px
        ${({ theme }) =>
            theme.spacing.xl}px;

    border-bottom:
        1px solid #e5e1da;

    flex-shrink: 0;
`;


export const DrawerTitle = styled.h2`
    margin: 0;

    font-family:
        ${({ theme }) =>
            theme.fonts.heading};

    font-size: 1.45rem;

    font-weight: 600;

    color: #1f1f1f;
`;


export const CloseButton = styled.button`
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border:
        1px solid transparent;

    border-radius:
        ${({ theme }) =>
            theme.radius.md}px;

    background: transparent;

    color: #555555;

    font-size: 20px;

    cursor: pointer;

    transition:
        color 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;

    &:hover {
        color:
            ${({ theme }) =>
                theme.colors.gold};

        border-color: #dedad2;

        background: #f1eee9;
    }
`;


export const DrawerBody = styled.div`
    flex: 1;

    min-height: 0;

    overflow-y: auto;

    padding:
        ${({ theme }) =>
            theme.spacing.lg}px
        ${({ theme }) =>
            theme.spacing.xl}px;

    color: #1f1f1f;

    scrollbar-width: thin;

    scrollbar-color:
        #c8c3bb #faf9f7;
`;


export const DrawerFooter = styled.div`
    display: flex;
    flex-direction: column;

    gap:
        ${({ theme }) =>
            theme.spacing.md}px;

    padding:
        ${({ theme }) =>
            theme.spacing.lg}px
        ${({ theme }) =>
            theme.spacing.xl}px;

    border-top:
        1px solid #e5e1da;

    background: #faf9f7;

    flex-shrink: 0;
`;


export const EmptyCart = styled.div`
    width: 100%;

    min-height: 320px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 32px 20px;

    box-sizing: border-box;

    text-align: center;
`;


export const EmptyCartIcon = styled.div`
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    border-radius: 50%;

    background: #f1eee9;

    border:
        1px solid #dedad2;

    color:
        ${({ theme }) =>
            theme.colors.gold};

    font-size: 30px;
`;


export const EmptyCartTitle = styled.h3`
    margin: 0 0 8px;

    font-family:
        ${({ theme }) =>
            theme.fonts.heading};

    font-size: 1.4rem;

    font-weight: 600;

    color: #1f1f1f;
`;


export const EmptyCartText = styled.p`
    max-width: 280px;

    margin: 0 0 24px;

    font-family:
        ${({ theme }) =>
            theme.fonts.body};

    font-size: 0.9rem;

    line-height: 1.5;

    color: #686868;
`;


export const ContinueShoppingButton =
    styled.button`
        width: 100%;
        max-width: 280px;

        height: 48px;

        border: none;

        border-radius:
            ${({ theme }) =>
                theme.radius.md}px;

        background:
            ${({ theme }) =>
                theme.colors.gold};

        color: #171717;

        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size: 0.9rem;

        font-weight: 700;

        cursor: pointer;

        transition:
            background 0.25s ease,
            transform 0.2s ease,
            box-shadow 0.25s ease;

        &:hover {
            background:
                ${({ theme }) =>
                    theme.colors.goldHover};

            transform:
                translateY(-2px);

            box-shadow:
                0 8px 20px
                rgba(0, 0, 0, 0.15);
        }

        &:active {
            transform:
                translateY(0);
        }
    `;


export const Summary = styled.div`
    display: grid;

    grid-template-columns:
        1fr auto;

    gap: 8px 16px;

    font-family:
        ${({ theme }) =>
            theme.fonts.body};

    font-size: 0.9rem;

    color: #686868;

    span {
        color: #686868;
    }

    strong {
        color: #1f1f1f;

        font-weight: 600;

        text-align: right;
    }

    strong:last-of-type {
        font-size: 1.05rem;
        font-weight: 700;
    }

    br {
        display: none;
    }
`;


export const Actions = styled.div`
    width: 100%;

    button {
        width: 100%;

        height: 52px;

        border: none;

        border-radius:
            ${({ theme }) =>
                theme.radius.md}px;

        background:
            ${({ theme }) =>
                theme.colors.gold};

        color: #171717;

        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size: 0.9rem;

        font-weight: 700;

        cursor: pointer;

        transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;

        &:hover {
            background:
                ${({ theme }) =>
                    theme.colors.goldHover};

            transform:
                translateY(-2px);

            box-shadow:
                0 8px 20px
                rgba(0, 0, 0, 0.15);
        }

        &:active {
            transform:
                translateY(0);
        }
    }
`;