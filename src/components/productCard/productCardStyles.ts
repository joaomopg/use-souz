import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;

  height: 100%;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.lg}px;

  overflow: hidden;

  transition: .3s ease;

  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover{
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;

  object-fit: cover;

  transition: .45s ease;

  ${Card}:hover &{
    transform: scale(1.05);
  }
`;

export const BadgeContainer = styled.div`
  position:absolute;

  top:16px;
  right:16px;

  display:flex;
  flex-direction:column;
  gap:8px;
`;

export const Badge = styled.span`
  padding:7px 12px;

  border-radius:${({theme})=>theme.radius.sm}px;

  background:${({theme})=>theme.colors.gold};

  color:${({theme})=>theme.colors.black};

  font-size:.75rem;
  font-weight:700;

  letter-spacing:.5px;
`;

export const Content = styled.div`
  flex:1;

  display:flex;
  flex-direction:column;

  padding:22px;
`;

export const ProductName = styled.h3`
  font-family:${({theme})=>theme.fonts.body};

  color:${({theme})=>theme.colors.white};

  font-size:20px;
  font-weight:700;

  line-height:1.2;

  min-height:70px;

  margin-bottom:18px;

  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;

  overflow:hidden;
`;

export const SizesContainer = styled.div`
  display:flex;
  flex-wrap:wrap;

  gap:8px;

  min-height:32px;

  margin-bottom:20px;
`;

export const SizeBadge = styled.span`
  padding:5px 10px;

  border-radius:${({theme})=>theme.radius.full}px;

  border:1px solid ${({theme})=>theme.colors.border};

  color:${({theme})=>theme.colors.textSecondary};

  font-size:.78rem;
`;

export const PriceContainer = styled.div`
  display:flex;
  flex-direction:column;

  gap:6px;

  margin-top:auto;
`;

export const OldPrice = styled.span`
  color:${({theme})=>theme.colors.textMuted};

  text-decoration:line-through;

  font-size:.95rem;

  min-height:20px;
`;

export const CurrentPrice = styled.span`
  font-family:${({theme})=>theme.fonts.heading};

  color:${({theme})=>theme.colors.white};

  font-size:2.4rem;
  font-weight:700;

  line-height:1;
`;

export const PixPrice = styled.span`
  color:${({theme})=>theme.colors.gold};

  font-size:1.05rem;
  font-weight:600;
`;

export const Installments = styled.span`
  color:${({theme})=>theme.colors.textSecondary};

  font-size:.92rem;

  margin-bottom:24px;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;

    gap: 12px;

    margin-top: 24px;
`;

export const BuyButton = styled.button`
  margin-top:auto;

  width:100%;
  height:54px;

  border:none;

  border-radius:${({theme})=>theme.radius.md}px;

  background:${({theme})=>theme.colors.gold};

  color:${({theme})=>theme.colors.white};

  font-family:${({theme})=>theme.fonts.body};

  font-size:1rem;
  font-weight:600;

  cursor:pointer;

  transition:.25s;

  &:hover{
    background:${({theme})=>theme.colors.goldHover};
    transform:translateY(-2px);
  }

  &:active{
    transform:translateY(0);
  }
`;

export const AddCartButton = styled.button`
    width:100%;
    height:54px;

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.md}px;

    background: linear-gradient(344deg, rgba(40,40,55,1) 0%, rgba(16,16,18,1) 50%);

    color:${({theme})=>theme.colors.white};

    font-size:1rem;
    font-weight:600;

    cursor:pointer;

    transition:0.25s;

    &:hover{
        color:${({theme})=>theme.colors.gold};
    }
`;

