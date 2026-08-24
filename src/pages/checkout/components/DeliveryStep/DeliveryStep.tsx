import type {
    ChangeEvent
} from "react";

import type {
    ShippingOption
} from "../../../../services/shipping.service";

import {
    AddressGrid,
    CalculateShippingButton,
    Field,
    FieldError,
    FieldFull,
    FormSection,
    FormSectionTitle,
    Input,
    Label,
    ShippingActions,
    ShippingOptionCard,
    ShippingOptionContent,
    ShippingOptionDelivery,
    ShippingOptionInfo,
    ShippingOptionName,
    ShippingOptionPrice,
    ShippingOptions,
    ShippingRadio,
    TextArea

} from "../../CheckoutStyles";

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

interface DeliveryErrors {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
}

interface DeliveryStepProps {
    data: DeliveryData;

    errors: DeliveryErrors;

    onChange: (
        event:
            ChangeEvent<
                HTMLInputElement |
                HTMLTextAreaElement
            >
    ) => void;

    onCepBlur: () => void;

    shippingOptions:
    ShippingOption[];

    selectedShipping:
    ShippingOption | null;

    isLoadingShipping:
    boolean;

    shippingError:
    string;

    onCalculateShipping:
    () => void;

    onSelectShipping:
    (
        option: ShippingOption
    ) => void;
}

function formatarDinheiro(
    valor: number
): string {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(valor);

}

export default function DeliveryStep({
    data,
    errors,
    onChange,
    onCepBlur,

    shippingOptions,
    selectedShipping,
    isLoadingShipping,
    shippingError,
    onCalculateShipping,
    onSelectShipping
}: DeliveryStepProps) {

    return (
        <>
            <FormSection>

                <FormSectionTitle>
                    Endereço de entrega
                </FormSectionTitle>

                <AddressGrid>

                    <Field>

                        <Label
                            htmlFor="cep"
                        >
                            CEP
                        </Label>

                        <Input
                            id="cep"
                            name="cep"
                            type="text"

                            value={
                                data.cep
                            }

                            onChange={
                                onChange
                            }

                            onBlur={
                                onCepBlur
                            }

                            placeholder="00000-000"

                            maxLength={9}
                        />

                        {errors.cep && (
                            <FieldError>
                                {errors.cep}
                            </FieldError>
                        )}

                    </Field>

                    <FieldFull>

                        <Label
                            htmlFor="rua"
                        >
                            Rua
                        </Label>

                        <Input
                            id="rua"
                            name="rua"
                            type="text"

                            value={
                                data.rua
                            }

                            onChange={
                                onChange
                            }

                            placeholder="Nome da rua"
                        />

                        {errors.rua && (
                            <FieldError>
                                {errors.rua}
                            </FieldError>
                        )}

                    </FieldFull>

                    <Field>

                        <Label
                            htmlFor="numero"
                        >
                            Número
                        </Label>

                        <Input
                            id="numero"
                            name="numero"
                            type="text"

                            value={
                                data.numero
                            }

                            onChange={
                                onChange
                            }

                            placeholder="123"
                        />

                        {errors.numero && (
                            <FieldError>
                                {errors.numero}
                            </FieldError>
                        )}

                    </Field>

                    <Field>

                        <Label
                            htmlFor="complemento"
                        >
                            Complemento
                        </Label>

                        <Input
                            id="complemento"
                            name="complemento"
                            type="text"

                            value={
                                data.complemento
                            }

                            onChange={
                                onChange
                            }

                            placeholder="Apartamento, bloco..."
                        />

                    </Field>

                    <FieldFull>

                        <Label
                            htmlFor="bairro"
                        >
                            Bairro
                        </Label>

                        <Input
                            id="bairro"
                            name="bairro"
                            type="text"

                            value={
                                data.bairro
                            }

                            onChange={
                                onChange
                            }

                            placeholder="Bairro"
                        />

                        {errors.bairro && (
                            <FieldError>
                                {errors.bairro}
                            </FieldError>
                        )}

                    </FieldFull>

                    <Field>

                        <Label
                            htmlFor="cidade"
                        >
                            Cidade
                        </Label>

                        <Input
                            id="cidade"
                            name="cidade"
                            type="text"

                            value={
                                data.cidade
                            }

                            onChange={
                                onChange
                            }

                            placeholder="Cidade"
                        />

                        {errors.cidade && (
                            <FieldError>
                                {errors.cidade}
                            </FieldError>
                        )}

                    </Field>

                    <Field>

                        <Label
                            htmlFor="estado"
                        >
                            Estado
                        </Label>

                        <Input
                            id="estado"
                            name="estado"
                            type="text"

                            value={
                                data.estado
                            }

                            onChange={
                                onChange
                            }

                            placeholder="UF"

                            maxLength={2}
                        />

                        {errors.estado && (
                            <FieldError>
                                {errors.estado}
                            </FieldError>
                        )}

                    </Field>

                    <FieldFull>

                        <Label
                            htmlFor="observacoes"
                        >
                            Observações
                        </Label>

                        <TextArea
                            id="observacoes"
                            name="observacoes"

                            value={
                                data.observacoes
                            }

                            onChange={
                                onChange
                            }

                            placeholder="Informações adicionais para a entrega..."
                        />

                    </FieldFull>

                </AddressGrid>

            </FormSection>

            <FormSection>

                <FormSectionTitle>
                    Forma de entrega
                </FormSectionTitle>

                <ShippingActions>

                    <CalculateShippingButton
                        type="button"
                        onClick={
                            onCalculateShipping
                        }
                        disabled={
                            isLoadingShipping
                        }
                    >
                        {
                            isLoadingShipping
                                ? "Calculando..."
                                : "Calcular frete"
                        }
                    </CalculateShippingButton>

                    {shippingError && (

                        <FieldError>
                            {shippingError}
                        </FieldError>

                    )}

                </ShippingActions>

                {shippingOptions.length > 0 && (

                    <ShippingOptions>

                        {shippingOptions.map(
                            (option) => {

                                const selected =
                                    selectedShipping?.id ===
                                    option.id;

                                return (

                                    <ShippingOptionCard
                                        key={
                                            option.id
                                        }
                                        $selected={
                                            selected
                                        }
                                    >

                                        <ShippingRadio
                                            type="radio"
                                            name="shipping"

                                            checked={
                                                selected
                                            }

                                            onChange={() =>
                                                onSelectShipping(
                                                    option
                                                )
                                            }
                                        />

                                        <ShippingOptionContent>

                                            <ShippingOptionInfo>

                                                <ShippingOptionName>
                                                    {
                                                        option.name
                                                    }
                                                </ShippingOptionName>

                                                <ShippingOptionDelivery>
                                                    Entrega em até{" "}
                                                    {
                                                        option.deliveryTimeDays
                                                    }{" "}
                                                    dias úteis
                                                </ShippingOptionDelivery>

                                            </ShippingOptionInfo>

                                            <ShippingOptionPrice>
                                                {
                                                    formatarDinheiro(
                                                        option.price
                                                    )
                                                }
                                            </ShippingOptionPrice>

                                        </ShippingOptionContent>

                                    </ShippingOptionCard>

                                );

                            }
                        )}

                    </ShippingOptions>

                )}

            </FormSection>
        </>
    );

}