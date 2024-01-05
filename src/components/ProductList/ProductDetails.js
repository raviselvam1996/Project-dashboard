import React,{useState} from "react";
import Button from "./Button"




function ProductDetails(props){



    // let productCount = 0;

    let [productCount,uptateCount] = useState(0)
    function displayProduct(){
    
      return  productCount > 0 ? productCount : "Zero";
    }
    // let isAvailable = "unAvailable"

    let badgeClass = "badge "
    
    
    badgeClass += props.isAvailable ? "bg-success" : "bg-danger"

    


    function increment(){
//         productCount++;
// console.log(productCount);
uptateCount(++productCount)
        
    }
    function decrement(){
//         productCount--;
// console.log(productCount);
uptateCount(--productCount)

    }

    return (<>

<div className="d-flex align-item-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{marginRight:30}}>{props.price}</h6>
            <Button eventHandler={decrement}>-</Button>
            <span style={{padding: '0px 20px',fontSize:'14px' }}>{displayProduct()}</span>
            <Button eventHandler={increment}>+</Button>

            <span className={badgeClass} style={{marginLeft:230}}>{props.isAvailable ? 'Available' : 'unAvailable'}  </span>


            </div>
    
    
    
    </>)

}


export default ProductDetails ;