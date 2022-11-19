import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


import { Footer, Blog, Possibility, Features, WhatDT8, Header} from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Routes>  
          <Route exact path='/home' element={< Header />}></Route>  
          <Route exact path='/about' element={< WhatDT8 />}></Route>  
          <Route exact path='/contact' element={< Brand />}></Route>  
        </Routes>  
      </div>
    </div>


      
    </Router>

  )
}

export default App

{/* <Brand/>
<WhatDT8/>
<Features/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/> */}