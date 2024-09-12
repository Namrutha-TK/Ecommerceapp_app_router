import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="container-fluid mt-0  p-0 footer mb-5">
            
    <div className='container-fluid footer_content m-0 mb-5'>
    <div className='container '>
    <div className="sub2">
        <div className="subLists gap-4">
            <div className='colSub  get_know '>
                <li className='heading'>Get to Know <br/>Us</li>
                <li><a href="#" className='text' >About Us</a>
                    </li>
                <li>
                    <a href='#' className='text'>Careers</a>
                   </li>
                <li>
                    <a href='#' className='text'>Press Releases</a>
                    </li>
               
            </div>
            <div className='colSub connect'>
                <li className='heading'>Connect with <br/>Us</li>
                <li>
                    <a href='#' className='text'>Facebook</a>
                    </li>
                <li>
                    <a href='#' className='text'>Twitter</a>
                   </li>
                <li>
                    <a href='#' className='text'>Instagram</a>
                   </li>
            </div>
            <div className='colSub  p-4'>
                <li className='heading '>Make Money with Us</li>
                <li>
                <a href='#' className='text'>Sell On Ekart</a>
               </li>
                <li><a href='#' className='text'>Sell under Ekart <br/> Accelerator</a>
                 </li>
                <li>
                <a href='#' className='text'>Protect and Build Your Brand</a>
                   </li>
                
                <li>
                    <a href='#' className='text'>Advertise Your Products</a>
                    </li>
                
             </div>
             
                 <div className='colSub mt-4'>
                    <li className='heading'>Let Us Help You </li>
                  
                    <li> 
                        <a href='#' className='text'>Your Account</a>
                        </li>
                    <li>
                        <a href='#' className='text'>Returns Center</a>
                        </li>
                    <li>
                        <a href='#' className='text'>Recalls and Product Safety <br/>Alerts</a>
                    </li>
                    <li>
                        <a href='#' className='text'>100% Purchase Protection</a>
                    </li>
                  
                    <li>
                        <a href='#' className='text'>Help</a>
                     </li>
                        
                 </div>
        </div>
        
    </div>
    </div>
    <div className='row'>
    <div className="copy_right">
      <p className='text-white mt-5 text-center mb-5'>Copyright &copy; 2023 Dmart.All rights reserved</p>
</div>
    </div>
    </div>


</div>
  )
}
