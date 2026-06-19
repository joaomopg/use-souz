import { useEffect, useState } from "react";

import {
  CarouselContainer,
  CarouselTrack,
  Slide,
  NavigationButton,
  Indicators,
  Indicator
} from "./bannersCarouselStyles";

type CarouselProps = {
  images: string[];
};

function BannersCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  function previousSlide() {
    setCurrentIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <CarouselContainer>

      <CarouselTrack currentIndex={currentIndex}>
        {images.map((image, index) => (
          <Slide
            key={index}
            src={image}
            alt={`slide-${index}`}
          />
        ))}
      </CarouselTrack>

      <NavigationButton left onClick={previousSlide}>
        ❮
      </NavigationButton>

      <NavigationButton onClick={nextSlide}>
        ❯
      </NavigationButton>

      <Indicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Indicators>

    </CarouselContainer>
  );
}

export default BannersCarousel;