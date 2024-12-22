import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Header.module.css"; // Importing the CSS Module

const Header = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <header className={styles.header}>
      <Navbar className={styles.customNavbar} expand="lg">
        <Container>
          <Navbar.Brand href="#" className={styles.navbarBrand}>
            MyApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto"
              activeKey={activeKey}
              onSelect={(selectedKey) => setActiveKey(selectedKey)}
            >
              <Nav.Link href="/" eventKey="home" className={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link
                href="events"
                eventKey="events"
                className={styles.navLink}
              >
                Events
              </Nav.Link>
              <Nav.Link
                href="#notifications"
                eventKey="notifications"
                className={styles.navLink}
              >
                Notifications
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
