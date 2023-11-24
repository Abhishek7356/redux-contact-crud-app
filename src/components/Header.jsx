import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand className='fw-bold' href='#'>
                        <img
                            src='https://th.bing.com/th/id/R.087584d26e16365c5a3686bfdd6b9c42?rik=jn1nZiPPoJhYww&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f04%2fcontact-icon_2595.png&ehk=Rui5Dryga2pgw%2f7f33kqZ5oXeNd1NTNkcRcqJI9zRe4%3d&risl=&pid=ImgRaw&r=0'
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                        <Link to={'/'}>Contact App</Link>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header