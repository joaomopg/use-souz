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
        ${({ theme }) => theme.spacing.xl}px
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

export const CheckoutHeader = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;

    margin-bottom:
        ${({ theme }) => theme.spacing.xxxl}px;
`;

export const BackButton = styled.button`
    width: fit-content;

    padding: 0;

    border: none;

    background: transparent;

    color:
        ${({ theme }) => theme.colors.textSecondary};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;
    font-weight: 500;

    cursor: pointer;

    transition:
        color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        color:
            ${({ theme }) => theme.colors.gold};

        transform:
            translateX(-3px);
    }
`;

export const CheckoutTitle = styled.h1`
    margin: 6px 0 0;

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size:
        clamp(
            2rem,
            4vw,
            3rem
        );

    font-weight: 600;

    color:
        ${({ theme }) => theme.colors.text};

    line-height: 1.1;
`;

export const CheckoutSubtitle = styled.p`
    margin: 0;

    max-width: 640px;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.98rem;
    line-height: 1.6;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const CheckoutContent = styled.div`
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

export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;

    gap:
        ${({ theme }) => theme.spacing.xl}px;
`;

export const FormSection = styled.section`
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

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        padding:
            ${({ theme }) => theme.spacing.lg}px;
    }
`;

export const FormSectionTitle = styled.h2`
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
`;

export const AddressGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap:
        ${({ theme }) => theme.spacing.md}px
        ${({ theme }) => theme.spacing.lg}px;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        grid-template-columns: 1fr;
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    gap: 7px;
`;

export const FieldFull = styled(Field)`
    grid-column: 1 / -1;
`;

export const Label = styled.label`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.82rem;
    font-weight: 600;

    letter-spacing: 0.3px;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;

    padding: 0 14px;

    box-sizing: border-box;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    background:
        ${({ theme }) => theme.colors.background};

    color:
        ${({ theme }) => theme.colors.text};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.95rem;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    &::placeholder {
        color:
            ${({ theme }) => theme.colors.textMuted};
    }

    &:hover {
        border-color:
            ${({ theme }) => theme.colors.textMuted};
    }

    &:focus {
        border-color:
            ${({ theme }) => theme.colors.gold};

        box-shadow:
            0 0 0 3px
            rgba(196, 157, 84, 0.1);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 110px;

    resize: vertical;

    padding: 14px;

    box-sizing: border-box;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    background:
        ${({ theme }) => theme.colors.background};

    color:
        ${({ theme }) => theme.colors.text};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.95rem;
    line-height: 1.5;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color:
            ${({ theme }) => theme.colors.textMuted};
    }

    &:focus {
        border-color:
            ${({ theme }) => theme.colors.gold};

        box-shadow:
            0 0 0 3px
            rgba(196, 157, 84, 0.1);
    }
`;

export const PaymentOptions = styled.div`
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap:
        ${({ theme }) => theme.spacing.md}px;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        grid-template-columns: 1fr;
    }
`;

interface PaymentOptionProps {
    $selected: boolean;
}

export const PaymentOption = styled.label<PaymentOptionProps>`
    display: flex;
    align-items: flex-start;

    gap: 12px;

    padding: 16px;

    border: 1px solid
        ${({ theme, $selected }) =>
            $selected
                ? theme.colors.gold
                : theme.colors.border};

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    background:
        ${({ $selected }) =>
            $selected
                ? "rgba(196, 157, 84, 0.08)"
                : "transparent"};

    cursor: pointer;

    transition:
        border-color 0.2s ease,
        background 0.2s ease,
        transform 0.2s ease;

    &:hover {
        border-color:
            ${({ theme }) => theme.colors.gold};

        transform:
            translateY(-2px);
    }

    div {
        display: flex;
        flex-direction: column;

        gap: 4px;
    }

    strong {
        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.95rem;

        color:
            ${({ theme }) => theme.colors.text};
    }

    span {
        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.82rem;
        line-height: 1.4;

        color:
            ${({ theme }) => theme.colors.textSecondary};
    }
`;

export const RadioInput = styled.input`
    margin-top: 3px;

    accent-color:
        ${({ theme }) => theme.colors.gold};

    cursor: pointer;
`;

export const SummaryColumn = styled.aside`
    position: sticky;
    top: 95px;

    display: flex;
    flex-direction: column;

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

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.tablet}px
    ) {
        position: static;
    }

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        padding:
            ${({ theme }) => theme.spacing.lg}px;
    }
`;

export const SummaryTitle = styled.h2`
    margin:
        0
        0
        ${({ theme }) => theme.spacing.lg}px;

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size: 1.45rem;
    font-weight: 600;

    color:
        ${({ theme }) => theme.colors.text};
`;

export const OrderItems = styled.div`
    display: flex;
    flex-direction: column;

    gap:
        ${({ theme }) => theme.spacing.md}px;

    max-height: 420px;

    overflow-y: auto;

    padding-right: 4px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 999px;

        background:
            ${({ theme }) => theme.colors.border};
    }
`;

export const OrderItem = styled.div`
    display: flex;

    gap: 12px;

    padding-bottom:
        ${({ theme }) => theme.spacing.md}px;

    border-bottom: 1px solid
        ${({ theme }) => theme.colors.divider};

    &:last-child {
        border-bottom: none;

        padding-bottom: 0;
    }
`;

export const OrderItemImage = styled.div`
    width: 78px;
    height: 78px;

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

    gap: 12px;
`;

export const OrderItemInfo = styled.div`
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 4px;
`;

export const OrderItemName = styled.strong`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.92rem;
    font-weight: 600;

    line-height: 1.3;

    color:
        ${({ theme }) => theme.colors.text};
`;

export const OrderItemVariation = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 3px;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.76rem;
    line-height: 1.4;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const OrderItemQuantity = styled.span`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.75rem;

    color:
        ${({ theme }) => theme.colors.textMuted};
`;

export const OrderItemPrice = styled.strong`
    flex-shrink: 0;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;

    color: #f2f2f2;
`;

export const SummaryDivider = styled.div`
    width: 100%;
    height: 1px;

    margin:
        ${({ theme }) => theme.spacing.lg}px
        0;

    background:
        ${({ theme }) => theme.colors.divider};
`;

export const SummaryLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    margin-bottom: 10px;

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

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size: 1.2rem;
    font-weight: 600;

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

    button {
        width: 100%;
        height: 52px;

        border: none;

        border-radius:
            ${({ theme }) => theme.radius.md}px;

        background:
            ${({ theme }) => theme.colors.gold};

        color:
            ${({ theme }) => theme.colors.black};

        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.95rem;
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
    }

    small {
        text-align: center;

        font-family:
            ${({ theme }) => theme.fonts.body};

        font-size: 0.72rem;
        line-height: 1.45;

        color:
            ${({ theme }) => theme.colors.textMuted};
    }
`;

export const EmptyCart = styled.div`
    min-height: 520px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 40px 20px;
`;

export const EmptyCartTitle = styled.h2`
    margin: 0 0 10px;

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size: 1.8rem;
    font-weight: 600;

    color:
        ${({ theme }) => theme.colors.text};
`;

export const EmptyCartText = styled.p`
    max-width: 420px;

    margin: 0 0 24px;

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.95rem;
    line-height: 1.6;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const EmptyCartButton = styled.button`
    min-width: 200px;
    height: 48px;

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
`;

export const FieldError = styled.span`
  margin-top: 2px;

  font-family:
    ${({ theme }) =>
      theme.fonts.body};

  font-size: 0.76rem;

  color: #e57373;
`;

export const ShippingActions = styled.div`
    display: flex;
    flex-direction: column;

    gap:
        ${({ theme }) => theme.spacing.md}px;
`;

export const CalculateShippingButton = styled.button`
    width: fit-content;
    min-width: 180px;

    height: 46px;

    padding: 0 18px;

    border: 1px solid
        ${({ theme }) => theme.colors.gold};

    border-radius:
        ${({ theme }) => theme.radius.md}px;

    background: transparent;

    color:
        ${({ theme }) => theme.colors.gold};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.9rem;
    font-weight: 600;

    cursor: pointer;

    transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease,
        opacity 0.2s ease;

    &:hover:not(:disabled) {
        background:
            ${({ theme }) => theme.colors.gold};

        color:
            ${({ theme }) => theme.colors.black};

        transform: translateY(-2px);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const ShippingOptions = styled.div`
    display: flex;
    flex-direction: column;

    gap:
        ${({ theme }) => theme.spacing.md}px;

    margin-top:
        ${({ theme }) => theme.spacing.sm}px;
`;

interface ShippingOptionCardProps {
    $selected: boolean;
}

export const ShippingOptionCard =
    styled.label<ShippingOptionCardProps>`
        width: 100%;

        display: flex;
        align-items: center;

        gap:
            ${({ theme }) => theme.spacing.md}px;

        padding:
            ${({ theme }) => theme.spacing.lg}px;

        box-sizing: border-box;

        border: 1px solid
            ${({ theme, $selected }) =>
                $selected
                    ? theme.colors.gold
                    : theme.colors.border};

        border-radius:
            ${({ theme }) => theme.radius.md}px;

        background:
            ${({ $selected }) =>
                $selected
                    ? "rgba(196, 157, 84, 0.08)"
                    : "transparent"};

        cursor: pointer;

        transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;

        &:hover {
            border-color:
                ${({ theme }) => theme.colors.gold};

            transform:
                translateY(-2px);

            box-shadow:
                ${({ theme }) => theme.shadows.sm};
        }
    `;

export const ShippingRadio = styled.input`
    flex-shrink: 0;

    width: 18px;
    height: 18px;

    accent-color:
        ${({ theme }) => theme.colors.gold};

    cursor: pointer;
`;

export const ShippingOptionContent = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap:
        ${({ theme }) => theme.spacing.lg}px;

    @media (
        max-width:
        ${({ theme }) => theme.breakpoints.mobile}px
    ) {
        align-items: flex-start;
        flex-direction: column;

        gap:
            ${({ theme }) => theme.spacing.sm}px;
    }
`;

export const ShippingOptionInfo = styled.div`
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 4px;
`;

export const ShippingOptionName = styled.strong`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.95rem;
    font-weight: 600;

    color:
        ${({ theme }) => theme.colors.text};
`;

export const ShippingOptionDelivery = styled.span`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.8rem;

    color:
        ${({ theme }) => theme.colors.textSecondary};
`;

export const ShippingOptionPrice = styled.strong`
    flex-shrink: 0;

    font-family:
        ${({ theme }) => theme.fonts.heading};

    font-size: 1rem;

    color:
        ${({ theme }) => theme.colors.gold};
`;

export const EditButton = styled.button`
    width: fit-content;

    padding: 0;

    border: none;

    background: transparent;

    color:
        ${({ theme }) => theme.colors.gold};

    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.82rem;
    font-weight: 600;

    cursor: pointer;

    transition:
        color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        color:
            ${({ theme }) => theme.colors.goldHover};

        transform:
            translateX(2px);
    }
`;

export const ConfirmationSectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap:
        ${({ theme }) => theme.spacing.md}px;

    margin-bottom:
        ${({ theme }) => theme.spacing.lg}px;
`;

export const ConfirmationContent = styled.div`
    display: flex;
    flex-direction: column;

    gap:
        ${({ theme }) => theme.spacing.sm}px;
`;

export const ConfirmationItem = styled.div`
    display: flex;
    flex-direction: column;

    gap: 3px;
`;

export const ConfirmationLabel = styled.span`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.72rem;

    text-transform: uppercase;

    letter-spacing: 0.04em;

    color:
        ${({ theme }) => theme.colors.textMuted};
`;

export const ConfirmationValue = styled.strong`
    font-family:
        ${({ theme }) => theme.fonts.body};

    font-size: 0.92rem;

    font-weight: 600;

    line-height: 1.4;

    color:
        ${({ theme }) => theme.colors.text};
`;