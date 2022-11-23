import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BiEdit} from "react-icons/bi"
import {GrView} from "react-icons/gr"
import {RiDeleteBin6Line} from "react-icons/ri"

import "./style.css"
const Products = () => {
    const [allProduct,setAllProdyct]=useState([])
    const [a,b]=useState(0)
    const [c,d]=useState(5)
    useEffect(()=>{
        const fetchdata=async ()=>{
            await axios("https://fakestoreapi.com/products").then((response)=>{
                setAllProdyct(response.data)
                return response.data
            })
        }
        fetchdata()
    })
  return (
    <div className='m-5 '>
<table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Edit</th>
      <th scope="col">View</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {allProduct.slice(a,c).map((item)=>{
        return   <tr>
        <th scope="row">{item.id}</th>
        <td><img src={item.image} className="image"/></td>
        <td>{item.title.slice(0,10)}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td><GrView/></td>
        <td><BiEdit/></td>
        <td><RiDeleteBin6Line/></td>
      </tr>

    }) }
  
  </tbody>
</table>
<div className='d-flex flex-row justify-content-between text-center'>
<button className='btn btn-dark m-5' onClick={()=>{
    if(a===0){
        b(0)
        d(5)
    }else{
        b(a-5)
        d(c-5)
    }
}}>Peverious</button>
<button className='btn btn-dark m-5'onClick={()=>{
    if(allProduct.length===c||allProduct.length<=c){
        b(0)
        d(5)
    }else{
        b(a+5)
        d(c+5)
    }
}}>Next</button>

</div>
    </div>
  )
}

export default Products