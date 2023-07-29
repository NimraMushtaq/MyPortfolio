
import './App.css';
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import {Experience} from './Pages/Experience'
import {Projects} from './Pages/Projects'
import Footer from './Components/Footer';
import ProjectDisplay from './Components/ProjectDisplay';

function App() {

  return (
    <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/project/:id' element={<ProjectDisplay/>} />
              <Route path='/experience' element={<Experience/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
    </div>
  );
}

export default App;
