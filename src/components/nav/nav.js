import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link as GLink } from "gatsby";
import lletra from "../../../static/lletra.png";
import instaLogo from "../../../static/instagram.png";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./nav.module.css";

const Nav = () => {
    return (
        <Navbar className={style.navBar} collapseOnSelect expand="lg">
            <GLink to="/main#intro">
                <img className={style.logo} src={lletra} alt="logo" />
            </GLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <GLink className={`${style.space} ${style.navLink}`} to="/main#varietats">
                    Varietats
                </GLink>
                <br />
                <GLink className={`${style.space} ${style.navLink}`} to="/main#packs">
                    Packs
                </GLink>
                <br />
                <a
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
