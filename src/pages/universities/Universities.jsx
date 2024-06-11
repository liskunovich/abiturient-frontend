import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import StickyHeadTable from "../../components/Table/Table.jsx";
import Search from "../../components/Search/Search.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import "./Universities.scss"
import {useEffect, useState} from "react";
import axios from "axios";

const Universities = () => {
    const columns = [
        {id: 'code', label: 'Код', minWidth: 100},
        {
            id: 'title',
            label: 'Название',
            minWidth: 170,
            align: 'left',
        },
        {
            id: 'min_pass_score',
            label: 'Количество студентов за последний год',
            minWidth: 170,
            align: 'center',
        },
        {
            id: 'additional_actions',
            label: null,
            minWidth: 170,
            align: 'right',
        },

    ];

    const [universities, setUniversities] = useState([])

    const fetchSpecializations = () => {
        axios.get('http://127.0.0.1:8080/statistic/universities',
        ).then(r => {
            const universitiesResponse = r.data;
            const universitiesList = universitiesResponse.map(
                s => {
                    return {'code': s.code,
                        'title': s.title,
                        'min_pass_score': s.students_amount,
                        'additional_actions': ''}
                }
            )
            setUniversities(universitiesList);
        })

    }
    useEffect(() => {
        fetchSpecializations();
    }, []);

    return (
        <div className="universities">
            <Header/>
            <div className="container">
                <div className="search_and_filter">
                    <Search placeholder={"Поиск по университетам"}/>
                    <Filter/>
                </div>
                <StickyHeadTable columns={columns} rows={universities}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Universities;
