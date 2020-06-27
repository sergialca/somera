import React, { Fragment, useContext, useState, useEffect } from "react";
import Nav from "../components/nav/nav";
import Varietat from "../components/varietat/varietat";
import Lab from "../components/lab/lab";
import InstaRow from "../components/instaRow/instaRow";
import Modal from "../components/modal/modal";
import Form from "../components/form/form";
import Contest from "../components/contest/contest";
import Right from "../components/right/right";
import Left from "../components/left/left";
import Footer from "../components/footer/footer";
import logoIntro from "../../static/somera_intro.png";
import blonde from "../../static/blonde_etiquet.png";
import ipa from "../../static/ipa_etiquet.png";
import weisse from "../../static/weisse_etiquet.png";
import lab from "../../static/lab_etiquet.png";
import PulseLoader from "react-spinners/PulseLoader";
import { LangContext } from "../context/lang";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";

const Index = () => {
    const [lang, setLang] = [useContext(LangContext), useContext(LangContext)];
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [content, setContent] = useState("hello");

    useEffect(() => {
        if (lang[0] === "cat") catContent();
        else if (lang[0] === "esp") espContent();
    }, [lang]);

    const catContent = async () => {
        setLoadSpinner(true);
        const res = await axios({
            url: "https://someraserver.herokuapp.com/api/cat",
        });
        setContent(res.data[0]);
        setLoadSpinner(false);
    };

    const espContent = async () => {
        setLoadSpinner(true);
        const res = await axios({
            url: "https://someraserver.herokuapp.com/api/esp",
        });
        setContent(res.data[0]);
        setLoadSpinner(false);
    };
    return (
        <Fragment>
            <div className={loadSpinner ? style.spinner : style.no}>
                <PulseLoader size={12} loading={true} color="#F3A400" />
            </div>
            <Modal />
            <Nav navBeer={content.navBeer} navUs={content.navUs} />
            <div id="team" className={style.intro}>
                <img
                    className={style.imgIntro}
                    src={logoIntro}
                    alt="Somera cervesa artesana intro"
                />
                <div className={style.textIntro}>
                    <span className={`${style.title} ${style.second}`}>{content.teamTitle}</span>
                    <p className={`${style.justify} ${style.font}`}>{content.teamText}</p>
                </div>
            </div>
            <div id="product">
                <Left title={content.beerTitle} text={content.beerText} />
            </div>
            <div className={`${style.title} ${style.center}`}></div>
            <div className={style.varietats}>
                <Varietat
                    imgSrc={ipa}
                    subTitle="IPA"
                    info={content.ipaFeatures}
                    text={content.ipaText}
                />
                <Varietat
                    imgSrc={blonde}
                    subTitle="Blonde"
                    text={content.blondeText}
                    info={content.blondeFeatures}
                />
                <Varietat
                    imgSrc={weisse}
                    subTitle="Weissebier"
                    text={content.weissebierText}
                    info={content.weissebierFeatures}
                />
                <Lab
                    imgSrc={lab}
                    subTitle="Somera Lab"
                    text={content.labText}
                    lab1={content.lab1}
                    lab1Text={content.lab1Text}
                    lab2={content.lab2}
                    lab2Text={content.lab2Text}
                    lab3={content.lab3}
                    lab3Text={content.lab3Text}
                    lab4={content.lab4}
                    lab4Text={content.lab4Text}
                    info={content.labConsulta}
                />
            </div>
            <div id="concurs">
                <Contest
                    title={content.contestTitle}
                    sub={content.contestSub}
                    text={content.contestText}
                    subText={content.contestTexto}
                />
            </div>
            <div>
                <InstaRow text={content.instaText} btn={content.instaBtn} />
            </div>
            <div id="acgc">
                <Right title={content.acgcTitle} text={content.acgcText} />
            </div>
            <div id="form">
                <Form
                    title={content.formTitle}
                    nom={content.formNom}
                    mail={content.formMail}
                    comment={content.formComment}
                    requiredField={content.formRequired}
                    validMail={content.formValidMail}
                    formOk={content.formOk}
                    formBad={content.formBad}
                    ty={content.formTy}
                />
            </div>
            <div id="footer">
                <Footer alc={content.footerAlc} />
            </div>
        </Fragment>
    );
};

export default Index;
