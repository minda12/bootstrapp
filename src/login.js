import { useRef,useContext,useState } from 'react';
import React from 'react'
import Form from 'react-bootstrap/Form';
import CartContext from './CartContext';
import { useHistory } from 'react-router-dom';

  


function  Login() {

     const emailRef = useRef()
     const passRef = useRef()
     const ctx = useContext(CartContext)
     const history = useHistory()
     const [iserror,setiserror] = useState(false)
     const [error,seterror] = useState(false)
    
      
    
     
     
    const submitHandler = async  (e)=>{
      e.preventDefault()


      try {
      const email = emailRef.current.value;
      const pass = passRef.current.value;
   

      
      // ctx.AddUser(Loginuser)
    
      
      


      const res =  await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpYKqaZ8q0kUsMkTnA0DoiizgmwfsW6rg',{
       
        method:'POST',
        headers:{
            'Content-Type':'application/json'

        },
        body:JSON.stringify(
          {
          email:email,
          password:pass,
          returnSecureToken:true
          }
        )
  
        })

   if(!res.ok)
    {
      const errordata = await res.json()

      throw new Error(errordata.error.message || 'Authentication failed')
    }
      

    const convertedData = await res.json()
    console.log('response ',convertedData)
    localStorage.setItem('token',convertedData.idToken)
    ctx.setToken(convertedData.idToken)
    ctx.setisLogIn(true)
    history.replace('/Store')
      } catch (error) {
       console.log(error)
       setiserror(true)
       seterror(error.message)
       
      }

      
    } 


  return (
    <div  className=" bg-secondary  d-flex justify-content-center align-items-center min-vh-100  w-100 p-5" >
   
    <Form onSubmit = {submitHandler}>
    <Form.Label  style={{ fontWeight: 'bold' }} column size='lg'>  Email </Form.Label>
    <Form.Control ref={emailRef} size="lg" type="text" placeholder="Enter Your Email" />
    <Form.Label  column size='ls'style={{ fontWeight: 'bold' }}>  Password </Form.Label>
    <Form.Control ref={passRef} size="lg" type="password" placeholder="Enter Your Password" />
      
    {iserror && <p>{error}</p>}
    <button type='submit'  className=" display btn btn-primary mt-3 ">Login</button>
      
    </Form>
   
   
 </div>
  )
}

export default Login