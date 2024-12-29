import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RegularShape from "./pages/RegularShape";
import BlobShape from "./pages/BlobShape";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regular" element={<RegularShape/>} />
          <Route path="/blob" element={<BlobShape/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
