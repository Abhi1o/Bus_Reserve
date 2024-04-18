import Navbar from "./components/Navbar"
import './App.css';
import Home from "./Pages/Home"
import Ticket from "./Pages/Ticket";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Availablebus from "./Pages/Availablebus";
import Receiptpage from "./Pages/Receiptpage";
import Infopage from "./Pages/Infopage";
function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={< Ticket/>} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/login" element={< Login/>}/>
          <Route path="/signup" element={< Signup/>}/>
          <Route path="/avialable" element={< Availablebus/>}/>
          <Route path="/receipt" element={< Receiptpage/>}/>
          <Route path="/info" element={< Infopage/>}/>
        
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
