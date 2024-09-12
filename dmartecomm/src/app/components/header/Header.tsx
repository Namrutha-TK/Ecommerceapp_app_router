import React from 'react'
import Link from 'next/link'
import { MerchantService } from '@/app/services/Merchant_Service'

export default async function Header() {
  let logoUrl="";
  console.log("Header");
  logoUrl=await MerchantService.getMerchant();
  return (
    <div className='container-fluid m-0 p-0 bg-primary '>
  
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ml-5">
  <a className="navbar-brand text-light ml-5 pl-5" href="#">
      <img src={logoUrl} alt="Logo" width="50" height="44" className="d-inline-block align-text-center" />
      &nbsp;Dmart
    </a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link href={"/"} className="nav-link text-light fs-5" aria-current="page" >Home</Link>

        </li>
        <li className="nav-item">
          <Link href={"/products"} className="nav-link text-light fs-5" >Products</Link>
          
        </li>
        <li className="nav-item">
        <Link href={"/about-us"} className="nav-link text-light fs-5" >About US</Link>
         
        </li>
        <li className="nav-item">
        <Link href={"/contact-us"} className="nav-link text-light fs-5" >Contact US</Link>
  
        </li>
        <li className="nav-item">
        <Link href={"/cart"} className="nav-link text-light fs-5" >Cart</Link>
  
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
