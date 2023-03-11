import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className='header'>
      <Link to="/" className='site-logo' >#VANLIFE</Link>
        <nav>
          <Link to="/about" >About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
