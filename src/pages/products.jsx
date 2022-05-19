import React, { useEffect, useState } from 'react';
import CustomerNav from '../components/cust_nav';
import '../static/css/all_products.css'
import {Card,Button, Container, Row, Col} from 'react-bootstrap';
import { getAllProducts } from '../services/products.services';






const Products = () => {

  
  const [products, setProducts] = useState([]);

  


  useEffect (() => {
    getAllProducts().then((res) => {
      console.log(res)
      setProducts(res)

    })

  })

 

  return (
    <div>
        <CustomerNav />
        <Container id='all_product_container'>
        <Row xs={1} md={4} className="g-4">
  {products.map((product, index) => (
    <Col>
        <Card>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{product.itemName}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Row>
    <Col>
    <Button variant="primary" style={{width: '8em', fontSize:'0.9em'}}>View Product</Button>
    </Col>
    <Col>
    <Button variant="success" style={{width: '8em', fontSize:'0.9em'}}>Add to cart</Button>
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