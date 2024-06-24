import React, { useContext } from 'react';
import Modall from './Modal';
import CartContext from './CartContext';
import { Button ,Row,Col,Container,Badge,} from 'react-bootstrap';


function CartItems(props) {
  const ctx = useContext(CartContext)
  console.log("cartitems ",ctx.cartItems)
   const Cartitemlist = ctx.cartItems.map((product) =>
    
     <li className="list-group-item" key={product.Id}>
      <Row className='align-items-center'>
      <Col><strong>{product.Title}</strong></Col> 
      <Col><h3>₹{product.Price}</h3> </Col>
      <Col><Badge><h6>x{product.Quantity}</h6> </Badge>
      <Button variant='danger'>Remove</Button> </Col>
      </Row>
      </li>
   );

  console.log("Rendering CartItems with props:", props);

  return (
    <Modall onClose={props.onClose}>
       <Container>
        <Row className="mb-3">
          <Col>
            <h4>Item</h4>
          </Col>
          <Col>
            <h4>Price</h4>
          </Col>
          <Col>
            <h4>Quantity</h4>
          </Col>
        </Row>
        {Cartitemlist}
      </Container>
      
    </Modall>
  );
}

export default CartItems;
