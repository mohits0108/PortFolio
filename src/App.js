import './App.css';
import {Routes,Route} from 'react-router-dom';

import Portfolio from './contanier/portfolio';
import About from './contanier/about';
import Skills from './contanier/skills';
import Contact from './contanier/contact';
import Resume from './contanier/resume';
import Home from './contanier/home';
import Navbar from './components/navbar';
import Reports from './contanier/Reports';





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


function App() {
 

  return (
    <div className="App">
       
     
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
