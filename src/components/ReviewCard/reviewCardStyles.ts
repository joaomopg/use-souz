import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  border-radius: 12px;
  background: rgb(40,40,55);
  background: linear-gradient(344deg, rgba(40,40,55,1) 0%, rgba(16,16,18,1) 50%);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  min-width: 48px;
  width: 48px;
  height: 48px;

  border-radius: 50%;

  background: #d9d9d9;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 700;

  color: white;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  color: white;
  font-size: 15px;
  font-weight: 700;
`;

export const ProductName = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Stars = styled.div`
  color: #f7b500;
  font-size: 24px;
  letter-spacing: 2px;
`;

export const ReviewTitle = styled.h3`
  color: white;
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`;

export const ReviewText = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
`;

export const ReviewImage = styled.img`
  width: 100%;
  height: 350px;

  object-fit: cover;
`;