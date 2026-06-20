import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Register } from './pages/Register/Register';

// TODO: criar estas páginas depois
// import { Login } from './pages/Login/Login';
// import { Catalog } from './pages/Catalog/Catalog';
// import { ProductDetail } from './pages/ProductDetail/ProductDetail';
// import { Cart } from './pages/Cart/Cart';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* Descomente quando criar as páginas:
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;