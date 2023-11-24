import React from 'react'
import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/contactSlice';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (name && email && number) {
            dispatch(addContact({ name, email, number }))
            setName("")
            setEmail("")
            setNumber(null)
            navigate('/')
            alert('contact added successfully')
        }
    }

    return (
        <div style={{ minHeight: '90vh' }} className='d-flex justify-content-center align-items-center'>
            <form style={{ width: '400px' }}>
                <h2 className='fw-bold text-center mb-3'>Add Contact</h2>
                <MDBInput onChange={(e) => setName(e.target.value)} className='mb-4' size='lg' type='text' label='Name' />
                <MDBInput onChange={(e) => setEmail(e.target.value)} className='mb-4' size='lg' type='email' label='Email address' />
                <MDBInput onChange={(e) => setNumber(e.target.value)} className='mb-4' size='lg' type='number' label='Mobile Number' />
                <div className='text-center'>
                    <MDBBtn onClick={handleSubmit} style={{ width: '150px' }} block>
                        Add Contact
                    </MDBBtn>
                </div>
            </form>
        </div>
    )
}

export default Add