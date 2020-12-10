import React from 'react';
import style from './style.module.scss';

const PeopleList = ({ people }) => {
    people.map(person => {
        return (
            <div className={style.person__container} key={person.url}>
                <h2>Name:{person.name}</h2>
                <p>Hair Color: {person.hair_color}</p>
                <p>Birth Year:  {person.birth_year}</p>
            </div>
        )
    })
}

export default PeopleList;
