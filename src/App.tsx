import CartDrawer from "./components/CartDrawer/cartDrawer";
import Toast from "./components/Toast/Toast";
import { AppProviders } from "./providers/AppProviders";
import  AppRoutes from "./routes";

function App() {
  
  return (
    <AppProviders>
      <Toast/>
      <CartDrawer/>
      <AppRoutes/>   
    </AppProviders>
  )
}

export default App;