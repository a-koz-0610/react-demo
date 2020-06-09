import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LoadingIndicatorSpinner from '../../components/loading';

import style from './style.module.scss';
import CampusTile from '../../components/campus-tile';

const Campuses = () => {

    const campusesUrl = `http://localhost:8080/campuses/`,
        [campuses, setCampuses] = useState([]),
        [loadingCampuses, setLoadingCampuses] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(campusesUrl);
            setCampuses(result.data);
            setTimeout(() => {
                setLoadingCampuses(false);
            }, 1000);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={style.campuses__container}>
            <h1>Campuses</h1>
            {loadingCampuses ? <LoadingIndicatorSpinner /> :
                <ul>
                    {campuses.map(campus => {
                        return (
                            <CampusTile key={campus.id} campus={campus} />
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default Campuses;