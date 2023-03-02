import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Contact from "./pages/contact";
import Apropos from "./pages/a-propos";
import Connexion from "./pages/ Connexion";
import Archives from "./pages/archives";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/archives" element={<Archives />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App