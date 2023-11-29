
import './App.css';
import NavBar from './NavBar';
import Socials from './socials';
import Services from './services';
import Footer from './Footer';
import Banner from './Banner';
import WorkWithUs from './workWithUs';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Socials/>
      <NavBar/>
     <Banner/>
     <Hero/>
     <Services/>
     <WorkWithUs/>
     <Footer/>
        
      
    </div>
  );
}

export default App;
