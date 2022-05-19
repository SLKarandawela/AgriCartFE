import React from 'react'
import {Navbar,Container,Nav,NavDropdown, Dropdown, Badge} from 'react-bootstrap'
import agzoneLogo from '../static/images/agzone.png'
import '../static/css/global.css'
// import { Link } from 'react-router-dom'


const cust_nav = () => {
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
        <Nav.Link href="#action1" id='agzoneNavLink'>Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Products" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Nav>
        {/* <Nav.Link href="#">
        <i class="fa-solid fa-cart-shopping"></i>
        </Nav.Link> */}
        <Dropdown alignRight>
          <Dropdown.Toggle variant='success'>
          <i class="fa-solid fa-cart-shopping"></i>
            <Badge bg="success">{10}</Badge>

          </Dropdown.Toggle>

          <Dropdown.Menu>
            <span style={{padding:10}}>
              cart is empty
            </span>
          </Dropdown.Menu>

        </Dropdown>
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

export default cust_nav