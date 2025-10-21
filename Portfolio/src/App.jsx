import Navbar from './components/Navbar';
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Aboutme />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
