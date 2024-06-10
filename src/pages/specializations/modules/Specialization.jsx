import Header from "../../../components/Header/Header.jsx";
import Search from "../../../components/Search/Search.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import Switcher from "../../../components/Switcher/Switcher.jsx";
import Blocks from "../../../components/BlocksRow/Blocks.jsx";
import "./Specialization.scss"
import BasicLineChart from "../../../components/LineChart/LineChart.jsx";

const Specialization = () => {
    return (
        <div className="specialization page">
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__inner">
                        <div className="search">
                            <div className="switcher">
                                <Switcher leftSwitch={"B057 - Информационных технологии"} rightSwitch={"Отзывы"}
                                          leftLink={"#"} rightLink={"#"}/>
                            </div>
                            <Search placeholder={"Поиск по специальностям"}/>
                        </div>
                        <Blocks/>
                    </div>
                    <div className="charts">
                        <BasicLineChart xAxisList={[1, 3, 5, 7, 10]} yAxisList={[5.5, 2, 10, 11, 25]}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Specialization;