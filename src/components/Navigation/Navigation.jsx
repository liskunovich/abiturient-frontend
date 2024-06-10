import Link from "../../ui/Link/Link";
import "./Navigation.scss"

const Navigation = () => {
    return <div className="navigation">
        <Link to={"/specializations"} >Специальности</Link>
        <Link to={"/universities"}>ВУЗы</Link>
        <Link to={"/statistics"}>Статистика</Link>
    </div>
}
export default Navigation;