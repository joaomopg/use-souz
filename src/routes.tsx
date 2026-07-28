import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

// Placeholder público
function Catalog() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#d4af37',
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '2rem'
    }}>
      🚧 Catálogo em construção
    </div>
  );
}

// Placeholder protegido
function Cart() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#d4af37',
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '2rem'
    }}>
      🛒 Carrinho em construção
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />

        {/* Rotas protegidas */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;