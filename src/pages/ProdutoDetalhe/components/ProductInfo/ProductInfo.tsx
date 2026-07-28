import { useState, type Dispatch, type SetStateAction } from 'react';
import {
    Container,
    Breadcrumb,
    ProductTitle,
    Rating,
    ProductCode,
    PriceSection,
    SizeSection,
    QuantitySection,
    BuySection,
    FavoriteButton,
    OldPrice,
    CurrentPrice,
    DiscountBadge,
    PixPrice,
    Installments,
    SectionTitle,
    SizeOptions,
    SizeButton,
    QuantitySelector,
    QuantityButton,
    QuantityValue,
    BuyNowButton,
    AddToCartButton,
    ProductMeta,
    ProductHeader,
} from './ProductInfoStyles';

import type { Produto } from '../../../../types/Produto';

interface ProductInfoProps {
    produto: Produto;

    quantidade: number;
    setQuantidade: Dispatch<SetStateAction<number>>;

    tamanhoSelecionado: string;
    setTamanhoSelecionado: Dispatch<SetStateAction<string>>;

    adicionarAoCarrinho: () => void;
}

export default function ProductInfo({
    produto, 
    quantidade, 
    setQuantidade, 
    tamanhoSelecionado, 
    setTamanhoSelecionado,
    adicionarAoCarrinho
}: ProductInfoProps) {

    return (

        <Container>

            <ProductHeader>


                <Breadcrumb>
                    Home / Correntes / Corrente Grumet
                </Breadcrumb>

                <ProductTitle>
                    {produto.name}
                </ProductTitle>

                <ProductMeta>

                    <Rating>
                        ★★★★★ (32 avaliações)
                    </Rating>

                    <ProductCode>
                        Código: 000123
                    </ProductCode>

                </ProductMeta>


            </ProductHeader>


            <PriceSection>

                <OldPrice>
                    {produto.oldPrice}
                </OldPrice>

                <CurrentPrice>
                    {produto.currentPrice}
                </CurrentPrice>

                <DiscountBadge>
                    {produto.discount}
                </DiscountBadge>

                <PixPrice>
                    ou <strong>{produto.pixPrice}</strong> no Pix
                </PixPrice>

                <Installments>
                    {produto.installments}
                </Installments>

            </PriceSection>

            <SizeSection>

                <SectionTitle>
                    Tamanho
                </SectionTitle>

                <SizeOptions>

                    {produto.sizes.map((tamanho) => (
                        
                        <SizeButton
                            key={tamanho}
                            $selected={tamanhoSelecionado === tamanho}
                            onClick={() => setTamanhoSelecionado(tamanho)}
                        >

                            {tamanho}

                        </SizeButton>

                    ))}

                </SizeOptions>

            </SizeSection>

            <QuantitySection>

                <SectionTitle>
                    Quantidade
                </SectionTitle>

                <QuantitySelector>

                    <QuantityButton
                        onClick={() =>
                            setQuantidade((q) => Math.max(1, q - 1))
                        }
                    >
                        −
                    </QuantityButton>

                    <QuantityValue>

                        {quantidade}

                    </QuantityValue>

                    <QuantityButton
                        onClick={() =>
                            setQuantidade((q) => q + 1)
                        }
                    >
                        +
                    </QuantityButton>

                </QuantitySelector>

            </QuantitySection>

            <BuySection>

                <BuyNowButton>

                    Comprar agora

                </BuyNowButton>

                <AddToCartButton onClick={adicionarAoCarrinho}>

                    Adicionar ao carrinho

                </AddToCartButton>

            </BuySection>

            <FavoriteButton>

                🤍 Adicionar aos favoritos

            </FavoriteButton>
        </Container>

    );

}