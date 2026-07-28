import {
  Card,
  ImageContainer,
  ProductImage,
  BadgeContainer,
  Badge,
  Content,
  ProductName,
  SizesContainer,
  SizeBadge,
  PriceContainer,
  OldPrice,
  CurrentPrice,
  PixPrice,
  Installments,
  BuyButton,
  AddCartButton,
  Actions,
} from "./productCardStyles";

import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number,
  image: string[];
  name: string;
  oldPrice: string;
  currentPrice: string;
  pixPrice: string;
  installments: string;
  discount?: string;
  freeShipping?: boolean;
  sizes?: string[];
  description?: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  id,
  image,
  name,
  oldPrice,
  currentPrice,
  pixPrice,
  installments,
  discount,
  freeShipping,
  sizes = [],
  description,
  onAddToCart,
}: ProductCardProps) {

  const navigate = useNavigate();

  function abrirProduto() {
      navigate(`/produtos/${id}`);
    }

  return (
    <Card onClick={abrirProduto}>
      <ImageContainer>
        <ProductImage
          src={image[0]}
          alt={name}
        />

        <BadgeContainer>
          {discount && (
            <Badge>{discount}</Badge>
          )}

          {freeShipping && (
            <Badge>FRETE GRÁTIS</Badge>
          )}
        </BadgeContainer>
      </ImageContainer>

      <Content>

        <ProductName>{name}</ProductName>

        <SizesContainer>
          {sizes.map((size) => (
            <SizeBadge key={size}>
              {size}
            </SizeBadge>
          ))}
        </SizesContainer>

        <PriceContainer>
          <OldPrice>{oldPrice}</OldPrice>

          <CurrentPrice>
            {currentPrice}
          </CurrentPrice>
        </PriceContainer>

        <PixPrice>
          ou {pixPrice} no Pix
        </PixPrice>

        <Installments>
          {installments}
        </Installments>

        <Actions>

          <BuyButton>
            COMPRAR
          </BuyButton>

          <AddCartButton
              onClick={(e) => {
                  e.stopPropagation();

                  onAddToCart?.();
              }}
          >
              🛒 Adicionar ao carrinho
          </AddCartButton>
        </Actions>
      </Content>
    </Card>
  );
}