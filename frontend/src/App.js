import "./App.css";
// import CartPage from "./Componants/CartComponent";
import Footer from "./Componants/Footer";
import Navigation from "./Componants/NavBar";

import MainRoutes from "./Routes/Main";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainRoutes />
      <Footer />
    </div>
  );
}
export default App;
