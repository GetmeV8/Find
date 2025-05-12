import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import UserList from './pages/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/users" element={<UserList />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 