import React from 'react';
import Nav from '../../components/nav';
import style from './style.module.scss';


const Home = () => {
    return (
        <>
            <Nav />
            <div className={style.home__container}>
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home;
