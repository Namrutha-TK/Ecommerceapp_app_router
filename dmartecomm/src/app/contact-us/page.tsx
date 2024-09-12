import React from 'react'

export default function Contact() {
  return (
    <div className='container-fluid bg-dark text-white m-0 p-0'>
        <div className='container'>
     
     <div className="  row">
       <div className='col-lg-8'
        
        >
         <h1 className="display-4 mb-4 pt-3">Contact Us</h1>
         <hr className="t_border my-4 ml-0 text-left" />
       </div>
     </div>
     <div className="sec_sp row">
       <div 

       className="col-lg-5 mb-5 ">
         <h3 className="color_sec py-4">Get in touch</h3>
     
           <strong>Email : hrsample.dmart@gmail.com</strong>
           <br />
           <br />
            <p>
               <strong>Phone : +91234567623455</strong>
             </p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum</p>
       </div>
       <div 
    
        className="d-flex align-items-center col-lg-7">
         <form  className="contact__form w-100">
           <div className='row'>
             <div 
            
             className="form-group col-lg-6">
               <input
                 className="form-control mb-3"
                 id="name"
                 name="name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
             </div>
             <div 
         
              className="form-group col-lg-6 ">
               <input
                 className="form-control rounded-0 mb-3"
                 id="email"
                 name="email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
             </div>
           </div>
           <textarea
             className="form-control rounded-0"
             id="message"
             name="message"
             placeholder="Message"  
            //  rows="3" 
             required
           ></textarea>
           <br />
           <div className='row'>
             <div 
            
              className="form-group col-lg-12">
               <button className="btn btn-outline-light " type="submit"> 
               Send
               </button>
             </div>
           </div>
         </form>
       </div>
     </div>
   </div>
    </div>

  )
}
