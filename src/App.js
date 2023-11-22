import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from './components/Skills';
import Mywork from './components/Mywork';

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Mywork />
     <Contact />
     
    </div>
  );
}

export default App;
