import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import lletra from "../../../static/lletra.png";
import instaLogo from "../../../static/instagram.png";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./nav.module.css";

const Nav = () => {
    const [show, setShow] = useState(false);

    const sel = () => {
        setShow(false);
    };

    const btnClick = () => {
        setShow(!show);
    };

    return (
        <Navbar className={style.navBar} expanded={show} fixed="top" expand="lg">
            <AnchorLink onClick={sel} to="/#cervesa">
                <img className={style.logo} src={lletra} alt="logo" />
            </AnchorLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={btnClick} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <AnchorLink
                    onClick={sel}
                    className={`${style.space} ${style.navLink}`}
                    to="/#varietats"
                >
                    Varietats
                </AnchorLink>
                <br />
                <AnchorLink
                    onClick={sel}
                    className={`${style.space} ${style.navLink}`}
                    to="/#packs"
                >
                    Packs
                </AnchorLink>
                <br />
                <AnchorLink onClick={sel} className={`${style.space} ${style.navLink}`} to="/#form">
                    Contacta
                </AnchorLink>
                <br />
                <a
                    onClick={sel}
                    className={style.navLink}
                    href="https://www.instagram.com/someracervesaartesana/?hl=es"
                >
                    <img className={style.instaLogo} src={instaLogo} alt="insta" />
                </a>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;
