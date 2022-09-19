import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

import Rotas from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}
