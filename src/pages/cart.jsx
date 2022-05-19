import React from 'react';
import CustomerNav from '../components/cust_nav';

import {  Card,Table,Row,Col } from 'react-bootstrap';


const cart = () => {
  return (
    <div>
        <CustomerNav></CustomerNav>
        <Card className='shopping_cart_card'>
        <Table striped bordered hover borderless>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

<div className="subtotal">
    <Row>
        <Col>
        
        </Col>

    </Row>
</div>
        </Card>

    </div>
  )
}

export default cart