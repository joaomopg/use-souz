import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import Header
    from "../../components/header/header";

import Infos
    from "../../components/sectionInfos/sectionInfos";

import BannersCarousel
    from "../../components/bannersCarousel/bannersCarousel";

import Categorias
    from "../../components/sectionCategorias/categorias";

import FadeSection
    from "../../components/ScrollRevealSections/ScrollRevealSections";

import UseSouzCard
    from "../../components/useSouzCard/useSouz";

import Carousel
    from "../../components/carousel/carousel";

import ProductCard
    from "../../components/productCard/productCard";

import Footer
    from "../../components/footer/footer";

import Loader
    from "../../components/Loader/Loader";

import {
    getProdutos
} from "../../services/produto.service";

import {
    transformarProduto
} from "../../utils/transformarProduto";

import type {
    Produto
} from "../../types/Produto";

import image1
    from "../../assets/images/bannernovo1.png";

import image2
    from "../../assets/images/bannernovo2.png";

import atendimentoWhatsApp
    from "../../assets/images/banner3.png";

import {
    Body,
    EmptyMessage,
    InstitutionalSection,
    LoadingContainer,
    Page,
    Section,
    SectionContent,
    SectionHeader,
    TextContainer,
    UseSouzContainer,
    ViewAllButton,
    WhatsAppContainer
} from "./homeStyles";


interface HomeProductGroup {
    slug: string;
    titulo: string;
    produtos: Produto[];
}


const categoriasHome = [
    {
        slug: "correntes",
        titulo: "Correntes"
    },
    {
        slug: "pulseiras",
        titulo: "Pulseiras"
    },
    {
        slug: "pingentes",
        titulo: "Pingentes"
    },
    {
        slug: "brincos",
        titulo: "Brincos"
    }
];


export default function Home() {

    const navigate =
        useNavigate();


    const [
        grupos,
        setGrupos
    ] = useState<HomeProductGroup[]>(
        []
    );


    const [
        loading,
        setLoading
    ] = useState(true);


    useEffect(() => {

        void carregarProdutos();

    }, []);


    async function carregarProdutos() {

        try {

            setLoading(
                true
            );


            const resultados =
                await Promise.all(

                    categoriasHome.map(
                        async (
                            categoria
                        ) => {

                            const produtosApi =
                                await getProdutos({
                                    category:
                                        categoria.slug
                                });


                            return {

                                slug:
                                    categoria.slug,

                                titulo:
                                    categoria.titulo,

                                produtos:
                                    produtosApi
                                        .slice(
                                            0,
                                            8
                                        )
                                        .map(
                                            transformarProduto
                                        )

                            };

                        }
                    )

                );


            setGrupos(
                resultados
            );

        } catch (error) {

            console.error(
                "Erro ao carregar produtos da Home:",
                error
            );

        } finally {

            setLoading(
                false
            );

        }

    }


    function abrirCategoria(
        slug: string
    ) {

        navigate(
            `/produtos?category=${slug}`
        );

    }


    return (

        <Page>

            <Header />


            <Body>

                <BannersCarousel
                    images={[
                        image1,
                        image2
                    ]}
                />


                <Infos />


                <Categorias />


                {loading ? (

                    <LoadingContainer>

                        <Loader />

                    </LoadingContainer>

                ) : (

                    grupos.map(
                        (
                            grupo,
                            index
                        ) => {

                            const conteudo = (

                                <Section>

                                    <SectionContent>

                                        <SectionHeader>

                                            <TextContainer>

                                                {
                                                    grupo.titulo
                                                }

                                            </TextContainer>


                                            <ViewAllButton
                                                type="button"

                                                onClick={() =>
                                                    abrirCategoria(
                                                        grupo.slug
                                                    )
                                                }
                                            >

                                                Ver todos →

                                            </ViewAllButton>

                                        </SectionHeader>


                                        {grupo.produtos
                                            .length ===
                                        0 ? (

                                            <EmptyMessage>

                                                Nenhum produto
                                                disponível.

                                            </EmptyMessage>

                                        ) : (

                                            <Carousel
                                                cardsPerView={
                                                    4
                                                }
                                                gap={
                                                    20
                                                }
                                            >

                                                {grupo.produtos.map(
                                                    (
                                                        product
                                                    ) => (

                                                        <ProductCard
                                                            key={
                                                                product.id
                                                            }

                                                            id={
                                                                product.id
                                                            }

                                                            slug={
                                                                product.slug
                                                            }

                                                            image={
                                                                product.images
                                                            }

                                                            name={
                                                                product.name
                                                            }

                                                            precoInicial={
                                                                product.preco
                                                            }

                                                            variacoes={
                                                                product.variacoes
                                                            }

                                                            freeShipping={
                                                                product
                                                                    .freeShipping
                                                            }
                                                        />

                                                    )
                                                )}

                                            </Carousel>

                                        )}

                                    </SectionContent>

                                </Section>

                            );


                            if (
                                index % 2 === 1
                            ) {

                                return (

                                    <FadeSection
                                        key={
                                            grupo.slug
                                        }
                                        background="black"
                                    >

                                        {
                                            conteudo
                                        }

                                    </FadeSection>

                                );

                            }


                            return (

                                <div
                                    key={
                                        grupo.slug
                                    }
                                >

                                    {
                                        conteudo
                                    }

                                </div>

                            );

                        }
                    )

                )}


                <FadeSection
                    background="black"
                >

                    <InstitutionalSection>

                        <UseSouzContainer>

                            <UseSouzCard />

                        </UseSouzContainer>

                    </InstitutionalSection>

                </FadeSection>


                <FadeSection
                    background="black"
                >

                    <InstitutionalSection>

                        <WhatsAppContainer>

                            <img
                                src={
                                    atendimentoWhatsApp
                                }

                                alt=
                                    "Atendimento pelo WhatsApp"
                            />

                        </WhatsAppContainer>

                    </InstitutionalSection>

                </FadeSection>

            </Body>


            <Footer />

        </Page>

    );

}