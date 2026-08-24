import { BrowserRouter } from "react-router-dom";

import CartDrawer from "./components/CartDrawer/cartDrawer";
import Toast from "./components/Toast/Toast";
import { AppProviders } from "./providers/AppProviders";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Toast />

        <CartDrawer />

        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;