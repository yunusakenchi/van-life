import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';

import HostLayout from './pages/host/HostLayout';
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';

import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='vans' element={ <Vans /> } />
          <Route path='vans/:id' element={ <VanDetail /> } />

          <Route path='host' element={ <HostLayout /> }>
            <Route index element={ <Dashboard /> } />
            <Route path='income' element={ <Income /> } />
            <Route path='vans' element={ <HostVans /> } />

            <Route path='vans/:idNumber' element={ <HostVanDetail /> }>
              <Route index element={ <HostVanInfo /> } />
              <Route path='pricing' element={ <HostVanPricing /> } />
              <Route path='photos' element={ <HostVanPhotos /> } />
            </Route>
            <Route path='reviews' element={ <Reviews /> } />
          </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
