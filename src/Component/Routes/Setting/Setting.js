import React from 'react'
import {MdAttachMoney} from "react-icons/md"
import {BiWalletAlt} from "react-icons/bi"
import "./style.css"
const Setting = () => {
  return (
    <div className='container'><h3 className='m-4 text-center'><strong>Settings</strong></h3>
   <div className='main-box'>
    <div>
      
    </div>
    <div className='s-box-1 shadow'>
    <div className='f-box' >
      <div><p><strong>EARNINGS</strong></p></div>
    <div><MdAttachMoney className='h3 icon'/></div>
    </div>
    <h3>RS. 762250</h3>
    </div>
 <div className='s-box-2 shadow'>
 <div  className='f-box'>
    <div> <p><strong>PROFIT</strong></p> </div>
    <div><BiWalletAlt className="h3 icon"/></div></div>
    <h3>RS. 762250</h3>

 </div>
    
    </div> 
    
    
    </div>
  )
}

export default Setting