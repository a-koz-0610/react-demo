import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';


const Nav = () => {
    return (
        <ul className={style.link__container}>
            <Link to={'/'}>Home</Link>
            <Link to={'/campuses'}>Campuses</Link>
            <Link to={'/star-wars-people'}>Star Wars</Link>
        </ul>
    )
}

export default Nav;
