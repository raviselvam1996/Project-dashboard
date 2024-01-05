import React from "react";

import ProductDetails from "./ProductDetails";





function Products(props){

return (<>

    <li className="list-grop-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
            <div className="media-body order-2 order-lg-1">
                <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                <p className="font-italic text-muted mb-0 small">{props.dec}</p>
            
          <ProductDetails isAvailable={props.isAvailable} price={props.price}></ProductDetails>
            </div>
           
          
            <img src={props.image} alt="imagdees"  width="100" className="ml-lg-5 order-1 order-lg-6"/>

        </div>
    </li>
 

   


</>

)

}

export default Products