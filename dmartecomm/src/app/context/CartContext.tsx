'use client';
import React,{useState,useContext, createContext,ReactNode ,useEffect} from "react";

import { ProductService } from "@/app/services/Products_Service";

type CartCountContextType = {
  cartCount: number;
  updateCartCount: (count: number) => void;
};

const CartCountContext = createContext<CartCountContextType | undefined>(undefined);

export const useCartCount = () => {
  const context = useContext(CartCountContext);
  if (!context) {
    throw new Error('useCartCount must be used within a CartCountProvider');
  }
  return context;
};

type CartCountProviderProps = {
  children: ReactNode;
};
//let cartData:any;
export const CartCountProvider: React.FC<CartCountProviderProps> = ({ children }) => {
  const [cartCount, setCartCount] = useState<number>(0);
  useEffect(() => {
   
    const getInitalCart=async()=>{
     const  cartData=await ProductService.getCartData()
      setCartCount(cartData.total_unique_items)
    }
  
    getInitalCart()
    
  }, []);
  


const updateCartCount = (count: number) => {
  setCartCount(count);
};
return (
  <CartCountContext.Provider value={{ cartCount, updateCartCount }}>
    {children}
  </CartCountContext.Provider>
);
};

   
   
   


export default CartCountContext ;


