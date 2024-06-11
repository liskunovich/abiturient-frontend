import Header from "../../../components/Header/Header.jsx";
import Search from "../../../components/Search/Search.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import Switcher from "../../../components/Switcher/Switcher.jsx";
import Blocks from "../../../components/BlocksRow/Blocks.jsx";
import "./Specialization.scss"
import BasicLineChart from "../../../components/LineChart/LineChart.jsx";
import BasicList from "../../../components/List/List.jsx";
import BasicBarChart from "../../../components/BarChart/BarChart.jsx";
import {useLoaderData} from "react-router-dom";


const Specialization = () => {

    const {title, passScore, universitiesList, passScoresByYears, studentsByYears, jobOffers} = useLoaderData();

    const xAxisListPassScores = passScoresByYears.data.map(item => item.year);
    const yAxisListPassScores = passScoresByYears.data.map(item => item.min_pass_score);

    const xAxisListStudentsByYears = studentsByYears.data.map(item => item.year);
    const yAxisListStudentsByYears = studentsByYears.data.map(item => item.students_amount);

    return (
        <div className="specialization page">
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__inner">
                        <div className="search">
                            <div className="switcher">
                                <Switcher leftSwitch={title} rightSwitch={"Отзывы"}
                                          leftLink={"#"} rightLink={"#"}/>
                            </div>
                            <Search placeholder={"Поиск по специальностям"}/>
                        </div>
                        <Blocks data={passScore.data}/>
                    </div>
                    <div className="first-statistics">
                        <div className="line-chart">
                            <BasicLineChart xAxisList={xAxisListPassScores}
                                            yAxisList={yAxisListPassScores}
                                            label={"Минимальный проходной балл"}/>
                        </div>
                        <div className="universities">
                            <BasicList data={universitiesList.data} primary={'university'} secondary={'min_pass_score'}
                                       iconName={'university'}/>
                        </div>
                    </div>
                    <div className="second-statistics">
                        <div className="job-offers">
                            <BasicList data={jobOffers} primary={'title'} secondary={'link'} iconName={'job'}/>
                        </div>
                        <div className="bar-chart">
                            <BasicBarChart xAxisList={xAxisListStudentsByYears} yAxisList={yAxisListStudentsByYears}
                                           label={'Количество поступающих'}/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Specialization;