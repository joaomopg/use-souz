import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  // Se ainda está carregando (verificando token no localStorage), mostra nada ou um loader
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        color: '#d4af37',
        fontFamily: 'Inter, sans-serif'
      }}>
        Carregando...
      </div>
    );
  }

  // Se não tem usuário, redireciona pro login
  // Guarda a URL que ele tentou acessar para voltar depois
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se está logado, renderiza a página
  return <>{children}</>;
}