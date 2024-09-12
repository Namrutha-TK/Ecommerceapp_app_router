'use client';

import React, { useEffect ,useState} from 'react';
import { useRouter } from 'next/navigation';
import {useCartCount} from '../context/CartContext';
import { ProductService } from '../services/Products_Service'



export default  function Cart() {

    const [cartData, setCartData] = useState<any>(null);
    const {updateCartCount}=useCartCount();
    const route=useRouter();
     useEffect(()=>{
        async function fetchCartData() {
            try{
            const data = await ProductService.getCartData();
            setCartData(data);
            }catch(error){
                console.error('Error fetching cart data:', error);
            }
        }
        fetchCartData();
     },[])
   // let cartData=await ProductService.getCartData();
    

 async function changeQuantity(itemId:string ,quanti:number){

    try {
        console.log("itemid update cart q",itemId);
            const response = await fetch(`https://api.chec.io/v1/carts/cart_0YnEoq9L0Loe7P/items/${itemId}`, {
                method: 'PUT',
                headers: {
                    'X-Authorization':'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    quantity: quanti
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to change cart item quantity');
            }
            const data=await response.json();
            updateCartCount(data.total_unique_items)
            setCartData(data);
            // route.refresh();
    
            console.log('Cart item quantity changed successfully');
        } catch (error) {
            console.error('Error changing cart item quantity:', error);
        }
    }
    if (cartData === null) {
        return <div className='container p-2'><p>Loading...</p></div>;
    }

    const totalItems = cartData?.total_items ?? 0;
    const handleRemoveFromCart = async(itemId:string) => {
        console.log("itemid delete btn",itemId);
        try {
         const response = await fetch('https://api.chec.io/v1/carts/cart_0YnEoq9L0Loe7P/items/'+itemId,
          {
             method: "DELETE",
              headers: {
                "X-Authorization":"pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac",
                "Content-Type": "application/json",
            },
            });
          if (!response.ok) {
            throw new Error("Failed to delete cart item ");
          }
          const data = await response.json();
         // route.refresh()
        updateCartCount(data.total_unique_items);
        setCartData(data);
         
          console.log("Cart item deleted successfully");
       }catch(error) {
         console.error("Error deleteing cart item ", error);
        }
      };
      const clearAllCart = async () => {
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_0YnEoq9L0Loe7P/items/`, {
                method: 'DELETE',
                headers: {
                    'X-Authorization':'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Failed to clear cart');
            }

            const data = await response.json();
            updateCartCount(data.total_unique_items)
            setCartData(data);

        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };
 

  return (
    <div className='container p-2'>
              <div className='row m-2 '>
               {
                totalItems>0? (<div className='col-12  table-responsive'>
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col text-center">Actions</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.line_items&&cartData.line_items.map((product:any) => {
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <img src={product.image.url} alt={""} style={{ width: '100px' }} />
                                    </td>
                                    <td className='p-2'>{product.name}</td>
                                    <td>₹{product.price.raw}</td>
                                    <td className='text-center'>{product.quantity}</td>
                                    <td>
                                        <div className='d-flex gap-1'>
                                            
                                            <button type='button'onClick={()=>changeQuantity(product.id, product.quantity+1)}>+ </button>
                                           1 
                                          <button type='button'onClick={()=>changeQuantity(product.id, product.quantity-1,)}>-</button>
                                     
                                       </div>
                                        
                                    </td>
                                    <td>₹{product.line_total && product.line_total.raw}</td>
                                    <td>
                                    <button type='button' className="btn btn-warning" onClick={()=>handleRemoveFromCart(product.id)}>Remove</button>
                                        
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            ):(<div className='m-2 row justify-content-center'>
           <h4>No data</h4>
               
                </div>)
            }
                <div className='row align-items-center mt-3 d-flex flex-row-reverse'>
                    <div className="col-md-6 col-12 ">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title mb-2 ">Cart Total Details</h5>
                                <hr />
                                <p className=''>Subtotal: ₹{cartData?.subtotal && cartData.subtotal.raw}</p>
                                <hr />
                                <p>Shipping Fee: Free</p>
                                <hr />
                                <p>Total: ₹{cartData?.subtotal && cartData.subtotal.raw}</p>
                                <hr />
                                <button type='button' className="btn btn-warning btn-block pay-btn">Proceed to Pay</button>
                                
                                <button className="btn btn-danger btn-block pay-btn mx-2" onClick={clearAllCart}>Clear All</button> 
                                </div>
                        </div>
                    </div>
                   
                </div>
            </div>  

            
        </div>
  )
}
