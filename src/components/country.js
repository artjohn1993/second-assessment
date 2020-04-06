import React from 'react';
import CountryItem from './country-item'

class CountrySelection extends React.Component {
    state = ({country :[]});
    
    componentDidMount() {
            const countries =[
                {country: 'Philippines', code: 'ph'},
                {country: 'United States of America', code: 'us'},
                {country: 'Russia', code: 'ru'},
                {country: 'China', code: 'cn'},
                {country: 'Slovakia', code: 'sk'},
                {country: 'Hungary', code: 'hu'},
                {country: 'Mexico', code: 'mx'},
                {country: 'Bulgaria', code: 'bg'},
                {country: 'Latvia', code: 'lv'},
                {country: 'Venezuela', code: 've'}
            ];

            this.setState({country:countries});
    }

    render() {
        return(
            <select className="ui fluid search dropdown" onChange={(e) => { this.props.onSelectedCountry(e.target.value)}}>
                <option value="">Select a Country</option>
                <CountryItem country={this.state.country}/>
            </select>
        );
    }
}

export default CountrySelection;