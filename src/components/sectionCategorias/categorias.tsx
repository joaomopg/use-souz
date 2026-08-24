import {
    CardArrow,
    CardContent,
    CardImage,
    CardImageContainer,
    CardSubtitle,
    CardTextContainer,
    CardTitle,
    CategoriasCard,
    CategoriasCardsContainer,
    CategoriasContainer
} from "./categoriasStyles";

import image1 from "../../assets/images/pulseiras.jpg";
import image2 from "../../assets/images/pingentes.jpg";
import image3 from "../../assets/images/pingentes2.jpg";
import image4 from "../../assets/images/corrente2.jpg";

import {
    TextContainer
} from "../../pages/home/homeStyles";

import {
    useNavigate
} from "react-router-dom";

function Categorias() {

    const navigate =
        useNavigate();

    const categorias = [
        {
            nome: "Correntes",
            slug: "correntes",
            imagem: image4
        },
        {
            nome: "Pulseiras",
            slug: "pulseiras",
            imagem: image1
        },
        {
            nome: "Pingentes",
            slug: "pingentes",
            imagem: image2
        },
        {
            nome: "Brincos",
            slug: "brincos",
            imagem: image3
        }
    ];

    function abrirCategoria(
        slug: string
    ) {
        navigate(
            `/produtos?category=${slug}`
        );
    }

    return (
        <CategoriasContainer>

            <TextContainer>
                CATEGORIAS
            </TextContainer>

            <CategoriasCardsContainer>

                {categorias.map(
                    (categoria) => (

                        <CategoriasCard
                            key={categoria.slug}

                            tabIndex={0}

                            onClick={() =>
                                abrirCategoria(
                                    categoria.slug
                                )
                            }

                            onKeyDown={(event) => {

                                if (
                                    event.key === "Enter" ||
                                    event.key === " "
                                ) {
                                    abrirCategoria(
                                        categoria.slug
                                    );
                                }

                            }}
                        >

                            <CardImageContainer>

                                <CardImage
                                    src={categoria.imagem}
                                    alt={categoria.nome}
                                />

                            </CardImageContainer>

                            <CardContent>

                                <CardTextContainer>

                                    <CardTitle>
                                        {categoria.nome}
                                    </CardTitle>

                                    <CardSubtitle>
                                        Explorar coleção
                                    </CardSubtitle>

                                </CardTextContainer>

                                <CardArrow>
                                    →
                                </CardArrow>

                            </CardContent>

                        </CategoriasCard>

                    )
                )}

            </CategoriasCardsContainer>

        </CategoriasContainer>
    );
}

export default Categorias;