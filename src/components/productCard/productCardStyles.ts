import styled from "styled-components";

export const Card = styled.div`

  background: #000;
  box-shadow: 4px 6px 14px #bd9f6723;

  height: 100%;

  border-radius: 12px;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ProductImage = styled.img`
  width: 95%;
  height: 320px;

  object-fit: cover;

  display: block;
`;

export const BadgeContainer = styled.div`
  position: absolute;

  top: 12px;
  right: 12px;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Badge = styled.div`
  background: #c49d54;

  color: #000;

  font-size: 12px;
  font-weight: 600;

  padding: 6px 10px;

  border-radius: 4px;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const ProductName = styled.h3`
  color: white;

  font-size: 28px;
  font-weight: 700;
  min-height: 72px;

  line-height: 1.3;

  margin-bottom: 14px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
`;

export const SizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 16px;
`;

export const SizeBadge = styled.span`
  border: 1px solid white;

  color: white;

  border-radius: 999px;

  font-size: 12px;

  padding: 4px 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  margin-bottom: 6px;
`;

export const OldPrice = styled.span`
  color: #7d7d7d;

  text-decoration: line-through;

  font-size: 16px;
`;

export const CurrentPrice = styled.span`
  color: white;

  font-size: 34px;
  font-weight: 700;
`;

export const PixPrice = styled.p`
  color: white;

  font-size: 18px;

  margin-bottom: 6px;
`;

export const Installments = styled.p`
  color: white;

  font-size: 14px;

  margin-bottom: 18px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 52px;

  border: none;
  border-radius: 6px;

  background: #c49d54;

  color: white;

  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`;