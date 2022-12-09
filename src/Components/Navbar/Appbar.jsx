import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import {moviesFilter} from './action';

function NavScrollExample(props) {
    const dispatch= useDispatch()

    const onSearch = (e) => {
      let term = e.target.value.toLowerCase()
      if (term == '') {
        dispatch({
          type: "update",
          payload: props.movies
        })
      } else {
        dispatch(moviesFilter(props.currentMovies, term))
      }
     
 
    }
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand> <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" height="30px" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='text-decoration-none text-white mt-2'>Home</Link>
            <NavDropdown title="Movie Types" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Thriller
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={onSearch}
            />
            <Button variant="warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default connect((state) => state)(NavScrollExample);