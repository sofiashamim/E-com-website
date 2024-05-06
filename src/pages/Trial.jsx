import React, { useState } from 'react'

const Trial = () => {

    const [arr, setarr] = useState([
    "Jeans",
    "T-shirt",
    "Bag",
    "Clock",
    "Iphone",
    "Samsung",
    "Apple",
    "Motorola"

    ]);

    const [filteredProducts, setfilteredProducts] = useState([]);

    const handleInputChange=(e)=>{
        console.log(e.target.value)
        let filterArr= arr.filter((ele)=>ele.toLowerCase().includes(e.target.value))
    console.log(filterArr)
    setfilteredProducts(filterArr)

    }


  return (
    <div>
        <input onChange={handleInputChange} type="text" placeholder='search your items...' />
{filteredProducts && <>
{filteredProducts.map((ele,i)=>{
    return <p key={i}>{ele}</p>
})}
</>}

{ !filteredProducts.length && <>
{arr.map((ele,i)=>{
    return <p key={i}>{ele}</p>
})}
</>}
      
    </div>
  )
}

export default Trial
