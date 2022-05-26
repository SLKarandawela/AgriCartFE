import React from 'react'
import {Navbar,Container,Nav,NavDropdown, Dropdown, Badge} from 'react-bootstrap'
import agzoneLogo from '../static/images/agzone.png'
import '../static/css/global.css'
import Cart from '../pages/cart'
import { useNavigate } from 'react-router';

import authService from '../services/auth.services'
// import { Link } from 'react-router-dom'





const Cust_nav = () => {

  const navigate = useNavigate();


  const logged_user= authService.getCurrentUser();
  const logged_user_role = logged_user.role
  console.log('this is logged role', logged_user_role)

  return (
    <div>
        <Navbar expand="lg" className='agzone_top_nav'>
  <Container fluid>
    <Navbar.Brand href="#">
    <img
        src={agzoneLogo}
        width="150"
        
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {logged_user_role === 'BUYER' ? (
          <>
          <Nav.Link href="#action1" id='agzoneNavLink'>Home</Nav.Link>
        <Nav.Link href="products" id='agzoneNavLink'>Products</Nav.Link>
        <Nav.Link href="cart" id='agzoneNavLink'>Cart</Nav.Link>
        <Nav.Link href="purchaseHistry" id='agzoneNavLink'>Purchase History</Nav.Link>
        
          
          </>):
          (
          <div>
            <Nav.Link href="#action1" id='agzoneNavLink'>Home</Nav.Link>
        <Nav.Link href="#action2" id='agzoneNavLink'>Products</Nav.Link>
        <Nav.Link href="#action3" id='agzoneNavLink'>Cart</Nav.Link>
        <Nav.Link href="#action4" id='agzoneNavLink'>Purchase History</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="">create Item</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
        

          
          </div>
        )}
        


        
      </Nav>
      <Nav>
        {/* <Nav.Link href="#">
        <i class="fa-solid fa-cart-shopping"></i>
        </Nav.Link> */}
        {/* <Dropdown alignRight>
          <Dropdown.Toggle variant='success'>
          <i class="fa-solid fa-cart-shopping"></i>
            <Badge bg="success">{10}</Badge>

          </Dropdown.Toggle>

          <Dropdown.Menu>
            <span style={{padding:10}}>
              <Cart>
                
              </Cart>>
            </span>
          </Dropdown.Menu>

        </Dropdown> */}
        </Nav>
      {/* <Form className="d-flex">
        
       
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Cust_nav