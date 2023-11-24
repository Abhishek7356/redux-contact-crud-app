import React, { useState } from 'react'
import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../redux/contactSlice';

function Update() {

    const { id } = useParams()
    const storeState = useSelector((state) => state.contactReducer)
    let contactUser = storeState[id];
    const [name, setName] = useState(contactUser.name)
    const [email, setEmail] = useState(contactUser.email)
    const [number, setNumber] = useState(contactUser.number)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(contactUser);

    const handleSubmit = () => {
        dispatch(editContact({ id, user: { name, email, number } }))
        navigate('/')
        alert('contact edited succesfully')
    }

    return (
        <div>
            <div style={{ minHeight: '90vh' }} className='d-flex justify-content-center align-items-center'>
                <form style={{ width: '400px' }}>
                    <h2 className='fw-bold text-center mb-3'>Edit Contact</h2>
                    <MDBInput onChange={(e) => setName(e.target.value)} className='mb-4' size='lg' value={name} type='text' label='Name' />
                    <MDBInput onChange={(e) => setEmail(e.target.value)} className='mb-4' size='lg' value={email} type='email' label='Email address' />
                    <MDBInput onChange={(e) => setNumber(e.target.value)} className='mb-4' size='lg' value={number} type='number' label='Mobile Number' />
                    <div className='text-center'>
                        <MDBBtn onClick={handleSubmit} style={{ width: '155px' }} block>
                            Edit Contact
                        </MDBBtn>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update