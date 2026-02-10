import './App.css';
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Engineering } from './components/pages/Engineering';
import { Art } from './components/pages/Art';
import { Music } from './components/pages/Music';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/engineering" element={<Engineering/>} />
        <Route path="/art" element={<Art/>} />
        <Route path="/music" element={<Music/>} />
      </Routes>

    </div>
  );
}

export default App;
