import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) => theme.spacing.lg}px;

    padding: ${({ theme }) => theme.spacing.xl}px;

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

        gap: ${({ theme }) => theme.spacing.md}px;

    }

    @media (max-width:${({theme})=>theme.breakpoints.mobile}px){

        gap: ${({ theme }) => theme.spacing.sm}px;

    }

`;

export const ProductHeader = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const ProductMeta = styled.div`
    display: flex;
    align-items: center;

    gap: ${({ theme }) => theme.spacing.lg}px;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        flex-direction:column;

        align-items:flex-start;

        gap:${({theme})=>theme.spacing.xs}px;

    }
`;

export const Breadcrumb = styled.div`
    font-family: ${({ theme }) => theme.fonts.body};

    font-size: .8rem;

    letter-spacing: 1px;

    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.textMuted};
`;

export const ProductTitle = styled.h1`
    margin: 0;

    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: 2.7rem;

    font-weight: 600;

    line-height: 1.15;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width:${({theme})=>theme.breakpoints.laptop}px){

        font-size:2.3rem;

    }

    @media (max-width:${({theme})=>theme.breakpoints.tablet}px){

        max-width:100%;

        font-size:2rem;

    }

    @media (max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:1.7rem;

        line-height:1.2;

    }
`;

export const Rating = styled.div`
    font-family: ${({ theme }) => theme.fonts.body};

    font-size: .95rem;

    color: ${({ theme }) => theme.colors.gold};
`;

export const ProductCode = styled.div`
    font-family: ${({ theme }) => theme.fonts.body};

    font-size: .9rem;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PriceSection = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) => theme.spacing.sm}px;

    padding: ${({ theme }) => theme.spacing.lg}px 0;

    border-top: 1px solid ${({ theme }) => theme.colors.divider};

    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const OldPrice = styled.span`
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.textMuted};

    text-decoration: line-through;

    opacity:.8;
`;

export const CurrentPrice = styled.span`
    font-family: ${({ theme }) => theme.fonts.heading};

    font-size:42px;

    font-weight: 700;

    line-height: 1;

    color: ${({ theme }) => theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.tablet}){

        font-size:36px;

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}){

        font-size:30px;

    }
`;

export const DiscountBadge = styled.div`
    width: fit-content;

    padding: 6px 12px;

    border-radius: ${({ theme }) => theme.radius.md}px;

    background: rgba(95,163,106,.15);

    color: ${({ theme }) => theme.colors.success};

    font-weight: 600;

    font-size: .85rem;
`;

export const PixPrice = styled.div`
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.textSecondary};

    strong{
        color:${({theme})=>theme.colors.gold};
    }
`;

export const Installments = styled.div`
    font-size: .95rem;

    color: ${({theme})=>theme.colors.textSecondary};
`;

export const SizeSection = styled.div`
    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.md}px;

    padding:${({theme})=>theme.spacing.lg}px 0;

    border-bottom:1px solid ${({theme})=>theme.colors.divider};
`;

export const SectionTitle = styled.h3`
    margin:0;

    font-family:${({theme})=>theme.fonts.body};

    font-size:.9rem;

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
    min-width:70px;

    height:44px;

    border-radius:${({theme})=>theme.radius.md}px;

    border:1px solid
        ${({theme,$selected})=>
            $selected
                ?theme.colors.gold
                :theme.colors.border};

    background:
        ${({theme,$selected})=>
            $selected
                ?theme.colors.gold
                :theme.colors.surface};

    color:
        ${({theme,$selected})=>
            $selected
                ?theme.colors.black
                :theme.colors.text};

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
                ? ''
                :theme.colors.surfaceHover};


    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        min-width:60px;

        height:40px;

        font-size:14px;

    }
`;

export const QuantitySection = styled.div`
    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.md}px;

    padding:${({theme})=>theme.spacing.lg}px 0;

    border-bottom:1px solid ${({theme})=>theme.colors.divider};
`;

export const QuantitySelector = styled.div`
    display:flex;

    width:fit-content;

    overflow:hidden;

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.md}px;
`;

export const QuantityButton = styled.button`
    width:48px;

    height:48px;

    border:none;

    background:${({theme})=>theme.colors.surface};

    color:${({theme})=>theme.colors.text};

    cursor:pointer;

    transition:.2s;

    &:hover{

        background:${({theme})=>theme.colors.surfaceHover};

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        width:42px;

        height:42px;

    }
`;

export const QuantityValue = styled.div`
    width:60px;

    display:flex;

    align-items:center;

    justify-content:center;

    font-weight:600;

    color:${({theme})=>theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        width:50px;

        font-size:16px;

    }
`;

export const BuySection = styled.div`
    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.md}px;

    padding-top:${({theme})=>theme.spacing.lg}px;
`;

export const BuyNowButton = styled.button`
    height:58px;

    border:none;

    border-radius:${({theme})=>theme.radius.md}px;

    background:${({theme})=>theme.colors.gold};

    color:${({theme})=>theme.colors.black};

    font-weight:600;

    font-size: 1rem;

    letter-spacing: .4px;

    box-shadow: ${({theme})=>theme.shadows.md};

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

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        height:52px;

        font-size:15px;

    }
`;

export const AddToCartButton = styled.button`
    height:58px;

    border:1px solid ${({theme})=>theme.colors.gold};

    border-radius:${({theme})=>theme.radius.md}px;

    background:transparent;

    color:${({theme})=>theme.colors.gold};

    font-weight:600;

    font-size: 0.9rem;

    letter-spacing: .4px;

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

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        height:52px;

        font-size:13px;

    }
`;

export const FavoriteButton = styled.button`
    border:none;

    background:transparent;

    color:${({theme})=>theme.colors.textSecondary};

    cursor:pointer;

    transition:.25s;

    &:hover{

        color:${({theme})=>theme.colors.gold};

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:13px;

    }
`;
