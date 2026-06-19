import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  background: linear-gradient(344deg, rgba(40,40,55,1) 0%, rgba(16,16,18,1) 50%);

  padding: 60px 200px;
  margin-top: 20px;
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 50px;

  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  color: #c49d54;

  font-size: 32px;
  font-weight: 700;
`;

export const ContactContainer = styled.div`
  display: flex;

  gap: 60px;

  flex-wrap: wrap;
`;

export const ContactTitle = styled.h4`
  color: #c49d54;

  margin-bottom: 10px;

  font-size: 16px;
`;

export const ContactText = styled.p`
  color: white;

  margin-bottom: 5px;

  font-size: 14px;
`;

export const BottomSection = styled.div`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  flex-wrap: wrap;

  margin-bottom: 40px;
`;

export const InfoGroup = styled.div`
  min-width: 220px;
`;

export const GroupTitle = styled.h4`
  color: white;

  margin-bottom: 12px;

  font-size: 16px;

  font-weight: 600;
`;

export const IconsContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
`;

export const PlaceholderIcon = styled.div`
  min-width: 60px;
  height: 36px;

  padding: 0 12px;

  border-radius: 6px;

  background: #ffffff;

  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
  font-weight: 600;
`;

export const FooterCopyright = styled.div`
  text-align: center;

  color: rgba(255, 255, 255, 0.6);

  font-size: 13px;

  padding-top: 25px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;