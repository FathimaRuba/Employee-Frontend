import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { getEmployee } from '../Services/allApi';
import { deleteEmployee } from '../Services/allApi';
import { updateEmployee } from '../Services/allApi';
import Edit from './Edit';

function Employees() {

    const [employee, setEmployee] = useState()

    useEffect(() => {
        getData()
    }, [employee])

    const getData = async () => {
        const res = await getEmployee()
        // console.log(res)
        if (res.status == 200) {
            setEmployee(res.data)
        }
    }

    const deleteEmp = async(id) => {
        const result = await deleteEmployee(id)
        console.log(result)
    }
    
    return (
            employee?.length>0?
                employee.map(item => (
                    <Card style={{ width: '18rem' }} className='text-center border-primary border-2 mx-2 rounded-4'>
                    <Card.Body>
                        <div className='bg-primary border border-1 text-white' style={{ borderRadius: '50%', paddingTop: '80px', paddingBottom: '80px' }}>
                            <i className="fa-solid fa-user fs-1" />
                        </div>
                        <Card.Title className='text-primary pt-2'><h4>{item?.firstname} {item?.lastname}</h4></Card.Title>
                        <h6>{item?.email}</h6>
                        <h6>{item?.qualification}</h6>
                        <h6>{item?.age}</h6>
                        <div className='d-flex justify-content-between'>
                            <Edit data = {item} />
                            <button className='btn' onClick={()=>{deleteEmp(item._id)}}><i className="fa-lg fa-solid fa-trash" style={{ color: "#b7060f", }} /></button>
                        </div>
                    </Card.Body>
                </Card>
                ))
                :
                <h1>No Employees Added</h1>
    )
}


export default Employees