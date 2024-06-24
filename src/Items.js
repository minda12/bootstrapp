import React, { useContext } from 'react'
import { Button, Col,Row} from 'react-bootstrap';
import './Items.css'
import CartContext from './CartContext';
import { Link } from 'react-router-dom';


    
   

function Items(props) {
  const ctx = useContext(CartContext)
    
  const addCart=(id,title,price,quant)=>{
      //  console.log('this is ctx rom cartitem',ctx.additemToCart)
      ctx.additemToCart(id,title,price,quant)
  }
    const itemlist = ctx.Items.map((product) =>

   
        <Col key={product.title} sm={6}  className='  mb-4' >
        <div className='column-content'>
          <Link to ={`productDetails/${product.id}`}>
        <h3  className=' text text-align-center '>{product.title}</h3>
        </Link>
       
        <img src={product.imageUrl} alt={product.title} className='column-image'/>
        <div className=' d-flex justify-content-between m-1' >
        <p>₹{product.price}</p>
        <Button onClick = {()=>addCart(product.id,product.title,product.price,product.quantity)} variant = 'primary' className='mx-5 '>AddtoCart</Button>
        </div>
        </div>

        </Col>
   
   )
    
  return (
    <div className='content'>
       
        <h1 className='custom-heading metal-mania-regular '>Music</h1>
        <Row  sm={5}>
         {itemlist}
         </Row>
         <div className='seeCart'>
         <Button onClick={props.onShow} variant = 'danger' className='mx-5  '>SeeCart</Button>
         </div>
    </div>
  )
}

export default Items