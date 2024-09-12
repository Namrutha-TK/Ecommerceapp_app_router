import { ServiceBase } from "./Service_Base";

export class MerchantService extends ServiceBase{
    static getMerchant=async()=>{
    try {var merchantResp=await fetch(this.getUrl('/merchants'),{
        method:'GET',
        headers:{
            'X-Authorization':'pk_580671f4f12b666e74ce4a6d5aa44e46b4125a3de0fac',
             
        },
    });
     if (!merchantResp.ok) {
         throw new Error(`HTTP error! Status: ${merchantResp.status}`);
       } 
    var data =await merchantResp.json();
    if (data?.data?.[0]?.images?.logo) {
        return(data.data[0].images.logo.url);
       
    } else {
       return '';
    }
     
     
    
      
    }catch(error){
        console.error("Error fetching products:", error);
        return ("null");  
      }
    }

}