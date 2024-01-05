import Products from "./products";


function ProductList(props){


    return (
    <ul className="card" >

        {
          props.newProductList.map((product) => {

            return       <Products 
            key={product.pid}
            id={product.pid} 
             name={product.name} 
             dec={product.dec} 
             image={product.image} 
             isAvailable={product.isAvailable}
             price={product.price} ></Products>  

          })  
        }

   

</ul>
   
  );

}

export default ProductList;