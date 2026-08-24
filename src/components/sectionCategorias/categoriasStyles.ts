import styled from "styled-components";

export const CategoriasContainer = styled.section`
    width: min(
        1400px,
        calc(100% - 40px)
    );

    margin: 0 auto;

    padding:
        ${({ theme }) => theme.spacing.xxxl}px
        0;

    display: flex;
    flex-direction: column;

    gap: 28px;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        width: calc(100% - 24px);

        gap: 20px;
    }
`;

export const CategoriasCardsContainer = styled.div`
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 28px;

    width: 100%;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.laptop}px
    ) {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        grid-template-columns: 1fr;

        gap: 18px;
    }
`;

export const CategoriasCard = styled.article`
    position: relative;

    overflow: hidden;

    min-width: 0;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.lg}px;

    background:
        linear-gradient(
            180deg,
            rgba(27, 27, 30, 0.98) 0%,
            rgba(12, 12, 14, 1) 100%
        );

    box-shadow:
        ${({ theme }) => theme.shadows.sm};

    cursor: pointer;

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        /*
         * Antes estava -8px.
         * Diminuímos para evitar que o card
         * invada visualmente o título.
         */
        transform: translateY(-4px);

        border-color:
            ${({ theme }) => theme.colors.gold};

        box-shadow:
            0 16px 32px
            rgba(0, 0, 0, 0.4);
    }

    &:hover img {
        transform: scale(1.055);
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) => theme.colors.gold};

        outline-offset: 3px;
    }
`;

export const CardImageContainer = styled.div`
    width: 100%;

    aspect-ratio: 1 / 0.78;

    overflow: hidden;

    background:
        ${({ theme }) => theme.colors.surface};
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition:
        transform 0.45s ease;
`;

export const CardContent = styled.div`
    min-height: 92px;

    padding: 18px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    background:
        linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.surface},
            rgba(12, 12, 14, 0.98)
        );
`;

export const CardTextContainer = styled.div`
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 5px;
`;

export const CardTitle = styled.h3`
    margin: 0;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 1.25rem;
    font-weight: 600;

    color:
        ${({ theme }) => theme.colors.text};

    line-height: 1.2;
`;

export const CardSubtitle = styled.span`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.82rem;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const CardArrow = styled.span`
    flex-shrink: 0;

    color:
        ${({ theme }) => theme.colors.gold};

    font-size: 1.4rem;

    transition:
        transform 0.25s ease;

    ${CategoriasCard}:hover & {
        transform: translateX(4px);
    }
`;