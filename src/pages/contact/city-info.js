import React from 'react';

// Libraries
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Site Data
// External city images
const Shanghai = 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';
const Frankfurt = 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';
const Chicago = 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';
const NewYork = 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';

function CityInfo() {
  return (
    <>
      <Row>
        <Col sm={6} className="mb-5">
          <img className="img-fluid mb-4" src={Shanghai} alt="Shanghai" />
          <h4>Shanghai</h4>
          <h6 className="mb-0">214 West Arnold St. New York, NY 10002</h6>
        </Col>
        <Col sm={6} className="mb-5">
          <img className="img-fluid mb-4" src={Frankfurt} alt="Shanghai" />
          <h4>Frankfurt</h4>
          <h6 className="mb-0">Fairground St. North Bergen, NJ</h6>
        </Col>
        <Col sm={6} className="mb-5 mb-sm-0">
          <img className="img-fluid mb-4" src={Chicago} alt="Shanghai" />
          <h4>Chicago</h4>
          <h6 className="mb-0">West Indian Summer St. Missoula</h6>
        </Col>
        <Col sm={6}>
          <img className="img-fluid mb-4" src={NewYork} alt="Shanghai" />
          <h4>New York</h4>
          <h6 className="mb-0">Virginia Drive Temple Hills</h6>
        </Col>
      </Row>
    </>
  );
}

export default CityInfo;
