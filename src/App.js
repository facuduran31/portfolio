import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Resumen from './components/resumen';
import Footer from './components/footer';
import ScrollButton from './components/scrollbutton';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >        
        <Banner></Banner>
      </motion.div>
      <Resumen></Resumen>
      <Footer></Footer>
      <ScrollButton />
    </div>
  );
}

export default App;
