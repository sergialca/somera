import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "gatsby";
import Flag from "../flag/flag";
import lletra from "../../../static/lletra.png";
import instaLogo from "../../../static/instagram.png";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./nav.module.css";

const Nav = props => {
    const [show, setShow] = useState(false);

    const sel = () => {
        setShow(false);
    };

    const btnClick = () => {
        setShow(!show);
    };

    return (
        <Navbar className={style.navBar} expanded={show} fixed="top" expand="lg">
            <Link onClick={sel} to="/#cervesa">
                <img className={style.logo} src={lletra} alt="logo" />
            </Link>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Link onClick={sel} className={`${style.space} ${style.navLink}`} to="/#varietats">
                    {props.navVarietats}
                </Link>
                <br />
                <Link onClick={sel} className={`${style.space} ${style.navLink}`} to="/#packs">
                    Packs
                </Link>
                <br />
                <Link onClick={sel} className={`${style.space} ${style.navLink}`} to="/#form">
                    Contacta
                </Link>
                <br />
                <Link onClick={sel} className={`${style.space} ${style.navLink}`} to="/#us">
                    {props.navUs}
                </Link>
                <br />
                <Link onClick={sel} className={`${style.space} ${style.navLink}`} to="/#acgc">
                    ACGC
                </Link>
                <br />
                <a
                    onClick={sel}
                    className={style.navLink}
                    href="https://www.instagram.com/someracervesaartesana/?hl=es"
                >
                    <img className={style.instaLogo} src={instaLogo} alt="insta" />
                </a>
            </Navbar.Collapse>
            <Flag />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={btnClick} />
        </Navbar>
    );
};

export default Nav;