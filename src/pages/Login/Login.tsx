import { useState, useContext, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
  Container,
  Card,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  ErrorText,
  SubmitButton,
  RegisterLink,
  GlobalError,
} from './LoginStyles';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [globalError, setGlobalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (globalError) setGlobalError('');
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Digite um email válido.';
    }

    if (!formData.password) {
      newErrors.password = 'A senha é obrigatória.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setGlobalError('');

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await login(formData.email, formData.password);
      navigate('/catalog');
    } catch (error: any) {
      setGlobalError(
        error?.response?.data?.message || 'Erro ao fazer login. Tente novamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Entrar</Title>

        {globalError && <GlobalError>{globalError}</GlobalError>}

        <Form onSubmit={handleSubmit} noValidate>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              $hasError={!!errors.email}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Sua senha"
              value={formData.password}
              onChange={handleChange}
              $hasError={!!errors.password}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </InputGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </SubmitButton>
        </Form>

        <RegisterLink>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </RegisterLink>
      </Card>
    </Container>
  );
}