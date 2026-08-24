import type {
  ChangeEvent
} from "react";

import {
  AddressGrid,
  Field,
  FieldError,
  FieldFull,
  FormSection,
  FormSectionTitle,
  Input,
  Label
} from "../../CheckoutStyles";

interface IdentificationData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
}

interface IdentificationErrors {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
}

interface IdentificationStepProps {
  data: IdentificationData;

  errors: IdentificationErrors;

  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function IdentificationStep({
  data,
  errors,
  onChange
}: IdentificationStepProps) {
  return (
    <FormSection>

      <FormSectionTitle>
        Dados de contato
      </FormSectionTitle>

      <AddressGrid>

        <FieldFull>

          <Label htmlFor="nome">
            Nome completo
          </Label>

          <Input
            id="nome"
            name="nome"
            type="text"
            value={data.nome}
            onChange={onChange}
            placeholder="Digite seu nome completo"
          />

          {errors.nome && (
            <FieldError>
              {errors.nome}
            </FieldError>
          )}

        </FieldFull>

        <Field>

          <Label htmlFor="email">
            E-mail
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            placeholder="seu@email.com"
          />

          {errors.email && (
            <FieldError>
              {errors.email}
            </FieldError>
          )}

        </Field>

        <Field>

          <Label htmlFor="telefone">
            Telefone
          </Label>

          <Input
            id="telefone"
            name="telefone"
            type="tel"
            value={data.telefone}
            onChange={onChange}
            placeholder="(00) 00000-0000"
          />

          {errors.telefone && (
            <FieldError>
              {errors.telefone}
            </FieldError>
          )}

        </Field>

        <Field>

          <Label htmlFor="cpf">
            CPF
          </Label>

          <Input
            id="cpf"
            name="cpf"
            type="text"
            value={data.cpf}
            onChange={onChange}
            placeholder="000.000.000-00"
          />

          {errors.cpf && (
            <FieldError>
              {errors.cpf}
            </FieldError>
          )}

        </Field>

      </AddressGrid>

    </FormSection>
  );
}