import React,{ useState} from 'react';
import CustomerNav from '../../components/cust_nav';

import { Container,Form,Button } from 'react-bootstrap';
import { addProduct } from '../../services/products.services';


const Create_product = () => {
  const [itemName, setItemName] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemPrice, setItemPrice] = useState(0)
    const [itemQty, setItemQty] = useState(0)
    const [itemCategory, setItemCategory] = useState('')
    const [itemSubCategory, setItemSubCategory] = useState('')


    

    const addProductFunc = (e) =>{
      e.preventDefault()
      let prsedSubCategory = parseInt(itemSubCategory)
      console.log("parsed cat", prsedSubCategory)
      const data = {
          itemName: itemName,
          price: itemPrice,
          description: itemDescription,
          quantity: itemQty,
          itemType:itemCategory,
          subCategoryId:prsedSubCategory
      }


      addProduct(data).then((res)=>{
          console.log("res after adding the product", res)
      }).catch((e)=>{
          alert("error while adding the product!")
      })
  }





  return (
    <div>
        <CustomerNav />
        <Container id='create_product_container'>
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

  <Container id='center_wrapper'>
 
  <Button variant="primary" type="submit" onClick={(e)=>{addProductFunc(e)}}>
  <i class="fa-solid fa-plus"></i> Add Product
  </Button>

  </Container>
</Form>

        </Container>
    </div>
  )
}

export default Create_product