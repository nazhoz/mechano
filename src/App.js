import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/navbar/Layout';
import Home from './components/Home/Home';
import PerodicServices from './components/perodicservices/PerodicServices';
import AcRepaires from './components/ac&repaires/AcRepaires';
import Batteries from './components/Batteries/Batteries';
import TyreWheels from './components/Tyre&Wheels/TyreWheels';
import Painting from './components/Painting/Painting';
import DetailService from './components/DetailingService/DetailService';
import WindShieldLight from './components/WindSheildLights/WindShieldLight';
import Suspensions from './components/Suspension/Suspensions';
import ClutchBodys from './components/Clutchbodys/ClutchBodys';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='PerodicServices' element={<PerodicServices/>}/>
    <Route path='AcRepaires' element={<AcRepaires/>}/>
    <Route path='Batteries' element={ <Batteries/>}/>
    <Route path='TyreWheels' element={<TyreWheels/>}/>
    <Route path='Painting' element={<Painting/>}/>
    <Route path='DetailService' element={<DetailService/>}/>
    <Route path='WindShieldLight' element={<WindShieldLight/>}/>
    <Route path='Suspensions' element={<Suspensions/>}/>
    <Route path='ClutchBodys' element={<ClutchBodys/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
