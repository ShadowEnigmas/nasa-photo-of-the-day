import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaInfo from './NASACard';

function CardData(){
    const [nasaInfo, setNasaInfo] = useState();

    useEffect(() => {
        axios
            .get('https://apod.nasa.gov/apod/astropix.html')
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
            {/* {<NasaInfo key={nasaInfo.data} title={nasaInfo.title} info={nasaInfo.explanation} image={nasaInfo.hdurl}/>} */}
        </div>
    )
}

export default CardData;