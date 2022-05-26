import React, { useState } from 'react';
import { Container,Row,Col, Card, ButtonGroup, Button, Form } from 'react-bootstrap';
import CustomerNav from '../components/cust_nav';
import SampleDress from '../static/images/dress.jpg';
import { useLocation } from 'react-router-dom';
import { addToCart,updateProduct } from '../services/products.services';
import authService from '../services/auth.services';

const View_single_product = () => {
  const location = useLocation();

  const [orderQuantity, setOrderQuantity] = useState(0)
  const logged_user= authService.getCurrentUser();
  const logged_user_role = logged_user.role

  // update states
  const [itemName, setItemName] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemPrice, setItemPrice] = useState(0)
    const [itemQty, setItemQty] = useState(0)
    const [itemCategory, setItemCategory] = useState('')
    const [itemSubCategory, setItemSubCategory] = useState('')
  


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

  const updateProdFunc = (prodid) => {

    let prsedSubCategory = parseInt(itemSubCategory)

    
    const update_data = {
      itemName: itemName,
      price: itemPrice,
      description: itemDescription,
      quantity: itemQty,
      itemType:itemCategory,
      subCategoryId:prsedSubCategory
  }

    updateProduct(prodid,update_data).then((res) =>{
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

  <br />



  {logged_user_role === 'FARMER' ? (
          <>
          <Form>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className='form_label_styler'>Item Category</Form.Label>
<Form.Select aria-label="Default select example" value={itemCategory} onChange={(e)=>{setItemCategory(e.target.value)}}>
<option>Select Item Category</option>
<option value="PLANT">Plant</option>
<option value="SEED">Seed</option>
<option value="FOOD">Food</option>
<option value="FRUIT">Fruit</option>

</Form.Select>  
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className='form_label_styler'>Item Sub Category</Form.Label>
<Form.Select aria-label="Default select example" value={itemSubCategory} onChange={(e)=>{setItemSubCategory(e.target.value)}}>
<option>Select Item Sub Category</option>
<option value="1">Free Shipping</option>
<option value="2">Organic</option>
<option value="3">Local Product</option>
</Form.Select>  
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className='form_label_styler'>Item Name</Form.Label>
<Form.Control type="text" placeholder="Enter email" value={itemName} onChange={(e)=>{setItemName(e.target.value)}} />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className='form_label_styler'>Item Description</Form.Label>
<Form.Control as="textarea" rows={3} value={itemDescription} onChange={(e)=>{setItemDescription(e.target.value)}}/>

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label className='form_label_styler'>Unit Price</Form.Label>
<Form.Control type="text" placeholder="Enter unit price" value={itemPrice} onChange={(e)=>{setItemPrice(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label className='form_label_styler'>Quantity</Form.Label>
<Form.Control type="text" placeholder="Enter unit price" value={itemQty} onChange={(e)=>{setItemQty(e.target.value)}}/>
</Form.Group>


<div className="buttonWrapper">
<Button variant="warning text-dark" id='add_to_cart_from_single_prod_btn' onClick={()=>{updateProdFunc(location.state.id)}}>update
</Button>
</div>

</Form>

          
        
          
          </>):
          (
          <div>
          
          </div>
        )}
                
            </div>
            
            </Col>
        </Row>
        </Card>
        </Container>

    </div>






  )
}

export default View_single_product