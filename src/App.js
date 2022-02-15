import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

// React Icons
import { BsSearch } from 'react-icons/bs';

// Routes
import Home from './routes/Home';
import Find from './routes/Find';

const App = () => {
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

          <Link to="/search" title="Search">
            <BsSearch />
          </Link>
        </header>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/search" element={<Find />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
