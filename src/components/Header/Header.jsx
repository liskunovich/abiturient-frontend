import Icon from "../../ui/Icon/index.js";
import Link from "../../ui/Link/Link.jsx";
import "./Header.scss";
import Button from "../../ui/Button/Button";

function getActiveLinkClasses({isActive}) {
    let activeLinkClasses = isActive ? "active" : "";
    return ["link", activeLinkClasses].join(" ");
}

const Header = () => {
    return <div className="header">
        <div className="container">
            <div className="header__inner">
                <div className="left">
                    <h4>Абитуриент</h4>
                </div>
                <div className="middle">
                    <Link to={"/specializations"} className={getActiveLinkClasses}>Специальности</Link>
                    <Link to={"/universities"} className={getActiveLinkClasses}>ВУЗы</Link>
                    <Link to={"/statistics"} className={getActiveLinkClasses}>Статистика</Link>
                </div>
                <div className="right">
                    <Button text={"Поделиться"}/>
                    <img src="" alt="" className="profile_picture"/>
                    <Icon name={"downarrow"}/>
                </div>
            </div>
        </div>

    </div>
}
export default Header;
