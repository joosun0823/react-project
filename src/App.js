import React from 'react';
import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyContext from './Context';
import Home from './comp/Home';
import Insert from './comp/Insert';
import Versus from './comp/Versus';
import Winner from './comp/Winner';

function App() {
  return (
    <BrowserRouter>
        <MyContext>
          <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/insert" element={<Insert/>}/>
            <Route path="/versus" element={<Versus/>}/>
            <Route path="/winner" element={<Winner/>}/>
          </Routes>
          </main>
        </MyContext>
    </BrowserRouter>
  )
}

export default App