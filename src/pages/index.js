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
import pack from "../../static/pack.jpg";
import { LangContext } from "../context/lang";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";

const Main = () => {
    const [lang, setLang] = useContext(LangContext);
    const [content, setContent] = useState("hello");

    useEffect(() => {
        if (lang === "cat") catContent();
        else if (lang === "esp") espContent();
    }, [lang]);

    const catContent = async () => {
        const res = await axios({
            url: "https://someraserver.herokuapp.com/api/cat",
        });
        setContent(res.data[0]);
    };

    const espContent = async () => {
        const res = await axios({
            url: "https://someraserver.herokuapp.com/api/esp",
        });
        setContent(res.data[0]);
    };
    return (
        <Fragment>
            <Modal />
            <Nav navVarietats={content.navVarietats} navUs={content.navUs} />
            <div id="cervesa" className={style.intro}>
                <img
                    className={style.imgIntro}
                    src={logoIntro}
                    alt="Somera cervesa artesana intro"
                />
                <div className={style.textIntro}>
                    <span className={`${style.title} ${style.second}`}>{content.beerTitle}</span>
                    <p className={`${style.justify} ${style.font}`}>{content.beerText}</p>
                </div>
            </div>
            <div id="varietats" className={`${style.title} ${style.center}`}></div>
            <div className={style.varietats}>
                <Varietat
                    imgSrc={ipa}
                    subTitle="IPA"
                    info="Alc: 6,2%, IBU: 50"
                    text={content.ipaText}
                />
                <Varietat
                    imgSrc={blonde}
                    subTitle="Blonde"
                    text={content.blondeText}
                    info="Alc: 5,6% IBU: 15"
                />
                <Varietat
                    imgSrc={weisse}
                    subTitle="Weissebier"
                    text={content.weissebierText}
                    info="Alc: 5,5% IBU: 22"
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
            <div>
                <InstaRow text={content.instaText} btn={content.instaBtn} />
            </div>
            <div id="packs" className={style.pack}>
                <div className={style.textPack}>
                    <span className={`${style.title} ${style.second}`}>{content.packTitle}</span>
                    <p className={`${style.justify} ${style.font}`}>
                        {content.packText} <span className={style.bold}>{content.packContact}</span>{" "}
                        {content.packTexto}
                    </p>
                    <p className={`${style.imp} ${style.font}`}>
                        <span>{content.packNew}</span> {content.packNewText}
                    </p>
                </div>
                <img className={style.imgPack} src={pack} alt="pack degustacio" />
            </div>
            <div id="form">
                <Form
                    title={content.formTitle}
                    nom={content.formNom}
                    mail={content.formMail}
                    comment={content.formComment}
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
            <div id="us">
                <Left title={content.teamTitle} text={content.teamText} />
            </div>
            <div id="acgc">
                <Right title={content.acgcTitle} text={content.acgcText} />
            </div>
            <div id="footer">
                <Footer alc={content.footerAlc} />
            </div>
        </Fragment>
    );
};

export default Main;
