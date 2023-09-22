import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Homepage from './Pages/Homepage';

function App() {
  return (
    
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/homepage" element={<Homepage/>} />
        
        </Routes>
        </Router>
        </div>
    
  );
}

export default App;
