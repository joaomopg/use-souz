import styled from "styled-components";

export const Overlay = styled.div`

    position: fixed;

    inset: 0;

    background: rgba(0,0,0,.45);

    display:flex;

    justify-content:flex-end;

    z-index:1000;

`;

export const Drawer = styled.div`

    width:420px;

    height:100vh;

    background:white;

    padding:32px;

    box-sizing:border-box;

    display: flex;
    flex-direction: column;

`;

export const DrawerHeader = styled.div`
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 24px;

    border-bottom: 1px solid #ececec;
`;

export const DrawerTitle = styled.h2``;

export const CloseButton = styled.button`
    background: transparent;

    border: none;

    cursor: pointer;

    font-size: 22px;
`;

export const DrawerBody = styled.div`
    flex: 1;

    overflow-y: auto;
`;

export const DrawerFooter = styled.div`
    display:flex;

    flex-direction:column;

    gap:16px;

    padding:24px;

    border-top:1px solid #ececec;
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

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};

    color: ${({ theme }) => theme.colors.gold};

    font-size: 30px;
`;

export const EmptyCartTitle = styled.h3`
    margin: 0 0 8px;

    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: 1.4rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.black};
`;

export const EmptyCartText = styled.p`
    max-width: 280px;

    margin: 0 0 24px;

    font-family: ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ContinueShoppingButton = styled.button`
    width: 100%;
    max-width: 280px;

    height: 48px;

    border: none;
    border-radius: ${({ theme }) => theme.radius.md}px;

    background: ${({ theme }) => theme.colors.gold};

    color: ${({ theme }) => theme.colors.black};

    font-family: ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;
    font-weight: 700;

    text-transform: uppercase;

    cursor: pointer;

    transition:
        background 0.25s,
        transform 0.2s,
        box-shadow 0.25s;

    &:hover {
        background: ${({ theme }) => theme.colors.goldHover};

        transform: translateY(-2px);

        box-shadow: ${({ theme }) => theme.shadows.md};
    }

    &:active {
        transform: translateY(0);
    }
`;

export const Summary = styled.div``;

export const Actions = styled.div``;