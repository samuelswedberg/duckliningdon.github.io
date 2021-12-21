import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import MasterChiefHelmet from './pages/projects/masterchief';
import EnergySword from './pages/projects/energysword';
import DarthVaderHelmet from './pages/projects/darthvaderhelmet';
import FiveOhHelmet from './pages/projects/fiveohhelmet';
import KenobiSaber from './pages/projects/kenobisaber';
import ArcReactor from './pages/projects/arcreactor';
import HMP from './pages/projects/hmp';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
          <Route path='/projects/masterchief' element={<MasterChiefHelmet />}></Route>
          <Route path='/projects/energysword' element={<EnergySword />}></Route>
          <Route path='/projects/darthvaderhelmet' element={<DarthVaderHelmet />}></Route>
          <Route path='/projects/501sthelmet' element={<FiveOhHelmet />}></Route>
          <Route path='/projects/kenobisaber' element={<KenobiSaber />}></Route>
          <Route path='/projects/arcreactor' element={<ArcReactor />}></Route>
          <Route path='/projects/hmp' element={<HMP />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
