import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Catalogo from './pages/catalogo/catalogo';
import ProdutoDetalhe from './pages/ProdutoDetalhe/produtoDetalhe';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<Catalogo/>} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;