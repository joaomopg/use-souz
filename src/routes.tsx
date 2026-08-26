import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/home";

import Catalogo from "./pages/catalogo/catalogo";

import ProdutoDetalhe
  from "./pages/ProdutoDetalhe/produtoDetalhe";

import Checkout
  from "./pages/checkout/Checkout";

import OrderSuccess
  from "./pages/OrderSuccess/OrderSuccess";

import {
  Register
} from "./pages/Register/Register";

import {
  Login
} from "./pages/Login/Login";
import MyOrders from "./pages/MyOrders/MyOrders";

import ProtectedRoute
  from "./components/ProtectedRoute/ProtectedRoute";


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

      <Route
        path="/meus-pedidos"
        element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>

  );

}

export default AppRoutes;