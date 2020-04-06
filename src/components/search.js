import React from 'react';

class Search extends React.Component {
state = ({term : ''});

    onChangeTerm = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchTerm(this.state.term);
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <div className="ui fluid icon input">
                    <input value={this.state.term} type="text" placeholder="Search a very wide input..."  onChange={this.onChangeTerm}/>
                    <i className="search icon"></i>
                </div>
            </form>
        );
    }
}

export default Search;