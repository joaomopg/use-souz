import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background:
    ${({ theme }) =>
      theme.colors.background};
`;

export const Body = styled.main`
  width: 100%;

  padding-top: 60px;

  background:
    ${({ theme }) =>
      theme.colors.background};
`;

export const Section = styled.section`
  width: min(
    1400px,
    calc(100% - 40px)
  );

  margin: 0 auto;

  padding:
    ${({ theme }) =>
      theme.spacing.xxxl}px
    0;

  @media (
    max-width:
      ${({ theme }) =>
        theme.breakpoints.mobile}px
  ) {
    width: calc(100% - 24px);

    padding:
      ${({ theme }) =>
        theme.spacing.xxl}px
      0;
  }
`;

export const SectionContent =
  styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
  `;

export const SectionHeader =
  styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap:
      ${({ theme }) =>
        theme.spacing.lg}px;

    margin-bottom:
      ${({ theme }) =>
        theme.spacing.xl}px;
  `;

export const TextContainer =
  styled.h2`
    margin: 0;

    font-family:
      ${({ theme }) =>
        theme.fonts.heading};

    font-size:
      clamp(
        1.7rem,
        3vw,
        2.3rem
      );

    font-weight: 600;

    line-height: 1;

    color:
      ${({ theme }) =>
        theme.colors.text};
  `;

export const ViewAllButton =
  styled.button`
    flex-shrink: 0;

    padding: 8px 0;

    border: none;

    background: transparent;

    font-family:
      ${({ theme }) =>
        theme.fonts.body};

    font-size: 0.9rem;
    font-weight: 600;

    color:
      ${({ theme }) =>
        theme.colors.gold};

    cursor: pointer;

    transition:
      opacity 0.2s ease,
      transform 0.2s ease;

    &:hover {
      opacity: 0.8;

      transform:
        translateX(3px);
    }
  `;

export const LoadingContainer =
  styled.div`
    width: 100%;
    min-height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;
  `;

export const EmptyMessage =
  styled.p`
    margin: 0;

    font-family:
      ${({ theme }) =>
        theme.fonts.body};

    color:
      ${({ theme }) =>
        theme.colors.textSecondary};
  `;

export const InstitutionalSection =
  styled.section`
    width: min(
      1400px,
      calc(100% - 40px)
    );

    margin: 0 auto;

    padding:
      ${({ theme }) =>
        theme.spacing.xxxl}px
      0;

    @media (
      max-width:
        ${({ theme }) =>
          theme.breakpoints.mobile}px
    ) {
      width: calc(100% - 24px);
    }
  `;

export const UseSouzContainer =
  styled.div`
    width: 100%;

    overflow: hidden;

    border-radius:
      ${({ theme }) =>
        theme.radius.xl}px;
  `;

export const WhatsAppContainer =
  styled.div`
    width: 100%;

    overflow: hidden;

    border: 1px solid
      ${({ theme }) =>
        theme.colors.gold};

    border-radius:
      ${({ theme }) =>
        theme.radius.xl}px;

    box-shadow:
      0 0 25px
      rgba(196, 157, 84, 0.18);

    img {
      width: 100%;

      display: block;

      object-fit: cover;
    }
  `;