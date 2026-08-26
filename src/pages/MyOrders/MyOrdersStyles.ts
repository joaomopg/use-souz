import styled from "styled-components";


export const Page = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    background:
        ${({ theme }) =>
            theme.colors.background};
`;


export const Container = styled.main`
    width: 100%;

    max-width: 1200px;

    margin: 0 auto;

    padding:
        120px 24px
        80px;

    box-sizing: border-box;

    flex: 1;
`;


export const HeaderSection = styled.div`
    margin-bottom: 36px;
`;


export const Title = styled.h1`
    margin: 0 0 8px;

    font-family:
        ${({ theme }) =>
            theme.fonts.heading};

    font-size: clamp(
        2rem,
        4vw,
        3rem
    );

    font-weight: 600;

    color:
        ${({ theme }) =>
            theme.colors.text};
`;


export const Subtitle = styled.p`
    max-width: 560px;

    margin: 0;

    font-family:
        ${({ theme }) =>
            theme.fonts.body};

    font-size: 0.95rem;

    line-height: 1.6;

    color:
        ${({ theme }) =>
            theme.colors.textSecondary};
`;


export const OrdersGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0, 1fr)
        );

    gap: 20px;


    @media (
        max-width: 900px
    ) {
        grid-template-columns:
            1fr;
    }
`;


export const OrderCard = styled.article`
    display: flex;
    flex-direction: column;

    gap: 20px;

    padding: 24px;

    border:
        1px solid
        ${({ theme }) =>
            theme.colors.border};

    border-radius:
        ${({ theme }) =>
            theme.radius.lg}px;

    background:
        ${({ theme }) =>
            theme.colors.surface};

    box-shadow:
        0 10px 30px
        rgba(0, 0, 0, 0.16);

    transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;


    &:hover {
        transform:
            translateY(-3px);

        border-color:
            rgba(
                189,
                159,
                103,
                0.45
            );

        box-shadow:
            0 16px 36px
            rgba(
                0,
                0,
                0,
                0.24
            );
    }
`;


export const OrderCardHeader = styled.div`
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 16px;

    padding-bottom: 18px;

    border-bottom:
        1px solid
        ${({ theme }) =>
            theme.colors.divider};


    div {
        min-width: 0;

        display: flex;
        flex-direction: column;

        gap: 5px;
    }


    span {
        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size: 0.72rem;

        text-transform:
            uppercase;

        letter-spacing:
            0.06em;

        color:
            ${({ theme }) =>
                theme.colors.textSecondary};
    }
`;


export const OrderCode = styled.strong`
    font-family:
        ${({ theme }) =>
            theme.fonts.body};

    font-size: 0.93rem;

    font-weight: 600;

    color:
        ${({ theme }) =>
            theme.colors.text};

    overflow-wrap:
        anywhere;
`;


interface StatusBadgeProps {
    $status: string;
}


export const StatusBadge =
    styled.span<StatusBadgeProps>`
        flex-shrink: 0;

        padding:
            6px 10px;

        border-radius:
            999px;

        border:
            1px solid
            ${({ $status }) => {

                if (
                    $status ===
                    "ENTREGUE"
                ) {
                    return "rgba(93, 190, 123, 0.35)";
                }

                if (
                    $status ===
                    "CANCELADO"
                ) {
                    return "rgba(220, 90, 90, 0.35)";
                }

                if (
                    $status ===
                    "ENVIADO"
                ) {
                    return "rgba(90, 150, 220, 0.35)";
                }

                return "rgba(189, 159, 103, 0.35)";
            }};

        background:
            ${({ $status }) => {

                if (
                    $status ===
                    "ENTREGUE"
                ) {
                    return "rgba(93, 190, 123, 0.08)";
                }

                if (
                    $status ===
                    "CANCELADO"
                ) {
                    return "rgba(220, 90, 90, 0.08)";
                }

                if (
                    $status ===
                    "ENVIADO"
                ) {
                    return "rgba(90, 150, 220, 0.08)";
                }

                return "rgba(189, 159, 103, 0.08)";
            }};

        color:
            ${({ $status }) => {

                if (
                    $status ===
                    "ENTREGUE"
                ) {
                    return "#7ed49a";
                }

                if (
                    $status ===
                    "CANCELADO"
                ) {
                    return "#ef8d8d";
                }

                if (
                    $status ===
                    "ENVIADO"
                ) {
                    return "#8ebbea";
                }

                return "#d1b16e";
            }};

        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size:
            0.68rem;

        font-weight:
            700;

        text-transform:
            uppercase;

        letter-spacing:
            0.04em;
    `;


export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 11px;
`;


export const InfoRow = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 16px;


    span {
        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size: 0.82rem;

        color:
            ${({ theme }) =>
                theme.colors.textSecondary};
    }


    strong {
        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size: 0.84rem;

        font-weight: 500;

        color:
            ${({ theme }) =>
                theme.colors.text};

        text-align: right;
    }
`;


export const OrderTotal = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 16px;

    padding-top: 18px;

    border-top:
        1px solid
        ${({ theme }) =>
            theme.colors.divider};


    span {
        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size: 0.88rem;

        font-weight: 600;

        color:
            ${({ theme }) =>
                theme.colors.text};
    }


    strong {
        font-family:
            ${({ theme }) =>
                theme.fonts.heading};

        font-size: 1.25rem;

        font-weight: 700;

        color:
            ${({ theme }) =>
                theme.colors.gold};
    }
`;


export const ViewOrderButton = styled.button`
    width: 100%;

    height: 46px;

    border:
        1px solid
        ${({ theme }) =>
            theme.colors.gold};

    border-radius:
        ${({ theme }) =>
            theme.radius.md}px;

    background:
        transparent;

    color:
        ${({ theme }) =>
            theme.colors.gold};

    font-family:
        ${({ theme }) =>
            theme.fonts.body};

    font-size: 0.84rem;

    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;


    &:hover {
        background:
            ${({ theme }) =>
                theme.colors.gold};

        color: #171717;

        transform:
            translateY(-2px);

        box-shadow:
            0 8px 20px
            rgba(
                189,
                159,
                103,
                0.18
            );
    }


    &:active {
        transform:
            translateY(0);
    }
`;


export const EmptyState = styled.div`
    min-height: 360px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 12px;

    padding: 40px 24px;

    border:
        1px solid
        ${({ theme }) =>
            theme.colors.border};

    border-radius:
        ${({ theme }) =>
            theme.radius.lg}px;

    background:
        ${({ theme }) =>
            theme.colors.surface};

    text-align: center;


    ${ViewOrderButton} {
        max-width: 260px;

        margin-top: 12px;
    }
`;


export const EmptyTitle = styled.h2`
    margin: 0;

    font-family:
        ${({ theme }) =>
            theme.fonts.heading};

    font-size: 1.55rem;

    font-weight: 600;

    color:
        ${({ theme }) =>
            theme.colors.text};
`;


export const EmptyText = styled.p`
    max-width: 440px;

    margin: 0;

    font-family:
        ${({ theme }) =>
            theme.fonts.body};

    font-size: 0.9rem;

    line-height: 1.6;

    color:
        ${({ theme }) =>
            theme.colors.textSecondary};
`;


export const LoadingContainer = styled.div`
    min-height: 260px;

    display: flex;

    align-items: center;
    justify-content: center;

    font-family:
        ${({ theme }) =>
            theme.fonts.body};

    font-size: 0.9rem;

    color:
        ${({ theme }) =>
            theme.colors.textSecondary};
`;


export const ErrorContainer = styled.div`
    min-height: 260px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 32px;

    border:
        1px solid
        rgba(
            220,
            90,
            90,
            0.25
        );

    border-radius:
        ${({ theme }) =>
            theme.radius.lg}px;

    background:
        rgba(
            220,
            90,
            90,
            0.04
        );

    text-align: center;


    strong {
        font-family:
            ${({ theme }) =>
                theme.fonts.heading};

        font-size: 1.25rem;

        color: #ef8d8d;
    }


    span {
        font-family:
            ${({ theme }) =>
                theme.fonts.body};

        font-size: 0.86rem;

        color:
            ${({ theme }) =>
                theme.colors.textSecondary};
    }
`;