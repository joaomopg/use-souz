import {
    Container,
    Header,
    Title,
    Text
} from "./DescriptionStyles";

interface DescriptionProps {
    descricao: string;
}

export default function Description({ descricao }: DescriptionProps) {

    return (

        <Container>

            <Header>

                <Title>

                    Descrição

                </Title>

            </Header>

            <Text>

                {descricao}

            </Text>

        </Container>

    );

}

