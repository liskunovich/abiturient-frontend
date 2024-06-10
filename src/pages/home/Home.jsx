import Navigation from "../../components/Navigation/Navigation.jsx";
import Button from "../../ui/Button";
import Input from "../../ui/Input/Input.jsx";
import "./Home.scss"
import "../common/common.scss"
import Footer from "../../components/Footer/Footer.jsx";


const HomeComponent = () => {
    return (
        <div className="home page">
            <header><Navigation/></header>
            <main className="home__content">
                <h1 className="home__title">Начните поиск</h1>
                <h3 className="home__subtitle">Введите специальность или ВУЗ</h3>
                <form className="home__form">
                    <Input placeholder={'Информационные технологии'}
                           sx={
                               {
                                   width: "320px",
                                   padding: "16px",
                                   height: "50px",
                               }
                           }
                    />
                    <Button variant="contained" text={'Поиск'} sx={
                        {width: "124px"}
                    }/>
                </form>
            </main>
            <Footer/>
        </div>
    );
};

export default HomeComponent;