import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../redux/contactSlice';

function Home() {
    const contactState = useSelector((state) => state.contactReducer)
    console.log(contactState);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    let allContacts = contactState.map((item, key) => {
        return (
            <tr>
                <th scope='row'>{key + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td className='d-flex gap-2'><button onClick={() => navigate(`/edit/${key}`)} className='btn btn-outline-primary'><i class="fa-solid fa-pencil"></i></button><button onClick={() => dispatch(deleteContact(item.email))} className='btn btn-outline-primary'><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        )
    })

    return (
        <div style={{ minHeight: '100vh' }} className='p-5'>
            <div className='text-end mb-3'>
                <Link to={'/add'}><button className='btn btn-primary'>Add Contact</button></Link>
            </div>
            <h2 className='text-center mb-3 fw-bold'>All Contact</h2>
            <MDBTable hover>
                <MDBTableHead>
                    <tr>
                        <th scope='col' className='fw-bold fs-5'>ID</th>
                        <th scope='col' className='fw-bold fs-5'>Name</th>
                        <th scope='col' className='fw-bold fs-5'>Email</th>
                        <th scope='col' className='fw-bold fs-5'>Phone No</th>
                        <th scope='col' className='fw-bold fs-5'>Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {allContacts}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default Home