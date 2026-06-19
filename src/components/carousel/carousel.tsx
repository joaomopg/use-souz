import { useState } from "react";
import type { ReactNode } from "react";

import {
  Container,
  Viewport,
  Track,
  ArrowButton,
} from "./carouselStyles";

interface CarouselProps {
  children: ReactNode;
  cardsPerView?: number;
  gap?: number;
}

export default function Carousel({
  children,
  cardsPerView = 3,
  gap = 20,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = Array.isArray(children)
  ? children
  : [children];

  const totalItems = items.length;

  const cardWidthPercent = 100 / cardsPerView;

  const maxIndex = Math.max(
        0,
        items.length - cardsPerView
    );

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const translateX = `calc(
    -${currentIndex * cardWidthPercent}%
    - ${currentIndex * (gap / cardsPerView)}px
  )`;
    

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <Container>

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
                gap: `${gap}px`,
                transform: `translateX(${translateX})`,
            }}
            >
            {items.map((item, index) => (
                <div
                key={index}
                style={{
                    flex: `0 0 calc((100% - ${(cardsPerView - 1) * gap}px) / ${cardsPerView})`,
                }}
                >
                    {item}
                </div>
            ))}
            </Track>

        </Viewport>

        <ArrowButton
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
        >
            ❯
        </ArrowButton>

    </Container>
  );
}