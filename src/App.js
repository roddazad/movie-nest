import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path ="/" element={<Home />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
