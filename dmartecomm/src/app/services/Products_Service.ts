import { ServiceBase } from "./Service_Base";

export class ProductService extends ServiceBase{
    static getProducts=async()=>{
        try {var productsResp=await fetch(this.getUrl('/products'),{
            method:'GET',
            headers:{
                'X-Authorization':'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac',
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
        if (!productsResp.ok) {
            throw new Error(`HTTP error! Status: ${productsResp.status}`);
          }
        var data=await productsResp.json();
        
        return data.data || [];
        }catch(error){
            console.error("Error fetching products:", error);
            return [];  
          }
        }

        static getProductById= async(id:string)=>{
            try{ var productsResp=await fetch(this.getUrl('/products/'+id),{
             method:'GET',
             headers:{
                 'X-Authorization':'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac',
                 "Accept": "application/json",
                 "Content-Type": "application/json",
             }
            });
             var product=await productsResp.json();
             return product;
         }catch(error){
             console.error("Error fetching products:", error);
         }
         
           }

           

          //  static  fetchCart = async()=> {
          //    try {
          //      var cartResponse = await fetch(this.getUrl('/carts'), {
          //        method: "GET",
          //        headers: {
          //          "X-Authorization": "pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac",
          //        },
          //      });
          //      if (cartResponse.ok) {
          //        var data = await cartResponse.json();
          //        //return(data);
          //        console.log("cart",data)
          //        //localStorage.setItem("cartId", data.id);
          //      } else {
          //        throw new Error("Failed to fetch cart");
          //      }
          //    } catch (error) {
          //      console.error("Error fetching products:", error);
          //    }
          //  }
        
           

           static getCartData = async () => {
           // var cartId=localStorage.getItem("cartId");
          //  let cartId="cart_0YnEoq9L0Loe7P";
            try {
              const response = await fetch(this.getUrl('/carts/cart_0YnEoq9L0Loe7P'), {
                cache:"no-cache",
                method: 'GET',
                headers: {
                    'X-Authorization': 'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac'
                }
            });
              
            console.log(response);
    
                if (!response.ok) {
                    throw new Error('Failed to fetch cart data');
    
                }
    
                const cartsData = await response.json();
                
                
               return cartsData
                
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        static async addToCart(itemId: any) {
            try {
              const response = await fetch('https://api.chec.io/v1/carts/cart_0YnEoq9L0Loe7P/', {
                method: 'POST',
                headers: {
                  'X-Authorization': 'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: itemId,
                  quantity: 1
                })
              });
        
              if (!response.ok) {
                throw new Error('Failed to add item to cart');
              }
        
              const data = await response.json();
              return data
              
            } catch (error) {
              console.error('Error adding item to cart:', error);
            }
          }

}