import Header from "../../components/Header/Header.jsx";
import Search from "../../components/Search/Search.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Switcher from "../../components/Switcher/Switcher.jsx";

const Specialization = () => {
    return (
        <div className="home">
            <Header/>
            <div className="container">
                <div className="search">
                    <div className="switcher">
                        <Switcher leftSwitch={"B057 - Информационных технологии"} rightSwitch={"Отзывы"} leftLink={"#"} rightLink={"#"}/>
                    </div>
                    <Search placeholder={"Поиск по специальностям"}/>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Specialization;