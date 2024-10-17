import './App.css'
import Header from './Components/header/Header';
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons from './Components/icons/Icons';
import Showcase from './Components/showcase/Showcase';
import Testimonials from './Components/testimonials/Testimonials';
import CallToAction from './Components/callToAction/CallToAction';
import Footer from './Components/footer/Footer';

function App() {
  

  return (
    <>
    <Navbar/>
    <Header/>
    <Icons/>
    <Showcase/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default App
