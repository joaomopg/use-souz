import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    background:
        ${({ theme }) => theme.colors.background};

    color:
        ${({ theme }) => theme.colors.text};
`;

export const Container = styled.main`
    width: min(
        1400px,
        calc(100% - 40px)
    );

    margin: 0 auto;

    padding:
        110px
        0
        ${({ theme }) => theme.spacing.xxxxl}px;

    flex: 1;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        width: calc(100% - 24px);

        padding-top: 90px;
    }
`;

export const HeaderSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    margin-bottom:
        ${({ theme }) => theme.spacing.xxxl}px;

    padding:
        ${({ theme }) => theme.spacing.xxxl}px
        ${({ theme }) => theme.spacing.lg}px;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.xl}px;

    background:
        linear-gradient(
            180deg,
            rgba(196, 157, 84, 0.06),
            ${({ theme }) => theme.colors.surface}
        );

    box-shadow:
        ${({ theme }) => theme.shadows.sm};
`;

export const SuccessIcon = styled.div`
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom:
        ${({ theme }) => theme.spacing.lg}px;

    border-radius: 50%;

    border: 1px solid
        ${({ theme }) => theme.colors.gold};

    background:
        rgba(196, 157, 84, 0.1);

    color:
        ${({ theme }) => theme.colors.gold};

    font-size: 2rem;
    font-weight: 700;

    box-shadow:
        0 0 0 6px
        rgba(196, 157, 84, 0.05);
`;

export const SuccessTitle = styled.h1`
    margin: 0;

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size:
        clamp(
            2rem,
            4vw,
            3rem
        );

    font-weight: 600;

    line-height: 1.1;

    color:
        ${({ theme }) => theme.colors.text};
`;

export const SuccessMessage = styled.p`
    max-width: 600px;

    margin:
        ${({ theme }) => theme.spacing.md}px
        0
        0;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.98rem;
    line-height: 1.6;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const OrderCode = styled.div`
    margin-top:
        ${({ theme }) => theme.spacing.lg}px;

    padding:
        10px 16px;

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    background:
        ${({ theme }) => theme.colors.background};

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;

    color:
        ${({ theme }) => theme.colors.textSecondary};

    strong {
        margin-left: 6px;

        color:
            ${({ theme }) => theme.colors.gold};
    }
`;

export const Content = styled.div`
    display: grid;

    grid-template-columns:
        minmax(0, 1.45fr)
        minmax(340px, 0.75fr);

    align-items: start;

    gap:
        ${({ theme }) => theme.spacing.xxxl}px;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.laptop}px
    ) {
        grid-template-columns:
            minmax(0, 1fr)
            minmax(320px, 0.75fr);

        gap:
            ${({ theme }) => theme.spacing.xl}px;
    }

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.tablet}px
    ) {
        grid-template-columns: 1fr;
    }
`;

export const InfoGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(
            3,
            minmax(0, 1fr)
        );

    gap:
        ${({ theme }) => theme.spacing.lg}px;

    margin-bottom:
        ${({ theme }) => theme.spacing.xl}px;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.laptop}px
    ) {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );
    }

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        grid-template-columns: 1fr;
    }
`;

export const InfoCard = styled.section`
    padding:
        ${({ theme }) => theme.spacing.lg}px;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.lg}px;

    background:
        ${({ theme }) => theme.colors.surface};

    box-shadow:
        ${({ theme }) => theme.shadows.sm};

    h3 {
        margin:
            0
            0
            ${({ theme }) => theme.spacing.md}px;

        font-family:
            ${({ theme }) => theme.fonts.heading};

        font-size: 1.05rem;
        font-weight: 600;

        color:
            ${({ theme }) => theme.colors.text};
    }
`;

export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4px;

    margin-bottom:
        ${({ theme }) => theme.spacing.md}px;

    &:last-child {
        margin-bottom: 0;
    }

    span {
        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.74rem;

        text-transform: uppercase;

        letter-spacing: 0.5px;

        color:
            ${({ theme }) => theme.colors.textMuted};
    }

    strong {
        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.9rem;
        font-weight: 600;

        line-height: 1.4;

        color:
            ${({ theme }) => theme.colors.text};
    }
`;

interface StatusBadgeProps {
    $status: string;
}

export const StatusBadge = styled.span<StatusBadgeProps>`
    width: fit-content;

    padding:
        6px
        10px;

    border-radius: 999px;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.72rem;

    font-weight: 700;

    letter-spacing: 0.4px;

    background:
        ${({ $status }) =>
            $status === "PAGO"
                ? "rgba(76, 175, 80, 0.12)"
                : $status === "FALHOU" ||
                  $status === "CANCELADO"
                    ? "rgba(229, 115, 115, 0.12)"
                    : "rgba(196, 157, 84, 0.10)"};

    color:
        ${({ theme, $status }) =>
            $status === "PAGO"
                ? theme.colors.success
                : $status === "FALHOU" ||
                  $status === "CANCELADO"
                    ? "#e57373"
                    : theme.colors.gold};

    border: 1px solid
        ${({ theme, $status }) =>
            $status === "PAGO"
                ? theme.colors.success
                : $status === "FALHOU" ||
                  $status === "CANCELADO"
                    ? "#e57373"
                    : theme.colors.gold};
`;

export const ItemsContainer = styled.section`
    padding:
        ${({ theme }) => theme.spacing.xl}px;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.xl}px;

    background:
        ${({ theme }) => theme.colors.surface};

    box-shadow:
        ${({ theme }) => theme.shadows.sm};

    h2 {
        margin:
            0
            0
            ${({ theme }) => theme.spacing.lg}px;

        font-family:
            ${({ theme }) => theme.fonts.heading};

        font-size: 1.35rem;
        font-weight: 600;

        color:
            ${({ theme }) => theme.colors.text};
    }
`;

export const OrderItem = styled.div`
    display: flex;

    gap:
        ${({ theme }) => theme.spacing.md}px;

    padding:
        ${({ theme }) => theme.spacing.md}px
        0;

    border-bottom: 1px solid
        ${({ theme }) => theme.colors.divider};

    &:first-of-type {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;

        border-bottom: none;
    }
`;

export const OrderItemImage = styled.div`
    width: 90px;
    height: 90px;

    flex-shrink: 0;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    background:
        ${({ theme }) => theme.colors.background};

    img {
        width: 100%;
        height: 100%;

        display: block;

        object-fit: cover;
    }

    span {
        padding: 6px;

        text-align: center;

        font-size: 0.7rem;

        color:
            ${({ theme }) => theme.colors.textMuted};
    }
`;

export const OrderItemContent = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    justify-content: space-between;

    gap:
        ${({ theme }) => theme.spacing.md}px;
`;

export const OrderItemInfo = styled.div`
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 5px;

    > span {
        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.78rem;

        color:
            ${({ theme }) => theme.colors.textMuted};
    }
`;

export const OrderItemName = styled.strong`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.98rem;

    font-weight: 600;

    line-height: 1.35;

    color:
        ${({ theme }) => theme.colors.text};
`;

export const OrderItemVariation = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 3px;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.78rem;

    line-height: 1.4;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const OrderItemPrice = styled.strong`
    flex-shrink: 0;

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size: 1rem;

    color:
        ${({ theme }) => theme.colors.gold};
`;

export const Summary = styled.aside`
    position: sticky;

    top: 95px;

    padding:
        ${({ theme }) => theme.spacing.xl}px;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.xl}px;

    background:
        ${({ theme }) => theme.colors.surface};

    box-shadow:
        ${({ theme }) => theme.shadows.sm};

    h2 {
        margin:
            0
            0
            ${({ theme }) => theme.spacing.lg}px;

        font-family:
            ${({ theme }) => theme.fonts.heading};

        font-size: 1.35rem;

        font-weight: 600;

        color:
            ${({ theme }) => theme.colors.text};
    }

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.tablet}px
    ) {
        position: static;
    }
`;

export const SummaryLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    margin-bottom: 12px;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;

    color:
        ${({ theme }) => theme.colors.textSecondary};

    strong {
        color:
            ${({ theme }) => theme.colors.text};

        font-weight: 600;
    }
`;

export const SummaryTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    margin-top:
        ${({ theme }) => theme.spacing.lg}px;

    padding-top:
        ${({ theme }) => theme.spacing.lg}px;

    border-top: 1px solid
        ${({ theme }) => theme.colors.divider};

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size: 1.1rem;

    color:
        ${({ theme }) => theme.colors.text};

    strong {
        font-size: 1.5rem;

        color:
            ${({ theme }) => theme.colors.gold};
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;

    margin-top:
        ${({ theme }) => theme.spacing.xl}px;
`;

export const PrimaryButton = styled.button`
    width: 100%;
    height: 50px;

    border: none;

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    background:
        ${({ theme }) => theme.colors.gold};

    color:
        ${({ theme }) => theme.colors.black};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;
    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        background:
            ${({ theme }) => theme.colors.goldHover};

        transform:
            translateY(-2px);

        box-shadow:
            ${({ theme }) => theme.shadows.md};
    }

    &:active {
        transform:
            translateY(0);
    }

    &:disabled {
        opacity: 0.5;

        cursor: not-allowed;

        transform: none;

        box-shadow: none;
    }
`;

export const SecondaryButton = styled.button`
    width: 100%;
    height: 50px;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    background: transparent;

    color:
        ${({ theme }) => theme.colors.textSecondary};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;
    font-weight: 600;

    cursor: pointer;

    transition:
        border-color 0.2s ease,
        color 0.2s ease,
        background 0.2s ease,
        transform 0.2s ease;

    &:hover {
        border-color:
            ${({ theme }) => theme.colors.gold};

        color:
            ${({ theme }) => theme.colors.gold};

        background:
            rgba(196, 157, 84, 0.05);

        transform:
            translateY(-2px);
    }

    &:active {
        transform:
            translateY(0);
    }
`;

export const ErrorContainer = styled.div`
    min-height: 520px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap:
        ${({ theme }) => theme.spacing.md}px;

    text-align: center;

    h2 {
        margin: 0;

        font-family:
            ${({ theme }) => theme.fonts.heading};

        font-size: 1.8rem;

        color:
            ${({ theme }) => theme.colors.text};
    }

    p {
        max-width: 440px;

        margin: 0;

        font-family:
            ${({ theme }) => theme.fonts.body};

        line-height: 1.6;

        color:
            ${({ theme }) => theme.colors.textSecondary};
    }

    button {
        min-width: 200px;
        height: 48px;

        margin-top:
            ${({ theme }) => theme.spacing.sm}px;

        padding: 0 22px;

        border: none;

        border-radius:
            ${({ theme }) => theme.radius.md}px;

        background:
            ${({ theme }) => theme.colors.gold};

        color:
            ${({ theme }) => theme.colors.black};

        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.9rem;

        font-weight: 700;

        cursor: pointer;

        transition:
            background 0.2s ease,
            transform 0.2s ease;

        &:hover {
            background:
                ${({ theme }) => theme.colors.goldHover};

            transform:
                translateY(-2px);
        }
    }
`;