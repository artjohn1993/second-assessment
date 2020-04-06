import React from 'react';

const CountryItem = ({country}) => {
    
    if(country) {
        const renderedCountry = country.map(item => {
            return <option key={item.code} value={item.code}>{item.country}</option>;
        })
        return renderedCountry;
    }
    
    return <option value=""></option>;
}

export default CountryItem;