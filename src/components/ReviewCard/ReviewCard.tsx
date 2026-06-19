import {
  Card,
  Header,
  Avatar,
  UserInfo,
  UserName,
  ProductName,
  Stars,
  ReviewTitle,
  ReviewText,
  ReviewImage,
} from "./reviewCardStyles";

interface ReviewCardProps {
  userName: string;
  productName: string;
  title: string;
  review: string;
  image: string;
}

export default function ReviewCard({
  userName,
  productName,
  title,
  review,
  image,
}: ReviewCardProps) {
  return (
    <Card>
      <Header>
        <Avatar>
          {userName.charAt(0).toUpperCase()}
        </Avatar>

        <UserInfo>
          <UserName>{userName}</UserName>

          <ProductName>
            {productName}
          </ProductName>
        </UserInfo>
      </Header>

      <Stars>★★★★★</Stars>

      <ReviewTitle>{title}</ReviewTitle>

      <ReviewText>{review}</ReviewText>

      <ReviewImage
        src={image}
        alt={title}
      />
    </Card>
  );
}