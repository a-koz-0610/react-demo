import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import LoadingIndicatorSpinner from '../../components/loading';
import style from './style.module.scss';
import PeopleList from '../../components/people-list';

const StarWarsPeopleScreen = () => {

    const starWarsPeopleUrl = `https://swapi.py4e.com/api/people/`,
        //useState allows a functional component to manage "state" or data in the application
        [people, setPeople] = useState(null),
        [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //grab the data from the api
        //show that the data exists
        //run a cleanup so it only fires once (on page load)
        const fetchData = async () => {
            const result = await Axios(starWarsPeopleUrl);
            setPeople(result.data.results);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
        //cleanup
        fetchData();

        // eslint-disable-next-line
    }, []);

    return (
        <div className={style.starWarsPeople__container}>
            {isLoading ? <LoadingIndicatorSpinner /> :
                <PeopleList people={people} />
            }
        </div>
    )
}

export default StarWarsPeopleScreen;