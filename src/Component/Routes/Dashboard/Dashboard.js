import React from 'react'
import {IoMdContact} from "react-icons/io"
import {BsFillCartFill} from "react-icons/bs"
import {CiImport} from "react-icons/ci"
import {FcSearch} from "react-icons/fc"
import "./style.css"
const Dashboard = () => {
  return (
    <div className='container  home'  >
        <div className='m-div '>
        <div className='shadow box1'>
            <div className='customer-main-div'>
            <div className='c-box-1'><p><strong> CUSTUMER</strong></p></div>
            <div className='c-box-2'><IoMdContact/></div>
            </div>
            <h3>0</h3>
        </div>
        <div className='shadow box2'>
        <div className='customer-main-div'>
            <div className='c-box-1'><p><strong>ORDERS</strong></p></div>
            <div className='c-box-2'><BsFillCartFill/></div>
            </div>
            <h3>0</h3>
        </div>
        </div>
        <div className='m-5'>
        <div className='box-3 shadow p-3'>
            <h5>Latest Transactions</h5>
            <div className='m-3 d-flex flex-row justify-content-between'>
                <div className=''> <FcSearch/><input className='input-item' placeholder='Search...'/></div>
                <div><CiImport className='h4'/></div>
            </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Dashboard