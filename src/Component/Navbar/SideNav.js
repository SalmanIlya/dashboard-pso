import React from 'react'
import {MdSpaceDashboard} from "react-icons/md"
import {SiProducthunt} from "react-icons/si"
import {AiFillDelete,AiFillCreditCard,AiFillSetting} from "react-icons/ai"
import {BsShop} from "react-icons/bs"
import {RiMoneyDollarCircleFill} from "react-icons/ri"
import "./style.css"
import { Link } from 'react-router-dom'
const SideNav = () => {
  return (
    <div className='sidenav bg-dark'>
        <div className='nav mt-5'>
            
<ul>
    <Link className='text-light text-decoration-none' to="/"><li><MdSpaceDashboard className='h6 mb-4'/><p>Dashboard</p></li></Link> 
    <Link className='text-light text-decoration-none' to="/products"><li><BsShop className='h6 mb-4' /><p>Products</p></li></Link> 
    <Link className='text-light text-decoration-none' to="/new/product">   <li><SiProducthunt className='h6 mb-4' /> <p>New Product</p></li></Link>
    <Link className='text-light text-decoration-none' to="/delete/products"><li><AiFillDelete className='h6 mb-4' /><p>Delete Product</p></li></Link>
    <Link className='text-light text-decoration-none' to="/orders"><li><AiFillCreditCard className='h6 mb-4' /><p>Order</p></li></Link> 
    <Link className='text-light text-decoration-none' to="/expense"><li><RiMoneyDollarCircleFill className='h6 mb-4' /> <p>Expense</p></li></Link>
    <Link className='text-light text-decoration-none' to="/setting"><li><AiFillSetting className='h6 mb-4' /><p>Setting</p></li></Link> 
</ul>
        </div>
    
    </div>
  )
}

export default SideNav