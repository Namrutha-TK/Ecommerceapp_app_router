import React from 'react'
import ProductCard from '../components/productCard/ProductCard';
import { ProductService } from '../services/Products_Service';
import './Products.css'

export default async function Products() {
    let products=[];
    console.log("products page executed");
    products=await ProductService.getProducts();
    console.log("products ",products);

  return (
    <div className='container-fluid'>
         <div className="container">
        
        <div className='product_List d-flex'>
      {

Array.isArray(products) && products.length > 0 ? (
products.map((p:any)=>(
  <ProductCard key={p.id} product={p}/>
))
) : (
<p>No products available</p>
)
}
</div>
</div>
    
    </div>
  )
}
