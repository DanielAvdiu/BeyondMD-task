import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Dictionary from "./pages/Dictionary";
import Exchange from "./pages/Exchange";
import Notes from "./pages/Notes";

function App() {
  return (
    <>
      <div className="App flex-col overflow-auto scrollbar-hide">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/finance" element={<Exchange />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
