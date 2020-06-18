import React, { useState } from 'react';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './coin.css';
import List from './listCoin'

function Coin() {

  const [ value, setValue ]                       = useState('1')
  const [ coinOf, setCoinOf ]                     = useState('BRL')
  const [ coinTo, setCoinTo ]                     = useState('USD')
  const [ showSpinner, setSpinner ]               = useState(false)
  const [ formValidate, setFormValidate ]         = useState(false)
  const [ showModal, setModal ]                   = useState(false)
  const [ resultConversion, setResultConversion]  = useState('')

  function handleValue(event){
    setValue(event.target.value.replace(/\D/g, ''))
  }

  function handleCoinOf(event){
    setCoinOf(event.target.value)
  }

  function handleCoinTo(event){
    setCoinTo(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    setFormValidate(true)

    if( event.currentTarget.checkValidity() === true ) {
     // todo
    }
  }

  return (
    <div>
      <h1>Coin Convertor</h1>
      <Alert variant = 'danger'  show = {false} >
        ERROR TRY AGAIN
      </Alert>
      <Jumbotron>
        <Form onSubmit = {handleSubmit} noValidate validated = {formValidate}>
          <Form.Row>
            <Col sm='3'>
              <Form.Control
                placeholder ='0'
                value = { value }
                onChange = { handleValue }
                required
              />
            </Col>

            <Col sm='3'>
              <Form.Control
                as ='select'
                value = { coinOf }
                onChange = { handleCoinOf }
                >
                <List />
              </Form.Control>
            </Col>

            <Col sm='1' className='text-center'>
              <FontAwesomeIcon icon = {faAngleDoubleRight} />
            </Col>

            <Col sm='3'>
              <Form.Control
                as='select'
                value = { coinTo }
                onChange = { handleCoinTo}
                >
                <List />
              </Form.Control>
            </Col>

            <Col sm='2'>
              <Button variant = 'success' type = 'submit'>
                <span className = { showSpinner ? null : 'hidden'}>
                  <Spinner animation = 'border' size = 'sm' />
                </span>

                <span className = { showSpinner ? 'hidden' : null }>
                  Convertor
                </span>
              </Button>
            </Col>

          </Form.Row>
        </Form>
        <Modal show = { showModal }>
          <Modal.Header closeButton>
            <Modal.Title>Conversor</Modal.Title>
          </Modal.Header>

           <Modal.Body>
            {resultConversion}
          </Modal.Body>

          <Modal.Footer>
            <Button variant = 'success'>
              New conversion
            </Button>
          </Modal.Footer>

        </Modal>
      </Jumbotron>
    </div>
  );
}

export default Coin;
