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

export const Summary = styled.div``;

export const Actions = styled.div``;