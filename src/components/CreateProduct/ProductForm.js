import React,{useState} from "react"

function ProductForm(props){


   let [pName,uptateName] =  useState('')
   let [pPrice,uptatePrice] =  useState('')
   let [pDescription,uptateDescription] =  useState('')
   let [pAvailable,uptateAvailable] =  useState(false)
   let [pImageUrl,uptateImageUrl] =  useState('')


   function nameInputHandler(event){
    uptateName(event.target.value)
   }

   function priceInputHandler(event){
    uptatePrice(event.target.value)
   }

   function decInputHandler(event){
    uptateDescription(event.target.value)
   }

   function availableInputHandler(event){
    uptateAvailable(event.target.value)
   }

   function imageInputHandler(event){
    uptateImageUrl(event.target.value)
   }

 function createProductEventHandler(event){
    event.preventDefault();

    let product =    {
        name: pName,
        price:Number(pPrice),
        dec: pDescription,
        image: pImageUrl,
        isAvailable:Boolean(pAvailable)
        
      }
      props.createProduct(product);
      uptateName('')
      uptatePrice('')
      uptateDescription('')
      uptateAvailable(false)
      uptateImageUrl('')
      
      props.onCancelForm()
 }




    return (<>
    
    <form className="row g-3" onSubmit={createProductEventHandler}>
<div className="col-md-6">
    <label for="name">Product Name</label>
    <input type="text" className="form-control" id="name" placeholder="ProductName" onChange={nameInputHandler} value={pName}/>

</div>

<div className="col-md-6">
    <label for="price">Product Price</label>
    <input type="number" className="form-control" id="price" placeholder="ProductName" onChange={priceInputHandler} value={pPrice}/>

</div>
<div className="form-group">
    <label for="description">Product description</label>
    <input type="text" className="form-control" id="description" placeholder="ProductName" onChange={decInputHandler} value={pDescription}/>

</div>
<div className="form-check form-switch">
    <input type="checkbox" className="form-check-input" role="switch" id="isAvailable" onChange={availableInputHandler} checked={pAvailable} />
    <label for="isAvailable" className="form-check-label">Product Name</label>

</div>

<div className="form-group">
    <label for="select-image">Select Product Image</label>
    <input type="file" className="form-control" id="select-image" onChange={imageInputHandler} value={pImageUrl} />

</div>

<button type="submit" className="btn btn-primary">Add Product</button>
<button type="button" className="btn btn-danger" onClick={props.onCancelForm}>Cancel</button>

    </form>
    
    </>)
}


export default ProductForm;