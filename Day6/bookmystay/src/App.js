import Login from './Pages/Login';
import Register from './Pages/Register';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/footer" element={<Footer/>} />
        
        </Routes>
        </Router>
        </div>
    
  );
}

export default App;
