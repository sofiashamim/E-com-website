import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import CartContext from '../context/CartContext';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    
  let ctx1 = useContext(AuthContext)
    let navigate=useNavigate()
    let ctx = useContext(CartContext)
    console.log(ctx.cartItem.length)

    const handleInputChange=(e)=>{
      console.log(e.target.value)
      let searchproduct= e.target.value.toLowerCase()
      // ctx.setNavsearch(e.target.value)
      ctx.setNavsearch(searchproduct)
    }

    const handleLogin=()=>{
navigate("/login")

    }

    const handleSignup=()=>{
        navigate("/signup")
        
    }
    const handleLogout = () =>{
      localStorage.removeItem('login')
      ctx1.setAuthValue(false)
      navigate('/login')
    }
  return (
    <div>

<nav id='navbarId' className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex m-auto" role="search">
        <input onChange={handleInputChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button onClick={handleLogin} className='btn btn-primary'>Login</button>
      <button onClick={handleLogout} className='btn btn-primary'>LogOut</button>
      <button onClick={handleSignup} className='btn btn-success ms-2'>Sign-up</button>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart"> <BsCart4 size={"20px"}/>{ctx.cartItem.length?ctx.cartItem.length:""}</Link>
        </li>
       
       
       
      
      </ul>
      
    </div>
  </div>
</nav>

      
    </div>
  )
}

export default Navbar
