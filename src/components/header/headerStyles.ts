import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    padding: 0px 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: black;
    position: fixed;
    z-index: 8;

    .content .logo {
    height: 35px;
    position: relative;
    display: flex;
    gap: 8px; /* Espaçamento perfeito e controlado entre USE e SOUZ */
    align-items: center;
    width: max-content; /* Ocupa exatamente o tamanho do texto interno */
    max-width: 58px;    /* Força o corte inicial para exibir apenas o "USE" */
    overflow: hidden;
    transition: max-width 0.8s ease-in-out; /* Animamos o max-width em vez do width fixo */
  }

  /* Removido position absolute para permitir o cálculo automático de centro */
  .logo1 {
    font-family: 'Montserrat', 'Arial Black', sans-serif;
    font-weight: 900;
    font-size: 22px;
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
    font-size: 22px;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px #bd9f67;
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

  /* --- GATILHOS DO SCROLL ACTIVED --- */

  /* Modificação aqui: Abrimos o limite para um valor maior (ex: 300px).
     O 'width: max-content' vai frear a expansão no tamanho exato das letras,
     garantindo simetria perfeita dos dois lados. */
  .card.active .logo {
    max-width: 300px;
    animation: opacity 0.8s ease-in-out;
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
`

export const LogoNameContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 56px;
    height: 56px;
`

export const SearchContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RegisterLoginContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;

    svg {
        color: #8b6c2e;
        margin-right: 10px;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 14px;
`

export const Button = styled.button`
    width: auto;
    height: 46px;
    margin-right: 10px;
    padding: none;
    outline: none;
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
`

/* Envolve o texto de saudação e o menu suspenso, permitindo que o menu
   seja posicionado em relação a este elemento */
export const UserMenuContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 15px;
`

/* Texto clicável "Olá, Nome" que abre/fecha o menu suspenso */
export const UserGreeting = styled.span`
    color: #d4af37;
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    white-space: nowrap;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #e8c766;
    }
`

/* Painel do menu suspenso, ancorado logo abaixo da saudação do usuário */
export const UserDropdown = styled.div`
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    background-color: #0a0a0a;
    border: 1px solid rgba(212, 175, 55, 0.3);
    border-radius: 6px;
    min-width: 140px;
    padding: 6px 0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    z-index: 10;
`

/* Opção clicável dentro do menu suspenso (atualmente apenas "Sair") */
export const DropdownItem = styled.button`
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
    text-align: left;
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(212, 175, 55, 0.1);
        color: #d4af37;
    }
`