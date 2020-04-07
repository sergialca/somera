import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link as GLink } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <GLink to="/">Home</GLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <GLink to="/">Home</GLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;
