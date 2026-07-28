import { BsTruck } from "react-icons/bs";

import {
    Container,
    Header,
    IconContainer,
    Title,
    Description,
    CepContainer,
    CepInput,
    CalculateButton,
    Benefits,
    BenefitItem
} from "./ShippingCardStyles";

export default function ShippingCard() {

    return (

        <Container>

            <Header>

                <IconContainer>

                    <BsTruck />

                </IconContainer>

                <div>

                    <Title>

                        Entrega para todo o Brasil

                    </Title>

                    <Description>

                        Informe seu CEP para consultar prazo e valor do frete.

                    </Description>

                </div>

            </Header>

            <CepContainer>

                <CepInput
                    placeholder="Digite seu CEP"
                />

                <CalculateButton>

                    Calcular

                </CalculateButton>

            </CepContainer>

            <Benefits>

                <BenefitItem>

                    ✓ Envio rápido

                </BenefitItem>

                <BenefitItem>

                    ✓ Seguro incluso

                </BenefitItem>

                <BenefitItem>

                    ✓ Código de rastreamento

                </BenefitItem>

            </Benefits>

        </Container>

    );

}

