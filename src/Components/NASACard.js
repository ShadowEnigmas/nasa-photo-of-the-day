import React from 'react';

const NasaInfo = props => {
    console.log(props);

    return (
        <div className='nasaCard' key={props.data}>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <img src={props.image} alt='We are NASA!'/>
            <p>{props.info}</p>
        </div>
    )
}

export default NasaInfo;