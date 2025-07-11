import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Service from './components/Service'
import Signup from './components/Signup'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Login from './components/Login'
import Product from './components/Product'
import Footer from './components/footer'

const App = () => {

  const [cart, setCart] = useState([])


  return (
    <div>
      <BrowserRouter>
        <div className="">
          <Header cart={cart} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Menu' element={<Menu cart={cart} setCart={setCart} />}></Route>
            <Route path='/Service' element={<Service />}></Route>
            <Route path='/Signup' element={<Signup />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/item/:id' element={<Detail />} />
            <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
