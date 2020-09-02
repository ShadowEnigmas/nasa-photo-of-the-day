import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaInfo from './NASACard';

function CardData(){
    const [nasaInfo, setNasaInfo] = useState({});

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=9to3U6zTQcASqn4LlweU2ctshAnuktEXvlb9ZgYG&date=2020-08-18')
            .then(res => {
                console.log(res.data);
                setNasaInfo(res.data)
            })
            .catch(e => {
                console.log(e);
            });
    }, []);


    return (
        <div>
           { <NasaInfo key={nasaInfo.data} title={nasaInfo.title} date={nasaInfo.date} info={nasaInfo.explanation} image={nasaInfo.url}/> }
        </div>
    )
}

export default CardData;