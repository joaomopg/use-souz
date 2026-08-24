import ProductCard from "../../components/productCard/productCard";

import {
    Container,
    Content,
    Sidebar,
    MainContent,
    ProductsGrid,
    Hero,
    Breadcrumb,
    HeroTitle,
    HeroDescription,
    SidebarTitle,
    FilterGroup,
    FilterTitle,
    FilterOption,
    RadioOption,
    ClearFiltersButton,
    ErrorContainer
} from "./catalogoStyles";

import Header from "../../components/header/header";

import {
    useEffect,
    useMemo,
    useState
} from "react";

import type {
    Produto
} from "../../types/Produto";

import {
    getProdutos
} from "../../services/produto.service";

import {
    getCategorias
} from "../../services/categoria.service";

import type {
    Categoria
} from "../../types/Categoria";

import type {
    ProdutoApi
} from "../../types/ProdutoApi";

import {
    montarUrlImagem
} from "../../services/api";

import {
    HiAdjustmentsHorizontal
} from "react-icons/hi2";

import {
    FiRotateCcw
} from "react-icons/fi";

import {
    useSearchParams
} from "react-router-dom";

import Loader from "../../components/Loader/Loader";

type Ordenacao =
    | ""
    | "menor-preco"
    | "maior-preco";

function transformarProduto(
    produto: ProdutoApi
): Produto {
    const imagem =
        montarUrlImagem(
            produto.imagemPrincipal?.url
        );

    const precoInicial =
        produto.precoInicial === null
            ? null
            : Number(
                produto.precoInicial
            );

    return {
        id: produto.id,

        slug: produto.slug,

        images:
            imagem ? [imagem] : [],

        name: produto.nome,

        preco: precoInicial,

        oldPrice: "",

        currentPrice:
            precoInicial === null
                ? "Preço indisponível"
                : new Intl.NumberFormat(
                    "pt-BR",
                    {
                        style: "currency",
                        currency: "BRL"
                    }
                ).format(
                    precoInicial
                ),

        pixPrice: "",

        installments:
            "Consulte os preços por quantidade",

        discount: "",

        freeShipping: false,

        sizes: [],

        description: "",

        categoria:
            produto.categoria,

        quantidadeVariacoes:
            produto.quantidadeVariacoes,

        variacoes:
            produto.variacoes.map(
                (variacao) => ({
                    id: variacao.id,

                    sku: variacao.sku,

                    atributos:
                        variacao.atributos,

                    preco:
                        variacao.preco === null
                            ? null
                            : Number(
                                variacao.preco
                            ),

                    precos:
                        variacao.precos.map(
                            (preco) => ({
                                quantidade:
                                    Number(
                                        preco.quantidade
                                    ),

                                precoTotal:
                                    Number(
                                        preco.precoTotal
                                    )
                            })
                        )
                })
            )
    };
}

export default function Catalogo() {
    const [
        products,
        setProducts
    ] = useState<Produto[]>([]);

    const [
        searchParams,
        setSearchParams
    ] = useSearchParams();

    const categoriaDaUrl =
        searchParams.get("category") ?? "";

    const [
        categoriaSelecionada,
        setCategoriaSelecionada
    ] = useState(
        categoriaDaUrl
    );

    const [
        ordenacao,
        setOrdenacao
    ] = useState<Ordenacao>("");

    const [
        categorias,
        setCategorias
    ] = useState<Categoria[]>([]);

    const [
        loading,
        setLoading
    ] = useState(false);

    const [
        error,
        setError
    ] = useState("");

    useEffect(() => {
        void buscarProdutos();
    }, [categoriaSelecionada]);

    useEffect(() => {
        void buscarCategorias();
    }, []);

    useEffect(() => {
        const categoria =
            searchParams.get(
                "category"
            ) ?? "";

        setCategoriaSelecionada(
            categoria
        );
    }, [searchParams]);

    function selecionarCategoria(
        slug: string
    ) {
        const novaCategoria =
            categoriaSelecionada ===
                slug
                ? ""
                : slug;

        setCategoriaSelecionada(
            novaCategoria
        );

        const novosParametros =
            new URLSearchParams(
                searchParams
            );

        if (novaCategoria) {
            novosParametros.set(
                "category",
                novaCategoria
            );
        } else {
            novosParametros.delete(
                "category"
            );
        }

        setSearchParams(
            novosParametros
        );
    }

    async function buscarProdutos() {
        try {
            setLoading(true);
            setError("");

            const resposta =
                await getProdutos({
                    category:
                        categoriaSelecionada ||
                        undefined
                });

            setProducts(
                resposta.map(
                    transformarProduto
                )
            );
        } catch (requestError) {
            console.error(
                requestError
            );

            setError(
                "Não foi possível carregar os produtos."
            );
        } finally {
            setLoading(false);
        }
    }

    async function buscarCategorias() {
        try {
            const resposta =
                await getCategorias();

            setCategorias(resposta);
        } catch (requestError) {
            console.error(
                requestError
            );
        }
    }

    function limparFiltros() {
        setCategoriaSelecionada("");
        setOrdenacao("");

        setSearchParams({});
    }

    const produtosOrdenados =
        useMemo(() => {
            const copia =
                [...products];

            if (
                ordenacao ===
                "menor-preco"
            ) {
                copia.sort(
                    (produtoA, produtoB) => {
                        if (
                            produtoA.preco === null
                        ) {
                            return 1;
                        }

                        if (
                            produtoB.preco === null
                        ) {
                            return -1;
                        }

                        return (
                            produtoA.preco -
                            produtoB.preco
                        );
                    }
                );
            }

            if (
                ordenacao ===
                "maior-preco"
            ) {
                copia.sort(
                    (produtoA, produtoB) => {
                        if (
                            produtoA.preco === null
                        ) {
                            return 1;
                        }

                        if (
                            produtoB.preco === null
                        ) {
                            return -1;
                        }

                        return (
                            produtoB.preco -
                            produtoA.preco
                        );
                    }
                );
            }

            return copia;
        }, [
            products,
            ordenacao
        ]);

    return (
        <>
            <Header />

            <Hero>
                <Breadcrumb>
                    Home / Catálogo
                </Breadcrumb>

                <HeroTitle>
                    Catálogo
                </HeroTitle>

                <HeroDescription>
                    Descubra nossa coleção de joias
                    cuidadosamente selecionadas,
                    desenvolvidas para quem valoriza
                    elegância, qualidade e sofisticação
                    em cada detalhe.
                </HeroDescription>
            </Hero>

            <Container>
                <Content>
                    <Sidebar>
                        <SidebarTitle>
                            <HiAdjustmentsHorizontal />

                            Filtros
                        </SidebarTitle>

                        <FilterGroup>
                            <FilterTitle>
                                Categoria
                            </FilterTitle>

                            {categorias.map(
                                (categoria) => (
                                    <FilterOption
                                        key={categoria.id}
                                    >
                                        <input
                                            type="checkbox"

                                            checked={
                                                categoriaSelecionada ===
                                                categoria.slug
                                            }

                                            onChange={() =>
                                                selecionarCategoria(
                                                    categoria.slug
                                                )
                                            }
                                        />

                                        {categoria.nome}

                                        {` (${categoria.quantidadeProdutos})`}
                                    </FilterOption>
                                )
                            )}
                        </FilterGroup>

                        <FilterGroup>
                            <FilterTitle>
                                Preço
                            </FilterTitle>

                            <RadioOption>
                                <input
                                    type="radio"
                                    name="ordenacao"
                                    value=""

                                    checked={
                                        ordenacao === ""
                                    }

                                    onChange={() =>
                                        setOrdenacao("")
                                    }
                                />

                                Destaque
                            </RadioOption>

                            <RadioOption>
                                <input
                                    type="radio"
                                    name="ordenacao"
                                    value="menor-preco"

                                    checked={
                                        ordenacao ===
                                        "menor-preco"
                                    }

                                    onChange={() =>
                                        setOrdenacao(
                                            "menor-preco"
                                        )
                                    }
                                />

                                Menor preço
                            </RadioOption>

                            <RadioOption>
                                <input
                                    type="radio"
                                    name="ordenacao"
                                    value="maior-preco"

                                    checked={
                                        ordenacao ===
                                        "maior-preco"
                                    }

                                    onChange={() =>
                                        setOrdenacao(
                                            "maior-preco"
                                        )
                                    }
                                />

                                Maior preço
                            </RadioOption>
                        </FilterGroup>

                        <ClearFiltersButton
                            type="button"

                            disabled={
                                categoriaSelecionada ===
                                "" &&
                                ordenacao === ""
                            }

                            onClick={
                                limparFiltros
                            }
                        >
                            <FiRotateCcw />

                            Limpar filtros
                        </ClearFiltersButton>
                    </Sidebar>

                    <MainContent>
                        {loading ? (
                            <Loader />
                        ) : error ? (
                            <ErrorContainer>
                                <h2>
                                    Ocorreu um erro.
                                </h2>

                                <p>
                                    {error}
                                </p>
                            </ErrorContainer>
                        ) : (
                            <ProductsGrid>
                                {produtosOrdenados.map(
                                    (product) => (
                                        <ProductCard
                                            key={product.id}
                                            id={product.id}
                                            slug={product.slug}
                                            image={product.images}
                                            name={product.name}
                                            precoInicial={product.preco}
                                            variacoes={product.variacoes}
                                            freeShipping={product.freeShipping}
                                        />
                                    )
                                )}
                            </ProductsGrid>
                        )}
                    </MainContent>
                </Content>
            </Container>
        </>
    );
}