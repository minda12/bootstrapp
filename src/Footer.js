
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Footer.css'
function Footer() {
    return (
        <Navbar bg="dark" variant="dark" className="mt-auto text-white py-3">
            <Container className='d-flex '>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="me-auto justify-content-end ">
                    <p href="#home" className="generic-foter"> The Generics</p>
                    <span className='social-media'>
                    <Nav.Link href="https://www.facebook.com/" target="_blank" className="me-3">Facebook</Nav.Link>
                    <Nav.Link href="https://www.Youtube.com/" target="_blank" className="me-3">Youtube</Nav.Link>
                    </span>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;
