import React from 'react';

const NasaInfo = props => {
    return (
        <div className='nasaCard' key={props.date}>
            <img src={props.image} alt='We are NASA!'/>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default NasaInfo;