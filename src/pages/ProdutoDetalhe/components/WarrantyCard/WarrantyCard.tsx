import { RiShieldCheckFill } from "react-icons/ri";

import {
    Container,
    IconContainer,
    Title,
    Description,
    Benefits,
    BenefitItem
} from "./WarrantyCardStyles";

export default function WarrantyCard() {

    return (

        <Container>

            <IconContainer>

                <RiShieldCheckFill />

            </IconContainer>

            <Title>

                Garantia Vitalícia

            </Title>

            <Description>

                Todas as joias Use Souz possuem garantia permanente contra defeitos
                de fabricação, proporcionando segurança e tranquilidade em cada
                compra.

            </Description>

            <Benefits>

                <BenefitItem>

                    <RiShieldCheckFill />

                    Garantia Vitalícia

                </BenefitItem>

                <BenefitItem>

                    <RiShieldCheckFill />

                    Ouro 18K Certificado

                </BenefitItem>

                <BenefitItem>

                    <RiShieldCheckFill />

                    Acabamento Premium

                </BenefitItem>

            </Benefits>

        </Container>

    );

}
