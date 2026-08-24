import type {
    ChangeEvent
} from "react";

import {
    FormSection,
    FormSectionTitle,
    PaymentOption,
    PaymentOptions,
    RadioInput
} from "../../CheckoutStyles";

type PaymentMethod =
    | "pix"
    | "card";

interface CardData {
    numero: string;
    nome: string;
    validade: string;
    cvv: string;
}

interface PaymentStepProps {
    paymentMethod: PaymentMethod;

    setPaymentMethod:
        (method: PaymentMethod) => void;

    cardData: CardData;

    onCardChange: (
        event: ChangeEvent<HTMLInputElement>
    ) => void;
}

export default function PaymentStep({
    paymentMethod,
    setPaymentMethod,
    cardData,
    onCardChange
}: PaymentStepProps) {

    return (

        <FormSection>

            <FormSectionTitle>
                Forma de pagamento
            </FormSectionTitle>

            <PaymentOptions>

                <PaymentOption
                    $selected={
                        paymentMethod ===
                        "pix"
                    }

                    onClick={() =>
                        setPaymentMethod(
                            "pix"
                        )
                    }
                >

                    <RadioInput
                        type="radio"
                        name="payment"
                        value="pix"

                        checked={
                            paymentMethod ===
                            "pix"
                        }

                        onChange={() =>
                            setPaymentMethod(
                                "pix"
                            )
                        }
                    />

                    <div>

                        <strong>
                            PIX
                        </strong>

                        <span>
                            Pagamento rápido,
                            seguro e aprovado
                            em poucos instantes.
                        </span>

                    </div>

                </PaymentOption>

                <PaymentOption
                    $selected={
                        paymentMethod ===
                        "card"
                    }

                    onClick={() =>
                        setPaymentMethod(
                            "card"
                        )
                    }
                >

                    <RadioInput
                        type="radio"
                        name="payment"
                        value="card"

                        checked={
                            paymentMethod ===
                            "card"
                        }

                        onChange={() =>
                            setPaymentMethod(
                                "card"
                            )
                        }
                    />

                    <div>

                        <strong>
                            Cartão de crédito
                        </strong>

                        <span>
                            Pague com cartão
                            de crédito.
                        </span>

                    </div>

                </PaymentOption>

            </PaymentOptions>

            {paymentMethod === "pix" && (

                <div
                    style={{
                        marginTop: "20px"
                    }}
                >

                    <p>
                        Após confirmar o pedido,
                        o QR Code e o código PIX
                        serão gerados para
                        pagamento.
                    </p>

                </div>

            )}

            {paymentMethod === "card" && (

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(2, minmax(0, 1fr))",
                        gap: "16px",
                        marginTop: "20px"
                    }}
                >

                    <div
                        style={{
                            gridColumn: "1 / -1"
                        }}
                    >

                        <label
                            htmlFor="numeroCartao"
                        >
                            Número do cartão
                        </label>

                        <input
                            id="numeroCartao"
                            name="numero"
                            type="text"

                            value={
                                cardData.numero
                            }

                            onChange={
                                onCardChange
                            }

                            placeholder=
                                "0000 0000 0000 0000"
                        />

                    </div>

                    <div
                        style={{
                            gridColumn: "1 / -1"
                        }}
                    >

                        <label
                            htmlFor="nomeCartao"
                        >
                            Nome impresso no cartão
                        </label>

                        <input
                            id="nomeCartao"
                            name="nome"
                            type="text"

                            value={
                                cardData.nome
                            }

                            onChange={
                                onCardChange
                            }

                            placeholder=
                                "NOME COMO ESTÁ NO CARTÃO"
                        />

                    </div>

                    <div>

                        <label
                            htmlFor="validadeCartao"
                        >
                            Validade
                        </label>

                        <input
                            id="validadeCartao"
                            name="validade"
                            type="text"

                            value={
                                cardData.validade
                            }

                            onChange={
                                onCardChange
                            }

                            placeholder="MM/AA"
                        />

                    </div>

                    <div>

                        <label
                            htmlFor="cvvCartao"
                        >
                            CVV
                        </label>

                        <input
                            id="cvvCartao"
                            name="cvv"
                            type="text"

                            value={
                                cardData.cvv
                            }

                            onChange={
                                onCardChange
                            }

                            placeholder="123"
                        />

                    </div>

                </div>

            )}

        </FormSection>

    );

}