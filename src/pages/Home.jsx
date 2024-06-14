import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const Home = () => {

  let ctx= useContext(CartContext)
  console.log(ctx)

    const [items, setitems] = useState([]);
    const [searchItem, setsearchItem] = useState([]);
    const [currentPage, setcurrentpage] = useState(1);
    let recordPerpage= 15
    let lastIndex= currentPage * recordPerpage;
    let firstIndex= lastIndex - recordPerpage;

    let noOfPages= Math.ceil(items.length/recordPerpage)
    let buttonArray= [...Array(noOfPages+1).keys()].slice(1);
    // console.log(buttonArray)
    // console.log(sliceItem)


    const [categories, setcategories] = useState(["All","smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"]);

    console.log(ctx.Navsearch)

  

    const filteredItem= searchItem.filter((ele)=>ele.title.toLowerCase().includes(ctx.Navsearch))
    let sliceItem=filteredItem.slice(firstIndex,lastIndex)
console.log(filteredItem)


    async function fetchdata(){
       let response= await axios.get('https://dummyjson.com/products?/posts?skip=5&limit=100')
       console.log(response.data.products)
       setitems(response.data.products)
       setsearchItem(response.data.products)
    }

  useEffect(()=>{
    fetchdata()
  },[])

  const handleAddToCart=(ans)=>{
    console.log(ans)
    let obj={
      ...ans,
      quantity:1
    }
    console.log(obj)
    ctx.addToCart(obj)
  }

  const handleLiClick=(ans)=>{
    console.log(ans)
    if(ans!=="All"){
      let filteredProducts= items.filter((ele)=>ele.category.toLowerCase()===ans)
      console.log(filteredProducts)
      setsearchItem(filteredProducts)
    }
    else{

      setsearchItem(items)
    }
   
  }

  const handleNext=()=>{
    if (currentPage<noOfPages){
      setcurrentpage(currentPage+1)
    }
  }

  const handlePrev=()=>{
    if(currentPage>1){
      setcurrentpage(currentPage-1)
    }
  }

// context provide away to provide data through the component tree without having to pass props down manually at every child
// context api in react allow you to share data between components without passinf props through every level/child of the component tree it provides a way for components to access data that is global to the component tree

  return (
    <div className='row bg-dark'>
      <div id='sidebar' className='col-2 '>
      <h3 className='mt-3 '>CATEGORIES</h3>
      <ul class="list-group">
  {categories.map((ele)=>{
    return<li onClick={()=>handleLiClick(ele)} class="list-group-item Li">{ele}</li>
  })}
</ul>
      </div>
      <div className='col-10 '>
      <div className='row row-cols-3 d-flex justify-content-center'>
     {sliceItem.map((ele)=>{
        return<div className="card m-3" style={{width: '18rem'}}>
  <img style={{height:"200px"}} src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <p className="card-text">Price={ele.price}</p>
    <Link to="/singlepage" state={ele} id="viewnewsbtn" className="btn btn-primary ">View Recipe</Link>
    <Link to="#" onClick={()=>{handleAddToCart(ele)}} className="btn btn-primary">Add to cart</Link>
  </div>
</div>

      })}

     </div>
     <div className='d-flex justify-content-center'>
     <nav aria-label="Page navigation example ">
  <ul class="pagination">
    <li onClick={handlePrev} class="page-item"><Link class="page-link" to="#">Previous</Link></li>
    {buttonArray.map((ele)=>{
      return <li  onClick={()=>setcurrentpage(ele)} class="page-item"> <Link class="page-link" to="#">{ele}</Link></li>
    })}
  
    <li onClick={handleNext} class="page-item"><Link class="page-link" to="#">Next</Link></li>
  </ul>
</nav>
     </div>

      </div>
    
    </div>
  )
}

export default Home
