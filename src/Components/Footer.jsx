import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
   <div className='container-fluid'>
    <Row className='justify-content-center bg-primary p-5'>
        <Col className='mb-3'>
        <h6 className='text-center text-light fw-bold'>Effective employee management builds stronger teams, boosts productivity, and fosters growth. 💼</h6>
        </Col>
        <div className='d-flex justify-content-center my-3 container-fluid'> 
            <i class="fa-brands fa-facebook fa-lg mx-2" style={{color:'white'}} ></i>
            <i class="fa-brands fa-twitter fa-lg mx-2" style={{color:'white'}} ></i>
            <i class="fa-brands fa-google fa-lg mx-2" style={{color:'white'}} ></i>
            <i className="fa-brands fa-instagram fa-lg mx-2" style={{color:'white'}}></i>
            <i className="fa-brands fa-linkedin-in fa-lg mx-2" style={{color:'white'}}></i>
        </div>
    </Row>
   </div>
    </>
  )
}

export default Footer