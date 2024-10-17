import './App.css';
import {Routes,Route} from 'react-router-dom';

import Portfolio from './contanier/portfolio';
import About from './contanier/about';
import Skills from './contanier/skills';
import Contact from './contanier/contact';
import Resume from './contanier/resume';
import Home from './contanier/home';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Reports from './contanier/Reports';
import Turnstile from '@marsidev/react-turnstile';





// function App() {
//   const handleInit = async (main) => {
//     try {
//       await loadFull(main);
//     } catch (error) {
//       console.error('Error initializing tsparticles:', error);
//     }
//   };
  
  
//   return (
//     <div className="App">
//       <Particles id='particles' init={handleInit}/>
//       <Navbar/>
//         <Routes>
          
//           <Route index path='/' element={<Home/>}/>
//           <Route index path='/about' element={<About/>}/>
//           <Route index path='/resume' element={<Resume/>}/>
//           <Route index path='/skills' element={<Skills/>}/>
//           <Route index path='/portfolio' element={<Portfolio/>}/>
//           <Route index path='/contact' element={<Contact/>}/>
//         </Routes>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import Portfolio from './container/portfolio';
// import About from './container/about';
// import Skills from './container/skills';
// import Contact from './container/contact';
// import Resume from './container/resume';
// import Home from './container/home';
// import React from 'react';
// import Navbar from './components/navbar';
const [verified, setVerified] = useState(false);

const handleTurnstileSuccess = (token) => {
  console.log("Turnstile token: ", token);
  // Proceed as verified once token is received
  setVerified(true);
};

function App() {
 

  return (
    <div className="App">
        {!verified ? (
        <div>
          <h1>Please verify you're not a bot</h1>
          <Turnstile
            sitekey="0x4AAAAAAAxk-WeCk1XKTTad"  // Replace with your actual site key
            onSuccess={handleTurnstileSuccess}
          />
        </div>
      ) : (
        <div>
          <h1>Welcome, Human!</h1>
          {/* Render your website's content here */}
        </div>
      )}
     
      <Navbar />
     
      
      <Routes>
      <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />   
        <Route path="/Reports" element={<Reports />} />   
      </Routes>
    
   
      
      
        
    </div>
  );
}

export default App;
