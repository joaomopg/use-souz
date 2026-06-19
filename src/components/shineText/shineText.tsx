import styled, { keyframes } from "styled-components";

const shineAnimation = keyframes`
  0%, 10% {
    background-position: -200px;
  }

  20% {
    background-position: 0;
  }

  100% {
    background-position: 200px;
  }
`;

const ShineText = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Courier New', Courier, monospace;

  color: rgba(255, 255, 255, 0.50);

  background: linear-gradient(
    120deg,
    transparent 0%,
    transparent 40%,
    #ffffff 50%,
    transparent 60%,
    transparent 100%
  );

  background-repeat: no-repeat;
  background-size: 150px 100%;

  -webkit-background-clip: text;
  background-clip: text;

  animation: ${shineAnimation} 5s infinite linear;
`;

function ShineTextCard() {
  return (
    <ShineText>
      UseSouza
    </ShineText>
  );
}

export default ShineTextCard;
