import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import SearchBar from './SearchBar.components';

const NavBar = (params) => {
  return (
    <Navbar bg="light" expand="sm" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <div className="d-flex w-100 justify-content-between">
          <div className="d-flex align-items-center">
            <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
              <span>שלום {params['userData']['name']} </span>
              <img
                src={require(`./../assets/flags/${params['locationData']['country_flag']}`)}
                width="28"
                height="14px"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                style={{
                  marginTop: '0.0em',
                  marginRight: '8px'
                }}
              />
            </Navbar.Brand>
          </div>
          
          <SearchBar />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-buttons-options'>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/settings" className={styles.navLink}>
              הגדרות
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
              צור קשר
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
