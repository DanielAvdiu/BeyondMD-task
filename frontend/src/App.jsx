import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Dictionary from "./pages/Dictionary";


function App() {
  return (
    <>
      <div className="App flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/about" element={< About />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
