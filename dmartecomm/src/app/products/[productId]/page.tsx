'use client'

import React from "react";
import { useState,useEffect } from "react";
import { ProductService } from "@/app/services/Products_Service";
import AddToCart from "@/app/components/AddToCart/AddToCart";

interface Product {
  id: string;
  name: string;
  description: string;
  price: { formatted: string };
  image: { url: string };
}
export default  function ProdutDetail(props:any){

    console.log (props);
    const productId=props.params.productId;
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
      const fetchProductDetails = async () => {
          if (productId) {
              try {
                  const fetchedProduct = await ProductService.getProductById(productId as string);
                  console.log('product detail', fetchedProduct);
                  setProduct(fetchedProduct);
              } catch (error) {
                  console.error('Failed to fetch product:', error);
              }
          }
      };
      fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
}
    
     const cleanedDescription1 = product?.description?.replace(/<[^>]*>?/gm, '') || '';

    return(
        <div className='container'>
        <div className="card mb-3" style={{maxWidth:"540px", height:'400px'}}>
     <div className="row g-0">
    <div className="col-md-4">
      <img src={product && product.image && product.image.url} width={"100%"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
       
        <p className="card-text"><small className="text-body-secondary">{cleanedDescription1}</small></p>
        <p className="card-text"><span className="price_symbol" style={{position:'relative',top:'-3px'}}>₹</span><span style={{fontSize:'20px' ,fontWeight:'500px'}}>{product&& product.price&&product.price.formatted}</span></p>
        <button className="btn btn-warning " >Back</button>&nbsp;
           <AddToCart prdId={product.id}/>

      </div>
    </div>
  </div>
</div>

    </div>

    )
}