import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from './CartContext';
import './productDetails.css';
import { Button } from 'react-bootstrap';


function ProductDetails() {
  const ctx = useState(CartContext)
  const { ProductId } = useParams();
  const { Items } = useContext(CartContext);

  const product = Items.find(p => p.id.toString() === ProductId);

  const addCart=(id,title,price,quant)=>{
    //  console.log('this is ctx rom cartitem',ctx.additemToCart)
    ctx.additemToCart(id,title,price,quant)
}



  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='d-flex'>
      <div className='cont'>
        <h2 className='mt-4 text-center'>{product.title}</h2>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            style={{ marginRight: '10px', padding: '5px', maxWidth: '300px' }}
            className="zoom-out"
          />
        ))}
      </div>
      <span className='details'>
        <p>Price: ₹{product.price}</p>
        <p>Description: {product.description}</p>
        <h3>Reviews</h3>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>
              <strong>User:</strong> {review.user}<br />
              <strong>Rating:</strong> {review.rating}<br />
              <strong>Comment:</strong> {review.comment}
            </li>
          ))}
        </ul>
        <Button onClick={()=>addCart(product.id,product.title,product.price,product.quantity)} variant = 'primary' className='mt-3 '> Add to Cart</Button>
      </span>
    </div>
  );
}

export default ProductDetails;
