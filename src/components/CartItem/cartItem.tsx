import { useCart, type CartItem as CartItemType } from '../../contexts/shoppingCartContext'
import TrashIcon from '../Icons/TrashIcon';
import {Container, ImageContainer, Content, ProductActions, ProductName, ProductInfo, ProductSize, ProductPrice, QuantityContainer, QuantityButton, Quantity, RemoveButton} from './cartItemStyles'

interface CartItemProps {
    item: CartItemType;
}

export function CartItem({item}: CartItemProps) {

    const { updateQuantity, removeItem } = useCart();

    function aumentarQuantidade() {
        updateQuantity(
            item.id,
            item.quantidade + 1,
            item.tamanho
        );
    }

    function diminuirQuantidade() {

        if (item.quantidade === 1) {
            return;
        }

        updateQuantity(
            item.id,
            item.quantidade - 1,
            item.tamanho
        );
    }

    function removerProduto() {
        removeItem(
            item.id,
            item.tamanho
        );
    }

    return (
        <Container>

            <ImageContainer>

                <img
                    src={item.imagem}
                    alt={item.nome}
                />

            </ImageContainer>

            <Content>

                <ProductInfo>

                    <ProductName>

                        {item.nome}

                    </ProductName>

                    <ProductSize>

                        Tamanho: {item.tamanho}

                    </ProductSize>

                    <ProductPrice>

                        R$ {item.preco}

                    </ProductPrice>

                </ProductInfo>

                <ProductActions>

                    <QuantityContainer>

                        <QuantityButton 
                        onClick={diminuirQuantidade}
                        $disabled={item.quantidade === 1}
                        >
                            
                            -

                        </QuantityButton>

                        <Quantity>

                            {item.quantidade}

                        </Quantity>

                        <QuantityButton onClick={aumentarQuantidade}>

                            +

                        </QuantityButton>

                    </QuantityContainer>

                    <RemoveButton onClick={removerProduto}>

                        <TrashIcon />

                    </RemoveButton>

                </ProductActions>

            </Content>

        </Container>
    )
}