// import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import Education from './components/Education/education'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Skills from './components/Skills/skills'

function App() {
  // const location = useLocation();
  return (
      <div className="App">
        
          <Navbar/>
          <main>  
            <Home/>
            <About/>
            <Education/>
            <Skills/>
            <Contact/>
          </main>
        
      </div>
  );
}

export default App;
