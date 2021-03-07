import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country
    const countryStyle = {
        border: '1px solid red',
        marginBottom: '15px'
    }
    const handleAddCountry = props.handleAddCountry

    const buttonStyle = {
        marginBottom: '10px',
        padding: '5px'
    }
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <img style={{ height: '131px' }} src={flag} alt="" />
            <p>population:{population}</p>
            <p>Region:{region}</p>
            <button style={buttonStyle} onClick={() => handleAddCountry(props.country)}>add country</button>

        </div>
    );
};

export default Country;