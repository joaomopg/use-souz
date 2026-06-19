import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
  box-sizing: border-box;

  .slider {
    width: 100%;
    overflow-x: hidden;
    position: relative;

    /*mask-image: linear-gradient(
      to right,
      transparent,
      black 5%,
      black 95%,
      transparent
    );
    */
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  .track {
    display: flex;
    gap: 8px;
    width: max-content;

    animation: scroll 40s linear infinite;
  }

  .slider:hover .track {
    animation-play-state: paused;
  }

  .card {
    width: 300px;
    height: 200px;

    flex-shrink: 0;

    position: relative;
    overflow: hidden;

    background: #333e1d;
    border-radius: 16px;
  }

  .card::before {
    content: "";

    position: absolute;

    width: 220px;
    height: 220px;

    background: white;

    border-radius: 50%;

    top: -100px;
    left: -100px;

    filter: blur(50px);

    z-index: 1;
  }

  .cardContent {
    position: absolute;
    inset: 2px;

    z-index: 2;

    border-radius: 14px;

    background: rgba(10, 10, 10, 0.9);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card-image-container {
    width: auto;
    height: 100%;
  }

  .card-image {
    width: 100%;
    height: 100%;
  }
  
`