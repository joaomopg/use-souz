import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a0a0a;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #141414;
  border: 1px solid #c49d54;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 0 30px rgba(196, 157, 84, 0.15);

  @media (max-width: 480px) {
    padding: 28px 20px;
  }
`;

export const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #c49d54;
  text-align: center;
  margin-bottom: 28px;
  letter-spacing: 1px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #e0e0e0;
  letter-spacing: 0.5px;
`;

interface InputProps {
  $hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 12px 16px;
  background-color: #1a1a1a;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#e74c3c' : '#333')};
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? '#e74c3c' : '#c49d54')};
    box-shadow: 0 0 0 2px ${({ $hasError }) =>
      $hasError ? 'rgba(231, 76, 60, 0.2)' : 'rgba(196, 157, 84, 0.2)'};
  }
`;

export const ErrorText = styled.span`
  font-size: 0.8rem;
  color: #e74c3c;
  margin-top: 2px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  background-color: #c49d54;
  color: #0a0a0a;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  letter-spacing: 0.5px;

  &:hover:not(:disabled) {
    background-color: #d4ad64;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const RegisterLink = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #999;

  a {
    color: #c49d54;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #d4ad64;
      text-decoration: underline;
    }
  }
`;

export const GlobalError = styled.div`
  background-color: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  color: #e74c3c;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 16px;
`;