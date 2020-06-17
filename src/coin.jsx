import React from 'react';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './coin.css';

function Coin() {
  return (
    <div>
      <h1>Coin Convertor</h1>
      <Alert variant = 'danger'  show = {false} >
        ERROR TRY AGAIN
      </Alert>
      <Jumbotron>
        <Form>
          <Form.Row>
            <Col sm='3'>
              <Form.Control
                placeholder ='0'
                value = {1}
                required
              />
            </Col>

            <Col sm='3'>
              <Form.Control as='select'></Form.Control>
            </Col>

            <Col sm='1' className='text-center'>
              <FontAwesomeIcon icon = {faAngleDoubleRight} />
            </Col>

            <Col sm='3'>
              <Form.Control as='select'></Form.Control>
            </Col>

            <Col sm='2'>
              <Button variant = 'success' type = 'submit'>
                <Spinner animation = 'border' size = 'sm' />
                Convertor
              </Button>
            </Col>

          </Form.Row>
        </Form>
        <Modal show = { true }>
          <Modal.Header closeButton>
            <Modal.Title>Conversor</Modal.Title>
          </Modal.Header>

           <Modal.Body>
            Result
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
