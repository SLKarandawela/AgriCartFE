import React, { useEffect, useState } from 'react';
import CustomerNav from '../components/cust_nav';
import '../static/css/all_products.css'
import {Card,Button, Container, Row, Col,ListGroup,Badge} from 'react-bootstrap';
import { addToCart, getAllProducts,viewSingleProduct } from '../services/products.services';
import authService from '../services/auth.services';
import { useNavigate } from 'react-router';





const Products = () => {
  const navigate = useNavigate();

  const userInfo = authService.getCurrentUser();
  // console.log(userInfo.userName)  
  const [products, setProducts] = useState([]);

  const [itemQuantity, setItemQuantity] = useState(0);

  const addToCartFunc = (prod) => {
    console.log(prod.itemName)
    alert(prod.id)
    // alert('this is item quantity',itemQuantity)
    const add_cart_data = {
      itemId : prod.id,
      quantity :1
    }

    addToCart(add_cart_data).then((res) =>{
      console.log("Result after adding to cart", res)
    }
    ).catch((e)=>{
      console.log("error while adding the product to cart!")
    })



  }

  const viewSinglItemFunc = (prod) => {
    console.log(prod.itemName)
    const itemId = prod.id
    // alert('this is item quantity',itemQuantity)
    

    viewSingleProduct(itemId).then((res) =>{
      console.log("Result after adding to cart", res)
      navigate('/view', {state:res});
      
    }
    ).catch((e)=>{
      console.log("error while adding the product to cart!")
    })



  }




  useEffect (() => {
    getAllProducts().then((res) => {
      // console.log(res)
      setProducts(res)

    })

  },[])



 

  return (
    <div>
        <CustomerNav />
        <Container id='all_product_container'>
        <Row xs={1} md={4} className="g-4">
  {products.map((product, index) => (

    
    <Col>
        <Card>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>{product.itemName}</Card.Title>
    <Card.Text>
      <h6>{product.description}</h6>
      <ListGroup as="ul">
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Category</div>
      
    </div>
    <Badge bg="success" pill>
      {product.itemType}
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Available Quantity</div>
     
    </div>
    <Badge bg="warning text-dark" pill>
    {product.quantity}

    </Badge>
  </ListGroup.Item>
  
</ListGroup>
    </Card.Text>
    <Row>
    <Col>
    <Button 
    variant="primary" 
    style={{width: '8em', fontSize:'0.9em'}}
    onClick={()=>{viewSinglItemFunc(product)}}
    
    >View Product</Button>
    </Col>
    <Col>
    

    {/* <InputGroup className="mb-3">
    <FormControl
      placeholder="Quantity"
      aria-label="Quantity"
      aria-describedby="basic-addon2"
      type='number'
      value={itemQuantity}
      onChange={(e)=>{setItemQuantity(e.target.value)}}
    /> */}
    <Button 
          variant="success" 
          style={{width: '8em', fontSize:'0.9em'}}
          onClick={()=>{addToCartFunc(product)}}
          
          >
            Add to cart</Button>
  {/* </InputGroup> */}
    </Col>

  </Row>

  </Card.Body>
</Card>
</Col>
  ))}
</Row>
</Container>

    </div>
  )
}

export default Products