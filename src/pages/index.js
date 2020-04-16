import React, { Fragment } from "react";
import Nav from "../components/nav/nav";
import Varietat from "../components/varietat/varietat";
import InstaRow from "../components/instaRow/instaRow";
//import InstagramEmbed from "react-instagram-embed";
import Modal from "../components/modal/modal";
import Form from "../components/form/form";
import Footer from "../components/footer/footer";
import logoIntro from "../../static/somera_intro.png";
import blonde from "../../static/blonde.jpg";
import ipa from "../../static/ipa.jpg";
import weisse from "../../static/weiss.jpg";
import pack from "../../static/pack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./main.module.css";

const Main = () => {
    return (
        <Fragment>
            <Modal />
            <Nav />
            <div id="cervesa" className={style.intro}>
                <img
                    className={style.imgIntro}
                    src={logoIntro}
                    alt="Somera cervesa artesana intro"
                />
                <div className={style.textIntro}>
                    <span className={`${style.title} ${style.second}`}>La nostra cervesa</span>
                    <p className={`${style.justify} ${style.font}`}>
                        La nostra visió consisteix en oferir cervesa d’alta qualitat respectant els
                        processos d’elaboració tradicionals.
                    </p>
                    <p className={`${style.justify} ${style.font}`}>
                        Treballem amb entusiasme i de manera artesana, sense pressa. Escollim
                        ingredients de proximitat, aportem a les nostres receptes la paciència que
                        es mereixen, respectant els temps de maduració i aconseguint un resultats de
                        qualitat.
                    </p>
                </div>
            </div>
            <div id="varietats" className={`${style.title} ${style.center}`}>
                Varietats de cerveses
            </div>
            <div className={style.varietats}>
                <Varietat
                    imgSrc={ipa}
                    subTitle="IPA"
                    info="Alc: 6,2%, IBU: 50, EBC: 10,4"
                    text="Cervesa rossa d’alta fermentació i sense filtrar. De gust intens, aromàtic i refrescant. Elaborada amb dues varietats de malta i sis llúpols d’òrigen americà.
Somera IPA està pensada per a tots aquells que gaudeixin d’una cervesa llupolada però sense ser excessivament amarga. S’aprecien notes cítriques i florals, ideals per treu-re la sed."
                />
                <Varietat
                    imgSrc={blonde}
                    subTitle="Blonde"
                    text="Cervesa rossa d’alta fermentació i sense filtrar. De gust lleuger i fresc, molt fàcil de prendre. Elaborada amb tres varietats de malta i tres llúpols d’origen europeu.
Somera Blonde está pensada per a tots aquells que els busquin gaudir d’una cervesa lleugera. Ideal per pendre-la durant el vermut."
                    info="Alc: 5,6% IBU: 15 EBC: 8,5"
                />
                <Varietat
                    imgSrc={weisse}
                    subTitle="Weisse"
                    text="Cervesa de blat d’alta fermentació i sense filtrar.
De textura cremosa i amb gust lleuger a llúpols i aroma afruitada. Conté notes de plàtan i clau. Somera Weisse està elaborada segons la tradició bavaresa i recomanem prende-la de la mateixa manera: ebocant tot el seu contingut en un got alt i deixant pas als sediments naturals."
                    info="Alc: 5,5% IBU: 22 EBC: 9,7"
                />
            </div>
            <div>
                <InstaRow />
            </div>
            <div id="packs" className={style.pack}>
                <div className={style.textPack}>
                    <span className={`${style.title} ${style.second}`}>Demana el teu pack</span>
                    <p className={`${style.justify} ${style.font}`}>
                        Tant si ets d’un únic estil o de tots, tenim el pack ideal! Per compartir,
                        per regalar o per gaudir-los sol.{" "}
                        <span className={style.bold}>
                            Contacta amb nosaltres a través del nostre formulari
                        </span>{" "}
                        i indica’ns la teva preferència.
                    </p>
                    <p className={`${style.imp} ${style.font}`}>
                        <span>Novetat!!</span> També tenim pack per als col·leccionistes
                    </p>
                </div>
                <img className={style.imgPack} src={pack} alt="pack degustacio" />
            </div>
            <div id="form">
                <Form />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </Fragment>
    );
};

export default Main;
