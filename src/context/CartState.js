import React, { useState } from 'react'
import CartContext from './CartContext'

const CartState = (props) => {

    const [cartItem, setcartItem] = useState([]);

    const [Navsearch, setNavsearch] = useState("");


    const addToCart=(obj)=>{
        console.log(obj)
        // setcartItem([...cartItem,obj])
        // console.log(cartItem)
        let itemExists =cartItem.find((ele)=>ele.id===obj.id)
        console.log(itemExists)
        if (!itemExists) {
          // ctx.
          setcartItem([...cartItem,obj])
          
        }

    }

    const removeFromCart=(ans)=>{
      console.log(ans)
      let filteredArr=cartItem.filter((ele)=>ele.id!==ans.id)
      console.log(cartItem)
      console.log(filteredArr)
      setcartItem(filteredArr)
    }

    const incrementQuantity=(ans)=>{
      let updatedObj={
        ...ans,
        quantity:ans.quantity+1,
        price:ans.price+ans.price/ans.quantity
      }
      console.log(updatedObj)

      let findIndex= cartItem.findIndex((ele)=>ele.id===ans.id)
      console.log(findIndex)
      let copyArr =[...cartItem]
      copyArr[findIndex] = updatedObj
      setcartItem(copyArr)

    }

    const decrementQuantity=(ans)=>{
      let updatedObj={
        ...ans,
        quantity:ans.quantity>1?ans.quantity-1 :ans.quantity,
        price:ans.quantity>1?ans.price-ans.price/ans.quantity :ans.price
      }
      console.log(updatedObj)

    let findIndex= cartItem.findIndex((ele)=>ele.id===ans.id)
    console.log(findIndex)
    let copyArr =[...cartItem]
    copyArr[findIndex] = updatedObj
    setcartItem(copyArr)

    }

  return (
    <CartContext.Provider value={{Navsearch, setNavsearch,cartItem, addToCart, removeFromCart, incrementQuantity, decrementQuantity}}>
        {props.children}
      
    </CartContext.Provider>
  )
}

export default CartState
