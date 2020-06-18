import React, { useState } from 'react';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import './coin.css';
import List from './listCoin'

function Coin() {

  const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3'

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

  function handleCloseModal (event) {
    setValue('1')
    setCoinOf('BRL')
    setCoinTo('USD')
    setFormValidate(false)
    setModal(false)
  }

  function handleSubmit(event){
    event.preventDefault()

    if( event.currentTarget.checkValidity() === true ) {
     axios.get( FIXER_URL )
      .then(resp => {

        const price = getPrice(resp.data)

        setResultConversion(`${value} ${coinOf} = ${price} ${coinTo}`)
        setModal(true)
        setSpinner(false)
      })

     setModal(true)
    }
  }

  function getPrice(priceData) {
    if( !priceData || priceData.success !== true) {
      return false
    }

    const priceOf = priceData.rates[coinOf]
    const priceTo = priceData.rates[coinTo]
    const price   = ( 1 / priceOf * priceTo ) * value

    return price.toFixed(2)
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
        <Modal show = { showModal } onHide = {handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Conversor</Modal.Title>
          </Modal.Header>

           <Modal.Body>
            {resultConversion}
          </Modal.Body>

          <Modal.Footer>
            <Button variant = 'success' onClick = {handleCloseModal}>
              New conversion
            </Button>
          </Modal.Footer>

        </Modal>
      </Jumbotron>
    </div>
  );
}

export default Coin;
