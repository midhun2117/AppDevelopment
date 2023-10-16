import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Homepage from './Pages/Homepage';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Faq from './Components/Faq';
import Dashboard from './Components/Dashboard';
import PaymentPage from './Pages/PaymentPage';

function App() {
  return (
    
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/homepage" element={<Navbar/>} />
          <Route path="/service" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/payment" element={<PaymentPage/>} />

        
        </Routes>
        </Router>
        </div>
    
  );
}

export default App;
