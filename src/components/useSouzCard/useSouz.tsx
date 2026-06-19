import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Card = () => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <StyledWrapper>
      <div ref={cardRef} className={`card ${isActive ? 'active' : ''}`}>
        <div className="border" />
        <div className="content">
          <div className="logo">
            <div className="logo1">
              USE
              <span className="underline" />
            </div>
            <div className="logo2">SOUZ</div>
            <span className="trail" />
          </div>
          <span className="logo-bottom-text">Qualidade garantida em cada peça</span>
        </div>
        <span className="bottom-text">usesouz.com.br</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  background-color: black;

  .card {
    width: 100%;
    height: 220px;
    background: linear-gradient(344deg, rgba(40,40,55,1) 0%, rgba(16,16,18,1) 50%);
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  /* Mudamos a logo para Flexbox para os textos se alinharem naturalmente */
  .content .logo {
    height: 35px;
    position: relative;
    display: flex;
    gap: 8px; /* Espaçamento perfeito e controlado entre USE e SOUZ */
    align-items: flex-start;
    width: max-content; /* Ocupa exatamente o tamanho do texto interno */
    max-width: 58px;    /* Força o corte inicial para exibir apenas o "USE" */
    overflow: hidden;
    transition: max-width 0.8s ease-in-out; /* Animamos o max-width em vez do width fixo */
  }

  /* Removido position absolute para permitir o cálculo automático de centro */
  .logo1 {
    font-family: 'Montserrat', 'Arial Black', sans-serif;
    font-weight: 900;
    font-size: 28px;
    color: #bd9f67;
    line-height: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    white-space: nowrap;
  }

  .logo1 .underline {
    width: 100%;
    height: 3px;
    background-color: #bd9f67;
    border-radius: 2px;
  }

  /* Removido o 'left: 65px' fixo. Agora ele se posiciona sozinho após o gap */
  .logo2 {
    font-family: 'Montserrat', 'Arial Black', sans-serif;
    font-weight: 900;
    font-size: 28px;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px #bd9f67;
    white-space: nowrap;
  }

  .border {
    position: absolute;
    inset: 0px;
    border: 2px solid #bd9f67;
    opacity: 0;
    transform: rotate(3deg);
    transition: all 0.5s ease-in-out;
  }

  .bottom-text {
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    font-size: 8px;
    text-transform: uppercase;
    padding: 0px 8px;
    color: #bd9f67;
    background: #1a1a1f;
    opacity: 0;
    letter-spacing: 7px;
    transition: all 0.5s ease-in-out;
    white-space: nowrap;
  }

  .content {
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  .content .logo .trail {
    position: absolute;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  .content .logo-bottom-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 35px;
    color: #bd9f67;
    font-size: 12px;
    opacity: 0;
    transition: all 0.5s ease-in-out 0.4s;
    white-space: nowrap;
  }

  /* --- GATILHOS DO SCROLL ACTIVED --- */

  .card.active {
    border-radius: 0;
  }

  /* Modificação aqui: Abrimos o limite para um valor maior (ex: 300px). 
     O 'width: max-content' vai frear a expansão no tamanho exato das letras, 
     garantindo simetria perfeita dos dois lados. */
  .card.active .logo {
    max-width: 300px; 
    animation: opacity 0.8s ease-in-out;
  }

  .card.active .border {
    inset: 15px;
    opacity: 1;
    transform: rotate(0);
  }

  .card.active .bottom-text {
    letter-spacing: 3px;
    opacity: 1;
  }

  .card.active .content .logo-bottom-text {
    opacity: 1;
    letter-spacing: 6px;
  }

  .card.active .trail {
    animation: trail 0.8s ease-in-out;
  }

  @keyframes opacity {
    0% { border-right: 1px solid transparent; }
    10% { border-right: 1px solid #bd9f67; }
    80% { border-right: 1px solid #bd9f67; }
    100% { border-right: 1px solid transparent; }
  }

  @keyframes trail {
    0% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
      opacity: 0;
    }
    30% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
      opacity: 1;
    }
    70% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
      opacity: 1;
    }
    95% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
      opacity: 0;
    }
  }
`;

export default Card;