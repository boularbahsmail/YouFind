import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

// React Icons
import { BsSearch, BsMoon } from 'react-icons/bs';

// Routes
import Home from './routes/Home';
import Find from './routes/Find';

const App = () => {
  // Switch Dark | Light Mode
  const switchIt = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  // Get Current Year
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Router>
      <div className="container">
        <header>
          <h2 title="YouFind - Easily Find Your Direction">
            <Link to="/">
              <img src="https://img.icons8.com/ios-filled/50/4a90e2/rubiks-cube.png" height="25px" width="25px" />
              You<span className="highlight">Find</span>
            </Link>
          </h2>

          <div className="right-item">
            <Link to="/search" title="Search">
              <BsSearch className="icon" />
            </Link>

            <button title="Dark Mode | Light Mode" onClick={switchIt} className="darklightmodeButton">
              <BsMoon className="icon" />
            </button>
          </div>
        </header>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/search" element={<Find />}></Route>
        </Routes>
        <footer>
          <h5>&copy; {year} - <span>You<span className="highlight">Find</span></span> - Made with ❤️ by <a href="">Ismailium</a></h5>
        </footer>
      </div>
    </Router>
  );
}

export default App;
