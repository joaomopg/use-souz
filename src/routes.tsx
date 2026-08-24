import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/home";
import Catalogo from "./pages/catalogo/catalogo";
import ProdutoDetalhe from "./pages/ProdutoDetalhe/produtoDetalhe";
import Checkout from "./pages/checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/produtos"
        element={<Catalogo />}
      />

      <Route
        path="/produtos/:slug"
        element={<ProdutoDetalhe />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

      <Route
        path="/pedido/:codigo/sucesso"
        element={<OrderSuccess />}
      />
    </Routes>


  );
}

export default AppRoutes;