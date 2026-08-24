import {
    ConfirmationSectionHeader,
    EditButton,
    FormSection,
    FormSectionTitle
} from "../../CheckoutStyles";

import type {
    ShippingOption
} from "../../../../services/shipping.service";

interface IdentificationData {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
}

interface DeliveryData {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    observacoes: string;
}

type PaymentMethod =
    | "pix"
    | "card";

interface ConfirmationStepProps {
    identificationData:
    IdentificationData;

    deliveryData:
    DeliveryData;

    paymentMethod:
    PaymentMethod;

    selectedShipping:
    ShippingOption;

    onEditIdentification:
    () => void;

    onEditDelivery:
    () => void;

    onEditShipping:
    () => void;

    onEditPayment:
    () => void;
}

export default function ConfirmationStep({
    identificationData,
    deliveryData,
    paymentMethod,
    selectedShipping,
    onEditIdentification,
    onEditDelivery,
    onEditShipping,
    onEditPayment
}: ConfirmationStepProps) {

    return (
        <>
            <FormSection>

                <ConfirmationSectionHeader>

                    <FormSectionTitle>
                        Dados pessoais
                    </FormSectionTitle>

                    <EditButton
                        type="button"
                        onClick={
                            onEditIdentification
                        }
                    >
                        Editar
                    </EditButton>

                </ConfirmationSectionHeader>

                <div>

                    <strong>
                        {
                            identificationData.nome
                        }
                    </strong>

                    <p>
                        {
                            identificationData.email
                        }
                    </p>

                    <p>
                        {
                            identificationData.telefone
                        }
                    </p>

                    <p>
                        CPF:{" "}
                        {
                            identificationData.cpf
                        }
                    </p>

                </div>

            </FormSection>

            <FormSection>

                <ConfirmationSectionHeader>

                    <FormSectionTitle>
                        Endereço de entrega
                    </FormSectionTitle>

                    <EditButton
                        type="button"
                        onClick={
                            onEditDelivery
                        }
                    >
                        Editar
                    </EditButton>

                </ConfirmationSectionHeader>

                <div>

                    <strong>
                        {
                            deliveryData.rua
                        },{" "}
                        {
                            deliveryData.numero
                        }
                    </strong>

                    {deliveryData.complemento && (
                        <p>
                            {
                                deliveryData.complemento
                            }
                        </p>
                    )}

                    <p>
                        {
                            deliveryData.bairro
                        }
                    </p>

                    <p>
                        {
                            deliveryData.cidade
                        } -{" "}
                        {
                            deliveryData.estado
                        }
                    </p>

                    <p>
                        CEP:{" "}
                        {
                            deliveryData.cep
                        }
                    </p>

                </div>

            </FormSection>

            <FormSection>

                <ConfirmationSectionHeader>

                    <FormSectionTitle>
                        Forma de entrega
                    </FormSectionTitle>

                    <EditButton
                        type="button"
                        onClick={
                            onEditShipping
                        }
                    >
                        Editar
                    </EditButton>

                </ConfirmationSectionHeader>

                <div>

                    <strong>
                        {
                            selectedShipping.name
                        }
                    </strong>

                    <p>
                        Entrega em até{" "}
                        {
                            selectedShipping.deliveryTimeDays
                        }{" "}
                        dias úteis
                    </p>

                    <p>
                        {
                            selectedShipping.price
                                .toLocaleString(
                                    "pt-BR",
                                    {
                                        style: "currency",
                                        currency: "BRL"
                                    }
                                )
                        }
                    </p>

                </div>

            </FormSection>

            <FormSection>

                <ConfirmationSectionHeader>

                    <FormSectionTitle>
                        Forma de pagamento
                    </FormSectionTitle>

                    <EditButton
                        type="button"
                        onClick={
                            onEditPayment
                        }
                    >
                        Editar
                    </EditButton>

                </ConfirmationSectionHeader>

                <div>

                    <strong>
                        {
                            paymentMethod === "pix"
                                ? "PIX"
                                : "Cartão de crédito"
                        }
                    </strong>

                    <p>
                        {
                            paymentMethod === "pix"
                                ? "O código PIX será gerado após a confirmação do pedido."
                                : "O pagamento será realizado com cartão de crédito."
                        }
                    </p>

                </div>

            </FormSection>
        </>
    );

}