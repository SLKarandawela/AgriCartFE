import React from 'react';
import { Container,Row,Col, Card, ButtonGroup, Button } from 'react-bootstrap';
import CustomerNav from '../components/cust_nav';
import SampleDress from '../static/images/dress.jpg';


const view_single_product = () => {
  return (
    <div>
        <CustomerNav></CustomerNav>
        <Container>
            <Card className='single_product_card'>
        <Row>
            <Col>
            <Card.Img variant="left" src={SampleDress} className='single_product_image' />
            </Col>
            <Col className='single_product_detail_column'>
            <h1 className='product_name_header'>This is product name</h1>
            <br></br>
            <p>Product Description</p>

            <br />

            <h2 className='prodecut_price_header'>LKR:4000.00</h2>

            

            <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>


<div className="buttonWrapper">
  <Button variant="success" id='add_to_cart_from_single_prod_btn'>Add to cart</Button>
                
            </div>
            
            </Col>
        </Row>
        </Card>
        </Container>

    </div>
  )
}

export default view_single_product