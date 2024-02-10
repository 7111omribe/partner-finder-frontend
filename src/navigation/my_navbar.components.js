import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (params) => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/">
          שלום {params['userData']['name']}
          <img
            src={require(`./../assets/flags/${params['locationData']['country_flag']}`)}
            width="28"
            height="14px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{
              marginTop: '9px',
              marginRight: '8px'
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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