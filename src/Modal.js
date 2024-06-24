import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from './CartContext';
import { useContext } from 'react';
import {  Badge } from 'react-bootstrap';

function Modall(props) {

  const ctx = useContext(CartContext)

  return (
    <Modal
      show={true}
      onHide={props.onClose}
      backdrop="true"
      keyboard={true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Cart Items</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.children}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onClose} variant="secondary">Close</Button>
        <Button variant="primary">Order</Button>
        <Badge bg ="warning"><h4>Total  ₹{ctx.Total}</h4></Badge>
      </Modal.Footer>
    </Modal>
  );
}

export default Modall;
