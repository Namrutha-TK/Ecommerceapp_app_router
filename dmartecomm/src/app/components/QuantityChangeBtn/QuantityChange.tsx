'use Client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { useCartCount } from '../../context/CartContext'


export default function QuantityChange({text,quntity,itemId}:any) {

    const {updateCartCount}=useCartCount();
    const route=useRouter()
    const quantityChangeFromCart = async () => {
      
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_0YnEoq9L0Loe7P/items/${itemId}`, {
                method: 'PUT',
                headers: {
                    'X-Authorization':'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: quntity
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to change cart item quantity');
            }
            const data=await response.json();
            updateCartCount(data.total_unique_items)
            route.refresh();
    
            console.log('Cart item quantity changed successfully');
        } catch (error) {
            console.error('Error changing cart item quantity:', error);
        }
    }


  return (
    <button type='button' className="btn btn-dark " onClick={quantityChangeFromCart} >{text}</button>
  )
}
