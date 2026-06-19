import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;

export const TitleContainer = styled.div`
  padding: 20px 0px;
  box-sizing: border-box;
  font-weight: 900;
  font-size: 28px;
  color: white;
  line-height: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  white-space: nowrap;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`

export const Viewport = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Track = styled.div`
  display: flex;
  transition: transform 0.4s ease;
`;

export const Card = styled.div`
  width: calc((100% - 40px)/3);
  flex-shrink: 0;

  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: bold;
`;

export const ArrowButton = styled.button<{left?: boolean}>`
  position: absolute;
  left: ${({left})=> left? '-50px': '100%'};
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.4);
  font-size: 24px;
  color: #cacaca;
  cursor: pointer;
  z-index: 2;
  transition: 0.25s;
  &:hover {
      background: rgba(0,0,0,0.65);
      color: white;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;