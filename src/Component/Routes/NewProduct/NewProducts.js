import React from 'react'
import { CiImport } from 'react-icons/ci'
import { FcSearch } from 'react-icons/fc'
import "./style.css"
const NewProduct = () => {
  return (
    <div className='m-5'>
<div className='new-product-input-div mt-5 p-3 shadow'>
  <div className='d-flex flex-column '>
    <h5>Add new Product</h5>
    <h5>Product Information</h5>
    </div>
    <div className='d-flex '>
    <div className='d-flex flex-column input-div'>
  <label form='name'>Name:</label>
  <input type="text" className=' input shadow' placeholder="Product Name" />
 </div>
 <div className='d-flex flex-column input-div'>
  <label form='price'>Price:</label>
  <input type="text" className=' input shadow' placeholder="Product Price" />
 </div>
 <div className='d-flex flex-column input-div'>
  <label form='category'>Category:</label>
  <input type="text" className=' input shadow' placeholder="Product Category" />
 </div>
 <div className='d-flex flex-column input-div'>
  <label form='code'>Code:</label>
  <input type="text" className=' input shadow' placeholder="Product Code " />
 </div>
    </div>
    <div className='size-qty shadow'> 
    <h3 className='text-center p-3'><strong> Size and Quantity</strong></h3>
    <div className='m-3 d-flex flex-row justify-content-between '>
                <div className=''> <FcSearch/><input className='input-item' placeholder='Search...'/></div>
                <div><CiImport className='h4'/></div>
            </div>
    <table class="table text-center">
  <thead>
    <tr>
      <th scope="col">Size</th>
      <th scope="col">QTY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>small</td>
      <td><input className='w-25 input' placeholder='Type Quantity' /></td>
    </tr>
    <tr>
      <td>middim</td>
      <td><input className='w-25 input' placeholder='Type Quantity' /></td>
    </tr>
    <tr>
      <td>large</td>
      <td><input className='w-25 input' placeholder='Type Quantity' /></td>
    </tr>
    <tr>
      <td>7</td>
      <td><input className='w-25 input' placeholder='Type Quantity' /></td>
    </tr>
    <tr>
      <td>8</td>
      <td><input className='w-25 input' placeholder='Type Quantity' /></td>
    </tr>

    
     
   
  </tbody>
</table>
    </div>
 
</div>

    </div>
  )
}

export default NewProduct