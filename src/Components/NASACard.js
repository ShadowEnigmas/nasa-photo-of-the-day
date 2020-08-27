import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    border: 1px solid darkgrey;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 2.5rem;
`;

const DescContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Desc = styled.p`
    font-size: 1rem;
    width: 70%;
    border: 2px solid darkgrey;
    background-color: lightgrey;
    text-align: justify;
`;

const NasaInfo = props => {
    console.log(props);

    return (
        <div className='nasaCard' key={props.data}>
            <MainContainer>
                <TitleContainer>
                    <Title className='title'>{props.title}</Title>
                </TitleContainer>
                <div className="img-cont">
                    <img src={props.image} alt="space NASA" />
                </div>
                <DescContainer>
                    <Desc>{props.info}</Desc>
                </DescContainer>
            </MainContainer>
        </div>
    )
}

export default NasaInfo;