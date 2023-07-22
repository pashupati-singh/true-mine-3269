import "./App.css";
import Footer from "./Componants/Footer";
import Navigation from "./Componants/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
