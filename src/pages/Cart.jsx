import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {

  let ctx= useContext(CartContext)
  console.log(ctx.cartItem)

  let price=0;
   for(let i=0;i<ctx.cartItem.length;i++) {
    
   }



let sum =0;
  ctx.cartItem.forEach((item)=>{
    console.log(item.price)
    sum = sum+item.price

  })
  console.log(sum)


const handleDelete=(ans)=>{
  console.log(ans)
  ctx.removeFromCart(ans)
}

  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {ctx.cartItem.map((ele,i)=>{
      return<tr className='align-middle'>
      <th scope="row">{i+1}</th>
      <td ><img style={{height:"100px", width:"100px"}} src={ele.thumbnail} alt="" /></td>
      <td>{ele.title}</td>
      <td>{ele.price}</td>
      <td><button onClick={()=>{ctx.incrementQuantity(ele)}} className='btn btn-primary'>+</button> {ele.quantity} <button onClick={()=>{ctx.decrementQuantity(ele)}} className='btn btn-primary'>-</button></td>
      <td><button onClick={()=>{handleDelete(ele)}} className='btn btn-danger'>Delete Item</button></td>
    </tr>

    })}
    
  </tbody>
</table>
{ctx.cartItem.length>0 && <h3 className='text-center'>Total = {sum}</h3>}
    </div>
  )
}

export default Cart
