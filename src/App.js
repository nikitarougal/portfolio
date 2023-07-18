import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
// import './index.css';
// import './styles.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/portfolio" element={Portfolio} />
            <Route path="/contact" element={Contact} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
