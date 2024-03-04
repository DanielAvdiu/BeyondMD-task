import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";


function App() {
  return (
    <>
      <div className="App flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
