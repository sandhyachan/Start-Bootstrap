import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing individual components for the application
import Header from '../src/Components/header/Header.jsx';
import Navbar from '../src/Components/Navbar.jsx'
import Icons from '../src/Components/icons/Icons.jsx';
import Showcase from '../src/Components/showcase/Showcase.jsx';
import Testimonials from '../src/Components/testimonials/Testimonials.jsx';
import CallToAction from '../src/Components/callToAction/CallToAction.jsx';
import Footer from '../src/Components/footer/Footer.jsx';

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
