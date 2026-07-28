import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';

import ProductGallery from './components/ProductGallery/ProductGallery';
import ProductInfo from './components/ProductInfo/ProductInfo';
import WarrantyCard from './components/WarrantyCard/WarrantyCard';
import ShippingCard from './components/ShippingCard/ShippingCard';
import Description from './components/Description/Description';

import {
    Container,
    TopSection,
    LeftColumn,
    RightColumn,
    BottomSection
} from './produtoDetalheStyles';
import { getProdutoPorId } from '../../services/produto.service';
import { useEffect, useState } from 'react';
import type { Produto } from '../../types/Produto';
import { useCart } from '../../contexts/shoppingCartContext';
import { produtoToCartItem } from '../../utils/cartMapper';

export default function ProdutoDetalhe() {

    const [produto, setProduto] = useState<Produto | null>(null);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
    const [quantidade, setQuantidade] = useState(1);

    const { id } = useParams();

    const { addItem }= useCart();

    useEffect(()=> {
        buscarProduto();
    }, [id])

    async function buscarProduto() {

        try {

            const produto = await getProdutoPorId(id!);

            const produtoTransformado: Produto = {
                id: produto.id,
                images: [`http://localhost:4000/uploads/${produto.url_imagem}`],
                name: produto.nome,
                preco: produto.preco,
                currentPrice: `R$ ${Number(produto.preco).toFixed(2)}`,
                oldPrice: `R$ ${Number(produto.preco * 1.2).toFixed(2)}`,
                pixPrice: `R$ ${Number(produto.preco * 0.9).toFixed(2)}`,
                installments: '10x sem juros',
                discount: '0% OFF',
                freeShipping: false,
                sizes: ['19 cm', '20 cm', '21 cm', '22 cm'],
                description: 'Corrente de ouro 18 quilates',
                price: Number(produto.preco),
            };

            /*
                Aqui, estamos pegando as informações que chegam da api e transformando-as em um produto
                'real', ou seja, um produto que possui todas as informações que eu preciso. Essas novas
                informações se encaixam na tipagem de Produto.
            */

            setProduto(produtoTransformado);

        } catch (error) {

            console.error(error);

        }

    }

    if (!produto) {
        return <div>Carregando...</div>;
    }

    function adicionarAoCarrinho() {

        if (!produto) return;

        /* 
           addItem(
                produtoToCartItem({
                    id: produto.id,
                    nome: produto.name,
                    preco: produto.currentPrice,
                    ...
                })
            ); 

            Aqui, basicamente montavamos um novo objeto compatível com CartItem.
            Com o Mappler, criamos uma função que faz exatamente isso, e podemos usar essa função
            em diferentes lugares da aplicação, evitando repetições.
        */

        addItem(
            produtoToCartItem(
                produto,
                tamanhoSelecionado,
                quantidade
            )
        );

    }

    return (
        <>
            <Header />

            <Container>

                <TopSection>

                    <LeftColumn>

                        <ProductGallery imagens={produto.images}/>

                        <WarrantyCard />

                    </LeftColumn>

                    <RightColumn>

                        <ProductInfo
                            produto={produto}
                            quantidade={quantidade}
                            setQuantidade={setQuantidade}
                            tamanhoSelecionado={tamanhoSelecionado}
                            setTamanhoSelecionado={setTamanhoSelecionado}
                            adicionarAoCarrinho={adicionarAoCarrinho}
                        />

                    </RightColumn>

                </TopSection>

                <BottomSection>

                    <ShippingCard />

                    <Description descricao={produto.description}/>

                </BottomSection>

            </Container>

        </>
    );

}