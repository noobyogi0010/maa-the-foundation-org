import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Gallery from '../pages/gallery/gallery';
import Internship from '../pages/internship/internship';

function App() {
  

  return (
    <div className="flex flex-col">
      <HashRouter>
        <Routes>
          <Route key="home" path='/' element={<Home />} />
          <Route key="home-named" path='/maa-the-foundation' element={<Home />} />
          <Route key="gallery" path='/gallery' element={<Gallery />} />
          <Route key="internship" path='/internship' element={<Internship />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
