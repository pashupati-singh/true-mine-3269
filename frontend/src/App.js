import "./App.css";
import Footer from "./Componants/Footer";
import Navigation from "./Componants/NavBar";
import { Payment } from "./Pages/Payment";

import MainRoutes from "./Routes/Main";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <MainRoutes />
     <Payment />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
