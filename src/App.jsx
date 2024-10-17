import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing individual components for the application
import Header from './Components/header/Header';
import Navbar from './Components/Navbar'
import Icons from './Components/icons/Icons';
import Showcase from './Components/showcase/Showcase';
import Testimonials from './Components/testimonials/Testimonials';
import CallToAction from './Components/callToAction/CallToAction';
import Footer from './Components/footer/Footer';

function App() {
  
  return (
    <>
    <Navbar/>

    {/* Header section includes main title and email input */}
    <Header/>

    {/* Icons that showcases features */}
    <Icons/>

    {/* Showcase with highlighted features */}
    <Showcase/>

    {/* Testimonials displays the users feedback */}
    <Testimonials/>

    {/* CallToAction allows user to sign up */}
    <CallToAction/>
    
    <Footer/>
    </>
  )
}

export default App
