import React from 'react'
import '../static/css/all_products.css'
import {Form,Button, Container, Row, Col} from 'react-bootstrap';
import agzoneLogo from '../static/images/agzone.png'


const sign_up = () => {
  return (
    <>
      <Container fluid id='sign_up_container'>
        <Row id='reg_form_row'>
          <Col id='reg_form_left_col'>
            <div className="buttonWrapper">
            <img
        src={agzoneLogo}
        width="150"
        
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
            </div>



          </Col>

          <Col id='reg_form_right_col'>

          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form_label_styler'>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter username" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='form_label_styler'>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form_label_styler'>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter first name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form_label_styler'>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form_label_styler'>Telephone</Form.Label>
    <Form.Control type="text" placeholder="Enter Contact number" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form_label_styler'>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Permanent Address" />
  </Form.Group>

  <div className="buttonWrapper">
  <Button variant="primary" className='custom_button'>
    Sign up
  </Button>
  </div>

</Form>




          </Col>
        </Row>
      </Container>
     
    </>
  )
}

export default sign_up