import { useState, useContext, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  LoginLink,
  GlobalError,
} from './RegisterStyles';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export function Register() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (!formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Digite um email válido.';
    }

    if (!formData.password) {
      newErrors.password = 'A senha é obrigatória.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirme sua senha.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem.';
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
      await register(formData.name, formData.email, formData.password);
      navigate('/catalog');
    } catch (error: any) {
      setGlobalError(
        error?.response?.data?.message || 'Erro ao cadastrar. Tente novamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIcon = (field: string) => {
    switch (field) {
      case 'name': return '👤';
      case 'email': return '✉️';
      case 'password':
      case 'confirmPassword': return '🔒';
      default: return '';
    }
  };

  return (
    <Container>
      <Card>
        <Title>Criar Conta</Title>
        <Subtitle>Preencha os dados para se cadastrar</Subtitle>

        {globalError && (
          <GlobalError>
            <span>⚠️</span> {globalError}
          </GlobalError>
        )}

        <Form onSubmit={handleSubmit} noValidate>
          <InputGroup>
            <InputWrapper>
              <InputIcon>{getIcon('name')}</InputIcon>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                $hasError={!!errors.name}
                $hasValue={!!formData.name}
                placeholder=" "
              />
              <FloatingLabel htmlFor="name">Nome completo</FloatingLabel>
            </InputWrapper>
            {errors.name && <ErrorText><span>⚠️</span> {errors.name}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <InputWrapper>
              <InputIcon>{getIcon('email')}</InputIcon>
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
              <InputIcon>{getIcon('password')}</InputIcon>
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

          <InputGroup>
            <InputWrapper>
              <InputIcon>{getIcon('confirmPassword')}</InputIcon>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                $hasError={!!errors.confirmPassword}
                $hasValue={!!formData.confirmPassword}
                placeholder=" "
              />
              <FloatingLabel htmlFor="confirmPassword">Confirmar senha</FloatingLabel>
            </InputWrapper>
            {errors.confirmPassword && <ErrorText><span>⚠️</span> {errors.confirmPassword}</ErrorText>}
          </InputGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner /> Cadastrando...
              </>
            ) : (
              'Cadastrar'
            )}
          </SubmitButton>
        </Form>

        <LoginLink>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </LoginLink>
      </Card>
    </Container>
  );
}