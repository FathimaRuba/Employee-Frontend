import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updateEmployee } from '../Services/allApi';

function Edit({data}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ edit,setEdit ] = useState(data)

    const handleUpdate = async() => {
        const res = await updateEmployee(edit._id,edit)
        console.log(res)
        handleClose()
    }

  return (
    <div>
        <button className='btn text-primary' onClick={handleShow}>
            <i className="fa-lg fa-regular fa-pen-to-square" />
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
                            <Form.Control value={edit?.firstname} onChange={(e) => { setEdit({ ...edit, firstname: e.target.value }) }} type="text" placeholder="first name" className="mb-3" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingLast" label="LastName" className="mb-3">
                            <Form.Control value={edit?.lastname} onChange={(e) => { setEdit({ ...edit, lastname: e.target.value }) }} type="text" placeholder="last name" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
                            <Form.Control value={edit?.age}  type="text" placeholder="age" onChange={(e) => { setEdit({ ...edit, age: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingQual" label="Qualification" className="mb-3">
                            <Form.Control value={edit?.qualification} type="text" placeholder="Bca" onChange={(e) => { setEdit({ ...edit, qualification: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingMail" label="Email-Id" className="mb-3">
                            <Form.Control value={edit?.email} type="email" placeholder="demo@gmail.com" onChange={(e) => { setEdit({ ...edit, email: e.target.value }) }} />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer className='bg-primary-subtle'>
                        <Button variant="secondary" onClick={handleClose} className='rounded-pill'>
                            Close
                        </Button>
                        <Button variant="primary" className='rounded-pill' onClick={handleUpdate}>Update</Button>
                    </Modal.Footer>
                </Modal>
    </div>
  )
}

export default Edit