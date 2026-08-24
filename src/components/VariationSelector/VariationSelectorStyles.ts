import styled from "styled-components";

export const Container =
  styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    min-height: 54px;
    margin-bottom: 20px;
  `;

export const Group =
  styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;

export const GroupLabel =
  styled.span`
    color: ${({ theme }) =>
      theme.colors.textSecondary};

    font-family: ${({ theme }) =>
      theme.fonts.body};

    font-size: 0.78rem;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 0.8px;
  `;

export const Options =
  styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `;

interface OptionButtonProps {
  $selected: boolean;
}

export const OptionButton =
  styled.button<OptionButtonProps>`
    min-width: 44px;

    padding: 6px 11px;

    border: 1px solid
      ${({ theme, $selected }) =>
        $selected
          ? theme.colors.gold
          : theme.colors.border};

    border-radius: ${({ theme }) =>
      theme.radius.full}px;

    background: ${({ theme, $selected }) =>
      $selected
        ? theme.colors.gold
        : theme.colors.surface};

    color: ${({ theme, $selected }) =>
      $selected
        ? theme.colors.black
        : theme.colors.textSecondary};

    font-family: ${({ theme }) =>
      theme.fonts.body};

    font-size: 0.78rem;
    font-weight: 600;

    cursor: pointer;

    transition:
      color 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      border-color: ${({ theme }) =>
        theme.colors.gold};

      color: ${({ theme, $selected }) =>
        $selected
          ? theme.colors.black
          : theme.colors.gold};

      transform: translateY(-1px);
    }
  `;

export const SingleOption =
  styled.div`
    width: fit-content;

    min-height: 30px;

    display: flex;
    align-items: center;

    margin-bottom: 20px;
    padding: 6px 11px;

    border: 1px solid
      ${({ theme }) =>
        theme.colors.border};

    border-radius: ${({ theme }) =>
      theme.radius.full}px;

    color: ${({ theme }) =>
      theme.colors.textSecondary};

    font-family: ${({ theme }) =>
      theme.fonts.body};

    font-size: 0.78rem;
  `;