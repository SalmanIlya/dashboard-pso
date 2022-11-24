import React from 'react'
import SideNav from "./Component/Navbar/SideNav"
import "./App.css"
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Component/Routes/Dashboard/Dashboard'
import Products from './Component/Routes/Products/Products'
import NewProduct from './Component/Routes/NewProduct/NewProducts'
import Order from './Component/Routes/Orders/Order'
import Expense from './Component/Routes/Expense/Expense'
import Setting from './Component/Routes/Setting/Setting'
import DeleteProducts from './Component/Routes/DeleteProducts/DeleteProducts'
import PSO from "./Component/Routes/PSO/PSO"
import NewExpance from './Component/Routes/New Expense/NewExpance'
const App = () => {
  return (
    <div className='bg-light'>
    <Navbar/>
        <div className='d-flex'>
      <SideNav/>
      <main className='bg-light'>
        <Routes>
          <Route exect path='/dashboard' element={<Dashboard/>} />
          <Route exect path='/products' element={<Products/>} />
          <Route exect path='/new/product' element={<NewProduct/>} />
          <Route exect path='/orders' element={<Order/>} />
          <Route exect path='/delete/products' element={<DeleteProducts/>} />
          <Route exect path='/pso' element={<PSO/>} />
          <Route exect path='/expense' element={<Expense/>} />
          <Route exect path='/new/expense' element={<NewExpance/>} />
          <Route exect path='/setting' element={<Setting/>} />
        </Routes>
      </main>
    </div>
    </div>

  )
}

export default App