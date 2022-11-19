
import  Navbar  from './components/Navbar/Navbar';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/> 
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}
























export default App;
