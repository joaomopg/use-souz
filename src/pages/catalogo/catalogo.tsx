import ProductCard from "../../components/productCard/productCard";
import {
    Container,
    Content,
    Sidebar,
    MainContent,
    HeaderSection,
    ProductsGrid,
    Hero,
    Breadcrumb,
    HeroTitle,
    HeroDescription,
    SidebarTitle,
    FilterGroup,
    FilterTitle,
    FilterOption,
    ResultsContainer,
    ResultsTitle,
    ResultsText,
    SortContainer,
    SortLabel,
    SortSelect,
    RadioOption,
    ClearFiltersButton,
    ErrorContainer
} from "./catalogoStyles";

import Header from "../../components/header/header";
import { useEffect, useState } from 'react';
import type { Produto } from '../../types/Produto';
import { getProdutos } from "../../services/produto.service";
import { getCategorias } from "../../services/categoria.service";
import type { Categoria } from "../../types/Categoria";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FiRotateCcw } from "react-icons/fi";
import { useCart } from "../../contexts/shoppingCartContext";
import { produtoToCartItem } from "../../utils/cartMapper";
import Loader from "../../components/Loader/Loader";

export default function Catalogo() {

    const [products, setProducts] = useState<Produto[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [ordenacao, setOrdenacao] = useState('');
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { addItem } = useCart();

    useEffect(() => {
        buscarProdutos();
    }, [categoriaSelecionada, ordenacao]);

    useEffect(() => {
        buscarCategorias();
    }, []);

    async function buscarProdutos() {
        try {

            setLoading(true);

            setError("");

            const produtos = await getProdutos({
                categoria: categoriaSelecionada || undefined,
                ordenacao: ordenacao || undefined,
            });

            const produtosTransformados: Produto[] = produtos.map((produto: any) => ({
                id: produto.id,
                images: [`http://localhost:4000/uploads/${produto.url_imagem}`],
                name: produto.nome,
                preco: produto.preco,
                currentPrice: `R$ ${produto.preco}`,
                oldPrice: `R$ ${(produto.preco * 1.2).toFixed(2)}`,
                pixPrice: `R$ ${(produto.preco * 0.9).toFixed(2)}`,
                installments: '10x sem juros',
                discount: '0% OFF',
                freeShipping: false,
                sizes: [],
                description: 'Corrente de ouro 18 quilates'
            }));

            setProducts(produtosTransformados);

        } catch (error) {

            setError(
                "Não foi possível carregar os produtos."
            );
        
        } finally {
            setLoading(false);
        }

    }

    async function buscarCategorias() {
        try {
            const categorias = await getCategorias();
            
            setCategorias(categorias)

        } catch (error) {
            console.error(error);
        }
    }


    function limparFiltros(){

        setCategoriaSelecionada("");

        setOrdenacao("");

    }

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

                    Descubra nossa coleção de joias cuidadosamente selecionadas,
                    desenvolvidas para quem valoriza elegância, qualidade e
                    sofisticação em cada detalhe.

                </HeroDescription>

            </Hero>

            <Container>

                <Content>

                    <Sidebar>

                        <SidebarTitle>

                            <HiAdjustmentsHorizontal/>

                            Filtros

                        </SidebarTitle>

                        <FilterGroup>

                            <FilterTitle>

                                Categoria

                            </FilterTitle>

                            {categorias.map((categoria) => (

                                <FilterOption key={categoria.categoria}>

                                    <input
                                        type="checkbox"
                                        checked={categoriaSelecionada === categoria.categoria}
                                        onChange={() =>
                                            setCategoriaSelecionada(
                                                categoriaSelecionada === categoria.categoria
                                                    ? ""
                                                    : categoria.categoria
                                            )
                                        }
                                    />

                                    {categoria.categoria.charAt(0).toUpperCase() +
                                        categoria.categoria.slice(1)}

                                </FilterOption>

                            ))}

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
                                    checked={ordenacao === ""}
                                    onChange={(e)=>setOrdenacao(e.target.value)}
                                />

                                Destaque

                            </RadioOption>

                            <RadioOption>

                                <input
                                    type="radio"
                                    name="ordenacao"
                                    value="menor-preco"
                                    checked={ordenacao==="menor-preco"}
                                    onChange={(e)=>setOrdenacao(e.target.value)}
                                />

                                Menor preço

                            </RadioOption>

                            <RadioOption>

                                <input
                                    type="radio"
                                    name="ordenacao"
                                    value="maior-preco"
                                    checked={ordenacao==="maior-preco"}
                                    onChange={(e)=>setOrdenacao(e.target.value)}
                                />

                                Maior preço

                            </RadioOption>

                        </FilterGroup>

                        <ClearFiltersButton
                            disabled={
                                categoriaSelecionada === "" &&
                                ordenacao === ""
                            }
                            onClick={limparFiltros}
                        >

                            <FiRotateCcw />

                            Limpar filtros

                        </ClearFiltersButton>

                    </Sidebar>

                    <MainContent>
                        
                        {/*

                        <HeaderSection>

                            <ResultsContainer>

                                <ResultsTitle>

                                    Produtos

                                </ResultsTitle>

                                <ResultsText>

                                    {products.length} produtos encontrados

                                </ResultsText>

                            </ResultsContainer>

                            <SortContainer>

                                <SortLabel>

                                    Ordenar por

                                </SortLabel>

                                <SortSelect
                                    value={ordenacao}
                                    onChange={(event) =>
                                        setOrdenacao(event.target.value)
                                    }
                                >

                                    <option value="">
                                        Destaque
                                    </option>

                                    <option value="menor-preco">
                                        Menor preço
                                    </option>

                                    <option value="maior-preco">
                                        Maior preço
                                    </option>

                                </SortSelect>

                            </SortContainer>

                        </HeaderSection>

                        */}

                        {loading ? (

                            <Loader />

                        ) : error ? (

                            <ErrorContainer>

                                <h2>Ocorreu um erro.</h2>

                                <p>{error}</p>

                            </ErrorContainer>

                        ) : (

                            <ProductsGrid>

                                {products.map((product) => (

                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        image={product.images}
                                        name={product.name}
                                        oldPrice={product.oldPrice}
                                        currentPrice={product.currentPrice}
                                        pixPrice={product.pixPrice}
                                        installments={product.installments}
                                        discount={product.discount}
                                        freeShipping={product.freeShipping}
                                        sizes={product.sizes}
                                        description={product.description}
                                        onAddToCart={() =>
                                            addItem(produtoToCartItem(product))
                                        }
                                    />

                                ))}

                            </ProductsGrid>

                        )}

                    </MainContent>

                </Content>

            </Container>
        </>
    );
}