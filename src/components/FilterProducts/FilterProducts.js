import React from "react"
import './FilterProduct.css'



 let FilterProducts = (props) => {

    function filterFunction(event){
        props.filterValueSelected(event.target.value);


    }


    return (<>
    <div className="filter-area">
        <select name="isAvailable" onChange={filterFunction}>
            <option value="all">All</option>
            <option value="available">Available</option>

            <option value="unavailable">unAvailable</option>


        </select>
    </div>
    
    
    </>)

}
export default FilterProducts;