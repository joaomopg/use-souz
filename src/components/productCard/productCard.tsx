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
} from "./productCardStyles";

interface ProductCardProps {
  image: string;
  name: string;
  oldPrice: string;
  currentPrice: string;
  pixPrice: string;
  installments: string;
  discount?: string;
  freeShipping?: boolean;
  sizes?: string[];
}

export default function ProductCard({
  image,
  name,
  oldPrice,
  currentPrice,
  pixPrice,
  installments,
  discount,
  freeShipping,
  sizes = [],
}: ProductCardProps) {
  return (
    <Card>
      <ImageContainer>
        <ProductImage
          src={image}
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

        <PixPrice>{pixPrice}</PixPrice>

        <Installments>
          {installments}
        </Installments>

        <BuyButton>
          🛒 COMPRAR
        </BuyButton>
      </Content>
    </Card>
  );
}