import { useState, useContext, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
  Container,
  Card,
  Title,
  Subtitle,
  Form,
  InputGroup,
  InputWrapper,
  InputIcon,
  Input,
  FloatingLabel,
  ErrorText,
  SubmitButton,
  Spinner,
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
  const location = useLocation();
  const { login } = useContext(AuthContext);

  // Se veio de uma rota protegida (ex: /cart), volta pra lá depois do login
  const from = (location.state as any)?.from?.pathname || '/catalog';

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
      // Redireciona para a página que o usuário tentou acessar (ou /catalog por padrão)
      navigate(from, { replace: true });
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
        <Subtitle>Acesse sua conta</Subtitle>

        {globalError && (
          <GlobalError>
            <span>⚠️</span> {globalError}
          </GlobalError>
        )}

        <Form onSubmit={handleSubmit} noValidate>
          <InputGroup>
            <InputWrapper>
              <InputIcon>✉️</InputIcon>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                $hasError={!!errors.email}
                $hasValue={!!formData.email}
                placeholder=" "
              />
              <FloatingLabel htmlFor="email">Email</FloatingLabel>
            </InputWrapper>
            {errors.email && <ErrorText><span>⚠️</span> {errors.email}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <InputWrapper>
              <InputIcon>🔒</InputIcon>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                $hasError={!!errors.password}
                $hasValue={!!formData.password}
                placeholder=" "
              />
              <FloatingLabel htmlFor="password">Senha</FloatingLabel>
            </InputWrapper>
            {errors.password && <ErrorText><span>⚠️</span> {errors.password}</ErrorText>}
          </InputGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner /> Entrando...
              </>
            ) : (
              'Entrar'
            )}
          </SubmitButton>
        </Form>

        <RegisterLink>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </RegisterLink>
      </Card>
    </Container>
  );
}