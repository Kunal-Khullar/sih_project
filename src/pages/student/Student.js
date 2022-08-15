import React from 'react'
import './student.css'
import NavHome from '../../components/navbar/Nav'
import {Row,Col,Button} from 'react-bootstrap'
const Student = () => {
  return (
    <div className="main_body">
      <div className="container">
        <NavHome />
        <Row className="top">
          <Col className="col-md-6 col1">
            <h2>Checkout latest competitions.</h2>
            <p>Have a look at the latest competitions oraganised by the top insititutions in the country and stand to win exciting prizes and more!</p>
            <Button>Go</Button>
          </Col>
          <Col className="col-md-6 col2" >
          
           </Col>
        </Row>
        <Row className="top">
        <Col className="col-md-6 col2" >
          
          </Col>
          <Col className="col-md-6 col1">
            <h2>Results are out.</h2>
            <p>Take a look at the winners and top performers of latest contests.</p>
            <Button>Checkout</Button>
          </Col>
          
        </Row>
      </div>
    </div>
  )
}

export default Student