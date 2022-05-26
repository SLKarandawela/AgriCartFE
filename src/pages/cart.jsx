import React,{useEffect,useState} from 'react';
import CustomerNav from '../components/cust_nav';
import { viewCart,payAmount } from '../services/products.services';
import {  Card,Table,Row,Col, Container,Form,Button,Nav } from 'react-bootstrap';


const Cart = () => {

  const [CartItems, setCartItems] = useState([]);
  const [CartTotal,setCartTotal] = useState(0);
  const [showForm, setShowForm] = React.useState(1)
  const [CartObj, setCartObj] = React.useState([])

  // to hide and dislay dropdowns
  const [addressAvailable, setAddressAvailable] = React.useState(false)


  //cart mobile payment status
  const [mobPayMobile, setMobPayMobile] = useState()
  const [mobPayAmount, setmobPayAmount] = useState(CartTotal)
  const [mobPayAddress, setMobPayAddress] = useState()

  // cart card payment
  const [cardType, setCardType] = useState()
  const [cardNumber, setCardNumber] = useState('')
  const [cardCSV, setCardCSV] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardAmount, setCardAmount] = useState('')
  const [cardAddress, setCardAddress] = useState('')









  const createMobilePayFunc = (e) => {
    
    let address_type = ''
    let deli_adress = ''
    if(addressAvailable === true){
       address_type = "COURIERSAMEADDRESS"
       deli_adress = null
    }
    else{
       address_type = "COURIERANOTHERADDRESS"
       deli_adress = mobPayAddress
    }

    const mobPayData = {
      paymentType:"MOBILE",
      cartId: CartObj.cartId,
      phoneNumber:mobPayMobile,
      amount:CartTotal,
      deliveryType:address_type,
      deliveryAddress:deli_adress
    }

    payAmount(mobPayData).then((res) => {
      console.log("Result after making payment by mobile", res)

    }
    ).catch((e)=>{
      console.log("error while adding the product to cart!")
    })

  }

  const createCardPayFunc = (e) => {
    
    let address_type = ''
    let deli_adress = ''
    if(addressAvailable === true){
       address_type = "COURIERSAMEADDRESS"
       deli_adress = null
    }
    else{
       address_type = "COURIERANOTHERADDRESS"
       deli_adress = mobPayAddress
    }

    const mobPayData = {
      paymentType:"CARD",
      cartId: CartObj.cartId,
      cardType:mobPayMobile,
      cardNumber:cardNumber,
      csv:cardCSV,
      cardHolder:cardHolderName,
      expDate:"2023-04-12",
      amount:CartTotal,
      deliveryType:address_type,
      deliveryAddress:deli_adress
    }

    payAmount(mobPayData).then((res) => {
      console.log("Result after making payment by mobile", res)

    }
    ).catch((e)=>{
      console.log("error while adding the product to cart!")
    })

  }
  


  useEffect (() => {
    viewCart().then((res) => {
      // console.log('cart item list response',res.items)
      setCartItems(res.items)
      setCartTotal(res.cartPrice)
      setCartObj(res)

    })

  },[])



  return (
    <div>
        <CustomerNav></CustomerNav>
        <Card className='shopping_cart_card'>
        <Row>
        <Col>
        <Table striped bordered hover borderless>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {CartItems.map((CartItem, index) => (
              <tr>
                <td>{CartItem.itemId.itemName}</td>
                <td>{CartItem.itemId.price}</td>
                <td>{CartItem.quantity}</td>
                <td>{CartItem.itemId.price * CartItem.quantity }</td>  
              </tr> 
            ))}
    
          </tbody>
        </Table>

        <h6>Total = {CartTotal}</h6>
        
        </Col>

        <Col id='cart_right_col'>
        <h5>Checkout</h5>

        <Container>
        <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="link-2" onClick={()=>{setShowForm(1)}}>Card Payment</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>{setShowForm(2)}}>Mobile Payment</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    
  </Nav.Item>
</Nav>

<Container id='cart_payment_section_forms'>

{
  showForm === 1 ? 
  (<div>

    <h6>Pay by your card</h6>
    <hr />
    <Form>
    <Form.Control
    type="text"
    placeholder="Disabled input"
    aria-label="Disabled input example"
    hidden
    
  />
   
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Payment Type</Form.Label>
    <Form.Select aria-label="Default select example" value={cardType} onChange={(e)=>{setCardType(e.target.value)}}>
  <option>Card Type</option>
  <option value="VISA"><i class="fa-brands fa-cc-visa"></i> Visa</option>
  <option value="MASTERCARD"><i class="fa-brands fa-cc-mastercard"></i> Master Card</option>
  
</Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Card Number</Form.Label>
    <Form.Control type="number" placeholder="Card Number" value={cardNumber} onChange={(e)=>{setCardNumber(e.target.value)}} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>CSV</Form.Label>
    <Form.Control type="number" placeholder="CSV" value={cardCSV} onChange={(e)=>{setCardCSV(e.target.value)}} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Card Holder Name</Form.Label>
    <Form.Control type="text" placeholder="Card holder's name" value={cardHolderName} onChange={(e)=>{setCardHolderName(e.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="Number" placeholder="Payment Amount" value={CartTotal} readOnly />
  </Form.Group>

  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Address Available"
    onChange={(e)=>{setAddressAvailable(e.target.checked)}}
  />

  {addressAvailable === false ? (
  <div>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Delivery Address</Form.Label>
      <Form.Control as="textarea" rows={3} value={cardAddress} onChange={(e)=>{setCardAddress(e.target.value)}} />
    </Form.Group>
  </div>
):(<div></div>)
}
  
  <div className="buttonWrapper">
  <Button variant="primary" type="button" className='global_button' onClick={(e)=>{createCardPayFunc(e)}}>
    Checkout
  </Button>
  </div>
 
</Form>

  </div>):
  
  (<div>

<h6>Pay by your Mobile</h6>
    <hr />
   
  <Form>

     
    <Form.Control
    type="text"
    placeholder="Disabled input"
    aria-label="Disabled input example"
    hidden
    
  />
   
  
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="number" placeholder="Mobile Number" value={mobPayMobile} onChange={(e)=>{setMobPayMobile(e.target.value)}} />
    </Form.Group>
  
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Amount</Form.Label>
      <Form.Control type="Number" placeholder="Payment Amount" value={CartTotal} readOnly />
    </Form.Group>

    <Form.Check 
    type="switch"
    id="custom-switch"
    label="Address Available"
    onChange={(e)=>{setAddressAvailable(e.target.checked)}}
  />

{addressAvailable === false ? (
  <div>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Delivery Address</Form.Label>
      <Form.Control as="textarea" rows={3} value={mobPayAddress} onChange={(e)=>{setMobPayAddress(e.target.value)}} />
    </Form.Group>
  </div>
):(<div></div>)
}
  
    
    
    <div className="buttonWrapper">
    <Button variant="primary" type="button" className='global_button' onClick={(e)=>{createMobilePayFunc(e)}}>
      Checkout
    </Button>
    </div>
   
  </Form></div>)
}
</Container>
        
        </Container>
        
        </Col>

        </Row>




        

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

export default Cart