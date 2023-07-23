import "./App.css";
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
