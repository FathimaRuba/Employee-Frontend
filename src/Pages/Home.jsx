import React from 'react'
import Add from '../Components/Add'
import Employees from '../Components/Employees'
import { Row,Col } from 'react-bootstrap'

function Home() {
    return (
        <>
            <div className='container-fluid'>
                <Add/>
            </div>

              <div className='mx-3 '>
              <div className='container-fluid  p-3  my-3 rounded-4'>

                <Row>
                    <Col >
                    <div className='container-fluid row' >
                        <Employees/>
                    </div>
                    </Col>
                </Row>
                </div>
              </div>
        </>

    )
}

export default Home