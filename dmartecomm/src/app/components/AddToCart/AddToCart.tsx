'use Client'
import React from 'react'
import { useCartCount } from '../../context/CartContext'
import { useRouter } from 'next/navigation';
import { ProductService } from '@/app/services/Products_Service';

export default function AddToCart({prdId}:any) {
    
    const {updateCartCount}= useCartCount();
    const route=useRouter();

    const handleAddToCart=async()=>{
        let product= await ProductService.addToCart(prdId);
        if(product){
            updateCartCount(product.total_unique_items);
              route.refresh();
           }
    }

  return (
    <button type='button' className='btn btn-success' onClick={handleAddToCart}>Add to Cart</button>
  )
}
