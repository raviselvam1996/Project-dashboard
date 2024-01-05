import React,{useState} from "react";

import ProductList from "./components/ProductList/ProductList";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import FilterProducts from "./components/FilterProducts/FilterProducts"

const products = [

  {
    pid: 1,
    name: 'Fresh Milk',
    dec: 'jshdhfh sdjfhjsdh jfhksdh sdhfkjsdjhfk hkskdfkh skhkdhkfhfkshdkfh ksdkjffh hksdhff',
    image: 'images/wgu.png',
    isAvailable:true,
    price:120
  },
  {
    pid: 2,
    name: 'Fresh Milk',
    dec: 'jshdhfh sdjfhjsdh jfhksdh sdhfkjsdjhfk hkskdfkh skhkdhkfhfkshdkfh ksdkjffh hksdhff',
    image: 'images/wp6.png',
    isAvailable:false,
    price:180
  }
]

function App() {

  let [newProductList,updateProductList] = useState(products)

  let [filterText,updateFilterText] = useState('all')


 let filteredProductList = newProductList.filter((product) => {

    if(filterText === 'available'){
      return product.isAvailable === true;

    }
    else if(filterText === 'unavailable'){
      return product.isAvailable ===  false;
    }
    else{
      return product;
    }

  })


  function filterValueSelected(filterValue){

    updateFilterText(filterValue)
  }
  

  function createProduct(product){

    product.pid = newProductList.length + 1;
    updateProductList([product,...newProductList])
    console.log(product);
  }
 return (<>
 <div className='row pt-5' >
    <div className="col-md-8 mx-auto">
 <CreateProduct createProducts={createProduct}></CreateProduct>
 <FilterProducts filterValueSelected={filterValueSelected}></FilterProducts>
 <ProductList newProductList={filteredProductList}></ProductList>
 </div>
 </div>
 
 </>)
}

export default App;
