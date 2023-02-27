import React from 'react';
// import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const BlogList = ({ users, setUsers }) => {
    
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "#C5C6D0" }}>
            <div>
            <>
                <Navbar expand="xl" link="white" variant="blue">
                <Container>
                    
                    <Nav className="me-auto link-white">
                    <h4 className='mx-5'>DigiPlus</h4>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>
                    <Nav.Link href="/features">Product</Nav.Link>
                    <Nav.Link href="/pricing">Event</Nav.Link>
                    <Nav.Link href="/reviews">Reviews</Nav.Link>
                    </Nav>
                </Container>
                </Navbar>
            </>
      <br />
            <NavLink to="/addblog" role="button" class="btn btn-secondary btn-block mx-4" style={{float: 'right'}}>
                Add Blog
            </NavLink>
            </div>
        <div className="container">
        
        <img src="https://www.priv.gc.ca/media/4847/ai.jpg" alt=" ot available" height='300' width='300'/>
        <Nav.Link href="/blog1"><h2>Will AI takeover the world?</h2></Nav.Link>
        </div>
        <div className="container">
        
        <img src="https://www.priv.gc.ca/media/5716/synthetic-data.png" alt="not available" height='300' width='300'/>
        <Nav.Link href="/secondblog"><h2>The future of AI</h2></Nav.Link>
        </div>
        </div>
        </React.Fragment>
    );
};

export default BlogList;
