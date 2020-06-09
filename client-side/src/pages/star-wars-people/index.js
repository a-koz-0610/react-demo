import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LoadingIndicatorSpinner from '../../components/loading';

import style from './style.module.scss';

const StarWarsPeople = () => {

    const starWarsPeopleUrl = `https://swapi.py4e.com/api/people/`,
        [people, setPeople] = useState(null),
        [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(starWarsPeopleUrl);
            setPeople(result.data.results);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(people);

    return (
        <div className={style.starWarsPeople__container}>
            <h1>Star Wars People</h1>
            {isLoading ? <LoadingIndicatorSpinner /> :
                <ul>
                    {people.map(person => {
                        return (
                            <li key={person.url}>{person.name}</li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default StarWarsPeople;