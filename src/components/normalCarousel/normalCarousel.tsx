import { useState } from "react";
import { ArrowButton, Card, CarouselContainer, Container, TitleContainer, Track, Viewport } from "./normalCarouselStyles";
import ReviewCard from "../ReviewCard/ReviewCard";
import reviewImage from '../../assets/pingentes.jpg'

const cards = [
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 1
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 2
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 3
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 4
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 5
    },
  
];

export default function NormalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;

  const maxIndex = cards.length - cardsPerView;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <TitleContainer>CLIENTES</TitleContainer>
      <CarouselContainer>

        <ArrowButton
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          left
        >
          ❮
        </ArrowButton>

        <Viewport>
          <Track
            style={{
              transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 7}px))`,
              display: 'flex',
              gap: '20px'
            }}
          >
            {cards.map((card) => (
              <Card key={card.id}>
                <ReviewCard
                  userName={card.userName}
                  productName={card.productName}
                  title={card.title}
                  review={card.review}
                  image={card.image}
                  />
              </Card>
            ))}
          </Track>
        </Viewport>

        <ArrowButton
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          ❯
        </ArrowButton>
      </CarouselContainer>
    </Container>
  );
}