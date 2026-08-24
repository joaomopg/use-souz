import styled from "styled-components";

export const CarouselContainer = styled.div`
    aspect-ratio: 2098 / 750;
    height: auto;

    position: relative;

    overflow: hidden;

`;

export const CarouselTrack = styled.div<{
  currentIndex: number;
}>`
    display: flex;

    width: 100%;
    height: 100%;

    transform: ${({ currentIndex }) =>
      `translateX(-${currentIndex * 100}%)`};

    transition: transform 0.7s ease-in-out;
`;

export const Slide = styled.img`
    width: 100%;
    height: 100%;

    object-fit: contain;

    display: block;
`;

export const NavigationButton = styled.button<{
  left?: boolean;
}>`
    position: absolute;

    top: 50%;

    transform: translateY(-50%);

    ${({ left }) =>
      left ? "left: 20px;" : "right: 20px;"}

    width: 50px;
    height: 50px;

    border: none;
    border-radius: 50%;

    background: rgba(0,0,0,0.4);

    color: white;

    font-size: 24px;

    cursor: pointer;

    z-index: 2;

    transition: 0.25s;

    &:hover {
        background: rgba(0,0,0,0.65);
        transform: translateY(-50%) scale(1.05);
    }
`;

export const Indicators = styled.div`
    position: absolute;

    bottom: 30px;
    left: 50%;

    transform: translateX(-50%);

    display: flex;

    gap: 12px;

    z-index: 2;
`;

export const Indicator = styled.div<{
  active: boolean;
}>`
    height: 4px;

    width: ${({ active }) =>
      active ? "60px" : "40px"};

    border-radius: 999px;

    background-color: ${({ active }) =>
      active
        ? "#d4a64a"
        : "rgba(255,255,255,0.4)"};

    transition: all 0.3s ease;

    cursor: pointer;
`;