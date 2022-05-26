import React, { useState } from 'react';
import { Container,Row,Col, Card, ButtonGroup, Button, Form } from 'react-bootstrap';
import CustomerNav from '../components/cust_nav';
import SampleDress from '../static/images/dress.jpg';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../services/products.services';

const View_single_product = () => {
  const location = useLocation();

  const [orderQuantity, setOrderQuantity] = useState(0)


  const addToCartFunc = (prodid) => {
    
    const add_cart_data = {
      itemId : prodid,
      quantity :orderQuantity
    }

    addToCart(add_cart_data).then((res) =>{
      console.log("Result after adding to cart", res)
    }
    ).catch((e)=>{
      console.log("error while adding the product to cart!")
    })



  }




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
            <h1 className='product_name_header'>{location.state.itemName}</h1>
            <br></br>
            <p>{location.state.description}</p>

            <br />

            <h2 className='prodecut_price_header'>LKR:{location.state.price}.00</h2>

            <h2 className='prodecut_price_header'>in Stock - {location.state.quantity} items</h2>


            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form_label_styler'>Order Quantity</Form.Label>
    <Form.Control type='number' placeholder="Enter Permanent Address" value={orderQuantity} onChange={(e)=>{setOrderQuantity(e.target.value)}}/>
  </Form.Group>




            



<div className="buttonWrapper">
  <Button variant="success" id='add_to_cart_from_single_prod_btn' onClick={()=>{addToCartFunc(location.state.id)}}>Add to cart</Button>
                
            </div>
            
            </Col>
        </Row>
        </Card>
        </Container>

    </div>
  )
}

export default View_single_product