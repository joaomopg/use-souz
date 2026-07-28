import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid #ececec;
`

export const ImageContainer = styled.div`
    width: 90px;
    height: 90px;
    flex-shrink: 0;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:8px;
    }
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProductInfo = styled.div`
    display:flex;
    flex-direction:column;
    gap:6px;
`

export const ProductActions = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
`

export const ProductPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #1b5e20;
`

export const ProductSize = styled.div`
    font-size: 13px;
    color: #666;
`

export const QuantityContainer = styled.div`
    display:flex;
    align-items:center;
    border:1px solid #ddd;
    border-radius:8px;
    overflow:hidden;
`;

export const QuantityButton = styled.button<{$disabled?: boolean}>`
    width: 34px;
    height: 34px;
    border: none;
    background: white;
    font-size: 18px;
    transition: background-color .2s;
    opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
    cursor: ${({ $disabled }) =>
        $disabled ? "not-allowed" : "pointer"};
    &:hover {
        background: ${({ $disabled }) =>
            $disabled ? "white" : "#f3f3f3"};
    }
`;

export const Quantity = styled.span`
    width:40px;
    text-align:center;
    font-weight:600;
`;

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #888;
    cursor: pointer;
    transition: background-color .2s ease,
                color .2s ease;

    &:hover {
        background: #f5f5f5;
        color: #d32f2f;
    }
`;

