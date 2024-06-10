import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import StickyHeadTable from "../../components/Table/Table.jsx";
import Search from "../../components/Search/Search.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import "./Specializations.scss";

const Specializations = () => {
    const columns = [
        {id: 'code', label: 'Код', minWidth: 100},
        {
            id: 'title',
            label: 'Название',
            minWidth: 170,
            align: 'left',
            format: (value) => value.toLocaleString('ru-Ru'),
        },
        {
            id: 'min_pass_score',
            label: 'Минимальный проходной балл',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('ru-Ru'),
        },
        {
            id: 'additional_actions',
            label: null,
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('ru-Ru'),
        },

    ];


    function createData(code, title, min_pass_score) {
        return {code, title, min_pass_score};
    }

    const rows = [
        createData('India', 'Международный университет информационных технолоигй', '1231',),
        createData('Kz', 'ВКТУ им. Д. Серикбаева', '1231', '12312'),

    ];

    return (
        <div className="specializations page">
            <Header/>
            <div className="container">
                <div className="search_and_filter">
                    <Search placeholder={"Поиск по специальностям"}/>
                    <Filter/>
                </div>
            <StickyHeadTable columns={columns} rows={rows}/>
            </div>

            <Footer/>
        </div>
    );
};

export default Specializations;