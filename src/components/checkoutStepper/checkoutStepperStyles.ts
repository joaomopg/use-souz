import styled from "styled-components";

export const StepperContainer = styled.div`
  width: min(
    1400px,
    calc(100% - 40px)
  );

  display: flex;
  align-items: flex-start;

  margin:
    0
    auto
    ${({ theme }) => theme.spacing.lg}px;

  padding:
    88px
    0
    ${({ theme }) => theme.spacing.sm}px;

  box-sizing: border-box;

  @media (
    max-width:
      ${({ theme }) => theme.breakpoints.mobile}px
  ) {
    width: calc(100% - 24px);

    overflow-x: auto;

    padding:
      78px
      0
      ${({ theme }) => theme.spacing.xs}px;

    margin-bottom:
      ${({ theme }) => theme.spacing.md}px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  align-items: flex-start;

  flex: 1;

  min-width: 0;

  &:last-child {
    flex: 0 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-width: 140px;
    flex: none;

    &:last-child {
      min-width: auto;
    }
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  flex-shrink: 0;

  position: relative;

  z-index: 2;
`;

interface StepCircleProps {
  $active: boolean;
  $completed: boolean;
}

export const StepCircle =
  styled.div<StepCircleProps>`
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    border: 1px solid
      ${({ theme, $active, $completed }) =>
        $active || $completed
          ? theme.colors.gold
          : theme.colors.border};

    background:
      ${({ theme, $active, $completed }) =>
        $active
          ? theme.colors.gold
          : $completed
            ? "rgba(196, 157, 84, 0.12)"
            : theme.colors.surface};

    color:
      ${({ theme, $active, $completed }) =>
        $active
          ? theme.colors.black
          : $completed
            ? theme.colors.gold
            : theme.colors.textMuted};

    box-shadow:
      ${({ $active }) =>
        $active
          ? "0 0 0 4px rgba(196, 157, 84, 0.10)"
          : "none"};

    transition:
      background 0.25s ease,
      border-color 0.25s ease,
      color 0.25s ease,
      box-shadow 0.25s ease,
      transform 0.25s ease;

    ${({ $active }) =>
      $active &&
      `
        transform: scale(1.04);
      `}
  `;

interface StepLabelProps {
  $active: boolean;
  $completed: boolean;
}

export const StepLabel =
  styled.span<StepLabelProps>`
    font-family:
      ${({ theme }) => theme.fonts.body};

    font-size: 0.78rem;

    font-weight:
      ${({ $active, $completed }) =>
        $active || $completed
          ? 600
          : 500};

    color:
      ${({ theme, $active, $completed }) =>
        $active
          ? theme.colors.gold
          : $completed
            ? theme.colors.text
            : theme.colors.textMuted};

    white-space: nowrap;

    transition:
      color 0.25s ease;
  `;

interface StepLineProps {
  $completed: boolean;
}

export const StepLine =
  styled.div<StepLineProps>`
    flex: 1;

    height: 1px;

    margin:
      22px
      ${({ theme }) => theme.spacing.md}px
      0;

    background:
      ${({ theme, $completed }) =>
        $completed
          ? theme.colors.gold
          : theme.colors.border};

    transition:
      background 0.3s ease;

    position: relative;

    &::after {
      content: "";

      position: absolute;

      top: -1px;
      left: 0;

      height: 3px;

      width:
        ${({ $completed }) =>
          $completed
            ? "100%"
            : "0%"};

      border-radius: 999px;

      background:
        ${({ theme }) => theme.colors.gold};

      transition:
        width 0.35s ease;
    }
  `;