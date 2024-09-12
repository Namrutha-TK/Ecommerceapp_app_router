import { ServiceBase } from "./Service_Base";

export class CartService extends ServiceBase{
    static async QuantityChange(itemId:any,quntity:any){
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
                throw new Error('Failed to decrease cart item quantity');
            }
            const data=await response.json();
           // updateCartCount(data.total_unique_items)
           // route.refresh();
    
            console.log('Cart item quantity decreased successfully');
        } catch (error) {
            console.error('Error decreasing cart item quantity:', error);
        }

    }

}