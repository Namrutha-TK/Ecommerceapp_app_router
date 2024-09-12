import Image from "next/image";
import styles from "./page.module.css";
import { ProductService } from "./services/Products_Service";

export default async function Home() {
  // let cart=await ProductService.fetchCart();
  // console.log("cart",cart);
  //localStorage.setItem("cartId", cart.id);
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
       
         <img src={"/b1.jpg"} className="d-inline w-100" height={350} alt="..." /> 
      </div>
      <div className="carousel-item">
      
         <img src={"/b2.jpg"} className="d-inline w-100" height={350} alt="..." /> 
      </div>
      <div className="carousel-item">
      
         <img src={"/b3.jpg"} className="d-inline w-100" height={350} alt="..." /> 
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  

  );
}
