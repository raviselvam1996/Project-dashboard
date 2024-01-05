import React, { useState } from "react";

import ProductForm from "./ProductForm"

function CreateProduct(props){
   let [showForm,updateShowForm] = useState(false);

    function onCreateProduct(product){
        props.createProducts(product);
    }

  function createProductForm (){
    updateShowForm(true)
  }

  function onCancel(){
    updateShowForm(false)

  }

return (<>

    <div style={{backgroundColor:"white",padding:'10px 20px',borderRadius:5}}>
      { !showForm && <button className="btn btn-primary" onClick={createProductForm}>Create a Product</button>}
{showForm && <ProductForm createProduct={onCreateProduct} onCancelForm={onCancel}></ProductForm>}

    </div>



</>)

}

export default CreateProduct