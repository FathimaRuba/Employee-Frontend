import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployee } from '../Services/allApi';
import { toast } from 'react-toastify';

function Add() {

    const [employees, setEmployees] = useState({
        firstname:'',lastname:'',age:'',qualification:'',email:''
    })

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setEmployees({
            firstname:'',lastname:'',age:'',qualification:'',email:''
        })
    };
    const handleShow = () => setShow(true);

    const handleAdd = async() => {
        // console.log(employees);
        const { firstname,lastname,age,qualification,email } = employees
        if(!firstname || !lastname || !age || !qualification || !email){
            toast.error("Please Enter valid inputs")
        }
        else{
            const res = await addEmployee(employees)
            console.log(res)
            if(res.status == 200){
                toast.success('Employee Added')
                handleClose()
            }
            else{
                toast.error("Adding Employee Failed!!")
            }
        }
    }

    return (
        <>
            <div>
                <button onClick={handleShow} className='btn btn-primary rounded-5 mt-4 ms-3 shadow'>
                    <i className="fa-solid fa-plus fa-lg"></i>
                </button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton className='bg-primary-subtle'>
                        <Modal.Title className='bg-primary-subtle text-primary'>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-primary-subtle'>
                    {/* <FloatingLabel controlId="floatingId" label="Id" className="mb-3">
                            <Form.Control onChange={(e) => { setEmployees({ ...employees, id: e.target.value }) }} type="number" placeholder="img-url" />
                        </FloatingLabel> */}
                        <FloatingLabel
                            controlId="floatingFirst"
                            label="FirstName"
                            className="mb-3"
                        >
                            <Form.Control onChange={(e) => { setEmployees({ ...employees, firstname: e.target.value }) }} type="text" placeholder="first name" className="mb-3" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingLast" label="LastName" className="mb-3">
                            <Form.Control onChange={(e) => { setEmployees({ ...employees, lastname: e.target.value }) }} type="text" placeholder="last name" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
                            <Form.Control type="text" placeholder="age" onChange={(e) => { setEmployees({ ...employees, age: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingQual" label="Qualification" className="mb-3">
                            <Form.Control type="text" placeholder="Bca" onChange={(e) => { setEmployees({ ...employees, qualification: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingMail" label="Email-Id" className="mb-3">
                            <Form.Control type="email" placeholder="demo@gmail.com" onChange={(e) => { setEmployees({ ...employees, email: e.target.value }) }} />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer className='bg-primary-subtle'>
                        <Button variant="secondary" onClick={handleClose} className='rounded-pill'>
                            Close
                        </Button>
                        <Button variant="primary" className='rounded-pill' onClick={handleAdd}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Add