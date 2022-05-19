import React, {useState} from 'react'
import {Container,Form,Button,Row, Col} from 'react-bootstrap'
import authService from '../services/auth.services'


const Sign_in = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
const login_func = () => {
  authService.login(
    userName,
    password
  )
}

  return (
    <div>
        <Container id='login_page_container'>
            <Row>
                <Col>

                </Col>
                <Col>

                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form_label_styler'>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='form_label_styler'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
  </Form.Group>

  <div className="buttonWrapper">
  <Button variant="primary" onClick={(e)=>{login_func()}}> 
    Sign in
  </Button>
  </div>
  
</Form>
                
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Sign_in