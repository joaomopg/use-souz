import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0;

    padding: ${({ theme }) => theme.spacing.lg}px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) => theme.radius.lg}px;

    transition:
        border-color .25s,
        transform .25s;

    &:hover{
        border-color:${({theme})=>theme.colors.gold};
    }

    @media (max-width:${({theme})=>theme.breakpoints.tablet}px){
        padding: ${({ theme }) => theme.spacing.md}px;
    }

    @media (max-width:${({theme})=>theme.breakpoints.mobile}px){
        padding: ${({ theme }) => theme.spacing.sm}px;
    }
`;

export const ProductHeader = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) => theme.spacing.xs}px;

    padding-bottom: 16px;

    border-bottom: 1px solid
        ${({ theme }) => theme.colors.divider};
`;

export const ProductMeta = styled.div`
    display: flex;
    align-items: center;

    gap: ${({ theme }) => theme.spacing.md}px;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        flex-direction: column;

        align-items: flex-start;

        gap: ${({theme})=>theme.spacing.xs}px;
    }
`;

export const Breadcrumb = styled.div`
    font-family: ${({ theme }) => theme.fonts.body};

    font-size: .75rem;

    letter-spacing: 1px;

    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.textMuted};
`;

export const ProductTitle = styled.h1`
    margin: 4px 0 6px;

    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: 2.4rem;

    font-weight: 600;

    line-height: 1.08;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width:${({theme})=>theme.breakpoints.laptop}px){
        font-size:2.1rem;
    }

    @media (max-width:${({theme})=>theme.breakpoints.tablet}px){
        max-width:100%;

        font-size:1.9rem;
    }

    @media (max-width:${({theme})=>theme.breakpoints.mobile}px){
        font-size:1.6rem;

        line-height:1.15;
    }
`;

export const Rating = styled.div`
    font-family: ${({ theme }) => theme.fonts.body};

    font-size: .9rem;

    color: ${({ theme }) => theme.colors.gold};
`;

export const ProductCode = styled.div`
    font-family: ${({ theme }) => theme.fonts.body};

    font-size: .85rem;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PriceSection = styled.div`
    display: flex;
    flex-direction: column;

    gap: 6px;

    padding: 16px 0;

    border-bottom: 1px solid
        ${({ theme }) => theme.colors.divider};
`;

export const OldPrice = styled.span`
    font-size: .95rem;

    color: ${({ theme }) => theme.colors.textMuted};

    text-decoration: line-through;

    opacity: .8;
`;

export const CurrentPrice = styled.span`
    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: 38px;

    font-weight: 700;

    line-height: 1;

    color: ${({ theme }) => theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){
        font-size:34px;
    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        font-size:28px;
    }
`;

export const DiscountBadge = styled.div`
    width: fit-content;

    padding: 5px 10px;

    border-radius: ${({ theme }) => theme.radius.md}px;

    background: rgba(95,163,106,.15);

    color: ${({ theme }) => theme.colors.success};

    font-weight: 600;

    font-size: .8rem;
`;

export const PixPrice = styled.div`
    font-size: .95rem;

    color: ${({ theme }) => theme.colors.textSecondary};

    strong{
        color:${({theme})=>theme.colors.gold};
    }
`;

export const Installments = styled.div`
    font-size: .88rem;

    line-height: 1.3;

    color: ${({theme})=>theme.colors.textSecondary};
`;

export const SizeSection = styled.div`
    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.sm}px;

    padding: 16px 0 10px;

    border-bottom:1px solid
        ${({theme})=>theme.colors.divider};
`;

export const SectionTitle = styled.h3`
    margin:0;

    font-family:${({theme})=>theme.fonts.body};

    font-size:.82rem;

    text-transform:uppercase;

    letter-spacing:.5px;

    color:${({theme})=>theme.colors.gold};
`;

export const SizeOptions = styled.div`
    display:flex;

    flex-wrap:wrap;

    gap:${({theme})=>theme.spacing.sm}px;
`;

interface SizeButtonProps{
    $selected:boolean;
}

export const SizeButton = styled.button<SizeButtonProps>`
    min-width:64px;

    height:40px;

    border-radius:${({theme})=>theme.radius.md}px;

    border:1px solid
        ${({theme,$selected})=>
            $selected
                ? theme.colors.gold
                : theme.colors.border};

    background:
        ${({theme,$selected})=>
            $selected
                ? theme.colors.gold
                : theme.colors.surface};

    color:
        ${({theme,$selected})=>
            $selected
                ? theme.colors.black
                : theme.colors.text};

    cursor:pointer;

    transition:
        background .25s,
        border-color .25s,
        color .25s,
        transform .2s,
        box-shadow .25s;

    font-weight:600;

    &:active{
        transform:scale(.97);
    }

    &:hover{
        border-color:${({theme})=>theme.colors.gold};

        transform:translateY(-2px);

        background:
            ${({theme,$selected})=>
                $selected
                    ? theme.colors.gold
                    : theme.colors.surfaceHover};
    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        min-width:56px;

        height:38px;

        font-size:13px;
    }
`;

export const QuantitySection = styled.div`
    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.sm}px;

    padding: 14px 0;

    border-bottom:1px solid
        ${({theme})=>theme.colors.divider};
`;

export const QuantitySelector = styled.div`
    display:flex;

    width:150px;

    height:44px;

    overflow:hidden;

    border:1px solid
        ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.md}px;
`;

export const QuantityButton = styled.button`
    width:44px;

    height:44px;

    border:none;

    background:${({theme})=>theme.colors.surface};

    color:${({theme})=>theme.colors.text};

    cursor:pointer;

    transition:.2s;

    &:hover{
        background:${({theme})=>theme.colors.surfaceHover};
    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        width:40px;

        height:40px;
    }
`;

export const QuantityValue = styled.div`
    flex:1;

    display:flex;

    align-items:center;

    justify-content:center;

    font-weight:600;

    color:${({theme})=>theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        font-size:15px;
    }
`;

export const BuySection = styled.div`
    display:flex;

    flex-direction:column;

    gap:10px;

    padding-top:14px;
`;

export const BuyNowButton = styled.button`
    height:50px;

    border:none;

    border-radius:${({theme})=>theme.radius.md}px;

    background:${({theme})=>theme.colors.gold};

    color:${({theme})=>theme.colors.black};

    font-weight:600;

    font-size:.95rem;

    letter-spacing:.4px;

    box-shadow:${({theme})=>theme.shadows.md};

    cursor:pointer;

    transition:
        background .25s,
        transform .2s,
        box-shadow .25s;

    &:hover{
        background:${({theme})=>theme.colors.goldHover};

        transform:translateY(-2px);
    }

    &:active{
        transform:translateY(0);
    }

    &:disabled{
        opacity:.5;

        cursor:not-allowed;

        transform:none;
    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        height:48px;

        font-size:14px;
    }
`;

export const AddToCartButton = styled.button`
    height:50px;

    border:1px solid
        ${({theme})=>theme.colors.gold};

    border-radius:${({theme})=>theme.radius.md}px;

    background:transparent;

    color:${({theme})=>theme.colors.gold};

    font-weight:600;

    font-size:.88rem;

    letter-spacing:.4px;

    cursor:pointer;

    transition:
        background .25s,
        color .25s,
        border-color .25s,
        transform .2s,
        box-shadow .25s;

    &:hover{
        transform:translateY(-2px);

        background:${({theme})=>theme.colors.gold};

        color:${({theme})=>theme.colors.black};

        border-color:${({theme})=>theme.colors.gold};
    }

    &:disabled{
        opacity:.5;

        cursor:not-allowed;

        transform:none;
    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        height:48px;

        font-size:13px;
    }
`;

export const FavoriteButton = styled.button`
    margin-top:10px;

    padding:4px 0;

    border:none;

    background:transparent;

    color:${({theme})=>theme.colors.textSecondary};

    cursor:pointer;

    transition:.25s;

    font-size:.9rem;

    &:hover{
        color:${({theme})=>theme.colors.gold};
    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        font-size:13px;
    }
`;