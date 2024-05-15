import logo from './logo.svg';
import './App.css';
import CalendarComp from './components/CalendarComp';
import Navbar from './components/Navbar';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Skills from './components/Skills';
import WhatWeDo from './components/WhatWeDo';
import FeaturedProjects from './components/FeaturedProjects';
import WantToConnect from './components/WantToConnect';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <PrimeReactProvider> */}
      {/* <CalendarComp/> */}
      <Navbar/>
      <Skills/>
      <WhatWeDo/>
      <FeaturedProjects/>
      <WantToConnect/>
      <Footer/>
      {/* </PrimeReactProvider> */}
    </div>
  );
}

export default App;
