
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="logo">
            <h1><i>Zomato</i></h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><a href="https://play.google.com/store/search?q=zomato&c=apps&hl=en">Get the App</a></li>
            </ul>
          </nav>
        </header>

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <footer>
          <p>&copy; 2024 Zomato. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
