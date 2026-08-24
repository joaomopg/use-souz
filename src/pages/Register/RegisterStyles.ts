import styled, { keyframes } from 'styled-components';

// ── Animações ──
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// ── Container ──
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(212, 175, 55, 0.03) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

// ── Card ──
export const Card = styled.div`
  background-color: #121212;
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 16px;
  padding: 48px 40px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(212, 175, 55, 0.05);
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    padding: 32px 24px;
    max-width: 90%;
  }
`;

// ── Título ──
export const Title = styled.h1`
  font-family: 'Playfair Display', 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  font-weight: 600;
  color: #d4af37;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: 1.5px;
  background: linear-gradient(135deg, #f5e6b8 0%, #d4af37 50%, #b8962e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

// ── Subtítulo ──
export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #aaaaaa;
  text-align: center;
  margin-bottom: 32px;
  letter-spacing: 0.3px;
`;

// ── Form ──
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// ── Input Group ──
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

// ── Input Wrapper ──
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// ── Ícone dentro do input ──
export const InputIcon = styled.span`
  position: absolute;
  left: 14px;
  font-size: 1.1rem;
  opacity: 0.6;
  z-index: 2;
  pointer-events: none;
`;

// ── Input ──
interface InputProps {
  $hasError?: boolean;
  $hasValue?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 14px 14px 14px 44px;
  background-color: #0a0a0a;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#ff6b6b' : '#333')};
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? '#ff6b6b' : '#d4af37')};
    box-shadow: 0 0 0 3px ${({ $hasError }) =>
      $hasError ? 'rgba(255, 107, 107, 0.15)' : 'rgba(212, 175, 55, 0.15)'};
  }

  /* Label flutuante: quando tem valor ou foco */
  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translateY(-28px) scale(0.85);
    color: #d4af37;
  }
`;

// ── Floating Label ──
export const FloatingLabel = styled.label`
  position: absolute;
  left: 44px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaaaaa;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  pointer-events: none;
  transition: all 0.25s ease;
  transform-origin: left center;
`;

// ── Mensagem de erro ──
export const ErrorText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #ff6b6b;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 0.9rem;
  }
`;

// ── Botão de envio ──
export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
  background: linear-gradient(135deg, #d4af37 0%, #b8962e 100%);
  color: #0a0a0a;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// ── Spinner de loading ──
export const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #0a0a0a;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

// ── Link para login ──
export const LoginLink = styled.p`
  text-align: center;
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #aaaaaa;

  a {
    color: #d4af37;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #d4af37;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #f5e6b8;

      &::after {
        width: 100%;
      }
    }
  }
`;

// ── Erro global ──
export const GlobalError = styled.div`
  background-color: rgba(255, 107, 107, 0.08);
  border: 1px solid rgba(255, 107, 107, 0.3);
  color: #ff6b6b;
  padding: 12px 16px;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    font-size: 1rem;
  }
`;