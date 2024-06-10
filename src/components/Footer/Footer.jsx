import Link from "../../ui/Link/Link";
import "./Footer.scss"
import Icon from "../../ui/Icon/Icon.jsx";

const Footer = () => {
    return <div className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="left">
                    <h4>Абитуриент</h4>
                    <div className="footer__icons">
                        <a href="https://instagram.com/"> <Icon name={"instagram"}/></a>
                        <a href="https://telegram.org/"> <Icon name={"telegram"}/></a>
                    </div>
                </div>

                <div className="right">
                    <Link to={"#"} className="link">Политика сайта</Link>
                    <Link to={"#"} className="link">Поддержать</Link>
                    <Link to={"/about-us"} className="link">О нас</Link>
                </div>
            </div>
        </div>

    </div>
}
export default Footer;
