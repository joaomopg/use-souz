import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 10px 0px;
  box-sizing: border-box;
`;

export const Track = styled.div`
  display: flex;

  will-change: transform;

  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
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