import React from 'react';
import { Jumbotron, Button, Form, Col, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './coin.css';

function Coin() {
  return (
    <div>
      <h1>Coin Convertor</h1>

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
            </Col>

          </Form.Row>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default Coin;
