import React from 'react';

const CampusTile = ({ campus }) => {
    const { name, bootcamps } = campus;

    return (
        <>
            <h3>{name}</h3>
            <ul>
                {bootcamps.map(bootcamp => {
                    return (
                        <li>{bootcamp.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default CampusTile;
