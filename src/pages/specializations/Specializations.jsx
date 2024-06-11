import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import StickyHeadTable from "../../components/Table/Table.jsx";
import Search from "../../components/Search/Search.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import "./Specializations.scss";
import axios from "axios";
import {useEffect, useState} from "react";


const Specializations = () => {
    const [specializations, setSpecializations] = useState([])

    const fetchSpecializations = () => {
        axios.get('http://127.0.0.1:8080/statistic/specializations', {
            params: {
                concurs_type: 'COMMON',
            }}).then(r => {
            const specializationsResponse = r.data;
            const specializationsList = specializationsResponse.map(
                s => {
                    return {'id': s.id, 'title': s.title, 'min_pass_score': s.min_pass_score, 'additional_actions': ''}
                }
            )
            setSpecializations(specializationsList);
        })

    }
    useEffect(() => {
        fetchSpecializations();
    }, []);

    const columns = [
        {
            id: 'title',
            label: 'Название',
            minWidth: 170,
            align: 'left',
        },
        {
            id: 'min_pass_score',
            label: 'Минимальный проходной балл',
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

    return (
        <div className="specializations page">
            <Header/>
            <div className="container">
                <div className="search_and_filter">
                    <Search placeholder={"Поиск по специальностям"}/>
                    <Filter/>
                </div>
                <StickyHeadTable columns={columns} rows={specializations}/>
            </div>

            <Footer/>
        </div>
    );
};

export default Specializations;