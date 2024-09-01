
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weather from './components/Weather';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <React.Fragment>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/weather/:city" element={<Weather />} />
            <Route path='/home' element={<Home />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;