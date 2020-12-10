import React, { useEffect } from 'react';
import Axios from 'axios';

const CampusesScreen = () => {

    const campusesURl = `http://localhost:8080/campuses`;

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(campusesURl);
            console.log(result);
        }

        fetchData();
        // eslint-disable-next-line
    }, [])

    return (
        <h1>Campuses</h1>
    )
}

export default CampusesScreen;