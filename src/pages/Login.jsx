import React, { useContext, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {


let ctx1= useContext(AuthContext)
  const [error, seterror] = useState("");
  let Navigate = useNavigate()
  let arr=JSON.parse(localStorage.getItem('auth'))||[];
  let emailRef = useRef()
  let passwordRef = useRef()

const loginbtn=(event)=>{
  console.log(arr)

  event.preventDefault();

// let emailvalue =document.querySelector('#email').value;
// let passwordvalue =document.querySelector('#password').value;
// let popup=document.querySelector('#message')

let obj={
  email:emailRef.current.value,
    password:passwordRef.current.value,
    }
    console.log(obj);

    // const handleEmailChange=(e)=>{
    //   console.log(e.target.value)
    //   setemail(e.target.value)
    // }

    // const handlepasswordChange=(e)=>{
    //   console.log(e.target.value)
    //   setpassword(e.target.value)
    // }

function checkuser(){
  for(let i=0;i<arr.length;i++){
    if(arr[i].email===obj.email){
      if(arr[i].password===obj.password){
        localStorage.setItem("login",true)
        arr.push(obj)
        localStorage.setItem('auth',JSON.stringify(arr))
        ctx1.setAuthValue(true)
        Navigate('/')
        return
       
      }
      else{
        seterror("Password not matched")
        // setTimeout(()=>{
        //   seterror("")
        // },2000)
      }
      return
    }
  
  }
  seterror("User not found")
      console.log("User not found please sign up")
      return
}
checkuser();
}

// let ans=checkuser()
// seterror(ans) 


  return (
    <div className='p-3'>

        <form className='col-md-6 mt-3 m-auto'>
        <h3 style={{color:"red"}} className='text-center'>{error}</h3>
        <h3 className='text-center'>Login page</h3>
  <h1 className="text-center text-white">Login</h1>
  <span id="message" />
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
    <input ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label ">Password</label>
    <input ref={passwordRef} type="password" className="form-control" id="password" />
  </div>
  <div className="text-center">
    <button type="submit" onClick={loginbtn} className="btn btn-primary">Submit</button>
  </div>
  <div className="text-center ">
    <p>Don't have an account,please signup first</p><Link to="/signup">Sign-up</Link>
  </div>
 
</form>

      
    </div>
     
  )
}

export default Login
