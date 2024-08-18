import './App.css'
import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Services from './Pages/Services'
import Pricing from './Pages/Pricing'
import ServicesDetails from './Pages/ServicesDetails'
import Add from './components/Add'
import Team from './Pages/Team'
import Shop from './Pages/Shop'
import ShopDetails from './Pages/ShopDetails'
import ContactUs from './Pages/ContactUs'
import { ToastContainer } from 'react-toastify'





const App:React.FC= () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/services-details' element={<ServicesDetails/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop-details' element={<ShopDetails/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
   
    <Footer/>
    <Add/>
      </BrowserRouter>
    
    </div>
  )
}

export default App
