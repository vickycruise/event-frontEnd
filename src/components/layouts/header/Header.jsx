import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Use NavLink for client-side navigation
import styles from "./Header.module.css"; // Importing the CSS Module

const Header = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <header className={styles.header}>
      <Navbar className={styles.customNavbar} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className={styles.navbarBrand}>
            EMS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto"
              activeKey={activeKey}
              onSelect={(selectedKey) => setActiveKey(selectedKey)}
            >
              {/* Home link */}
              <Nav.Link
                as={NavLink}
                to="/"
                eventKey="home"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Home
              </Nav.Link>

              {/* Events link */}
              <Nav.Link
                as={NavLink}
                to="/events"
                eventKey="events"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Events
              </Nav.Link>

              {/* Notifications link */}
              <Nav.Link
                as={NavLink}
                to="#notifications"
                eventKey="notifications"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Notifications
              </Nav.Link>

              {/* User-related routes */}
              <Nav.Link
                as={NavLink}
                to="/user-register"
                eventKey="userRegister"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Register
              </Nav.Link>

              {/* Admin-related routes */}
              <Nav.Link
                as={NavLink}
                to="/admin/events"
                eventKey="adminEvents"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Admin Events
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/admin/users"
                eventKey="adminUsers"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Admin Users
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/admin/event-create"
                eventKey="adminCreateEvent"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Create Event
              </Nav.Link>

              {/* Authentication routes */}
              <Nav.Link
                as={NavLink}
                to="/authentication/sign-in"
                eventKey="signIn"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Sign In
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/authentication/sign-up"
                eventKey="signUp"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
