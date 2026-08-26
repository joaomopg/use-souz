import {
    ConfirmationContent,
    ConfirmationItem,
    ConfirmationLabel,
    ConfirmationSectionHeader,
    ConfirmationValue,
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

                <ConfirmationContent>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Nome
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {identificationData.nome}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            E-mail
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {identificationData.email}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Telefone
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {identificationData.telefone}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            CPF
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {identificationData.cpf}
                        </ConfirmationValue>

                    </ConfirmationItem>

                </ConfirmationContent>

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

                <ConfirmationContent>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Endereço
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {deliveryData.rua},{" "}
                            {deliveryData.numero}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    {deliveryData.complemento && (

                        <ConfirmationItem>

                            <ConfirmationLabel>
                                Complemento
                            </ConfirmationLabel>

                            <ConfirmationValue>
                                {deliveryData.complemento}
                            </ConfirmationValue>

                        </ConfirmationItem>

                    )}

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Bairro
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {deliveryData.bairro}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Cidade
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {deliveryData.cidade} -{" "}
                            {deliveryData.estado}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            CEP
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {deliveryData.cep}
                        </ConfirmationValue>

                    </ConfirmationItem>

                </ConfirmationContent>

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

                <ConfirmationContent>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Modalidade
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {selectedShipping.name}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Prazo
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            Até{" "}
                            {selectedShipping.deliveryTimeDays}{" "}
                            dias úteis
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Valor
                        </ConfirmationLabel>

                        <ConfirmationValue>
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
                        </ConfirmationValue>

                    </ConfirmationItem>

                </ConfirmationContent>

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

                <ConfirmationContent>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Método
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {paymentMethod === "pix"
                                ? "PIX"
                                : "Cartão"}
                        </ConfirmationValue>

                    </ConfirmationItem>

                    <ConfirmationItem>

                        <ConfirmationLabel>
                            Informações
                        </ConfirmationLabel>

                        <ConfirmationValue>
                            {paymentMethod === "pix"
                                ? "O código PIX será gerado após a confirmação do pedido."
                                : "O pagamento será realizado com cartão."}
                        </ConfirmationValue>

                    </ConfirmationItem>

                </ConfirmationContent>

            </FormSection>
        </>
    );

}