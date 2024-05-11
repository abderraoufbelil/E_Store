import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing_page from "./pages/landing_page/Landing_page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FavoriteButton from "./components/FavoriteButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing_page />} />
          <Route path="/?color=bleu" element={<FavoriteButton />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
