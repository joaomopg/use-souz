import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

// ── Placeholders: criar páginas reais depois ──
function Catalog() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#c49d54',
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '2rem'
    }}>
      🚧 Catálogo em construção
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#c49d54',
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '2rem'
    }}>
      🚧 Produto #{id} — em construção
    </div>
  );
}

function Cart() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#c49d54',
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '2rem'
    }}>
      🚧 Carrinho em construção
    </div>
  );
}

// Precisa importar useParams para o ProductDetail
import { useParams } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;