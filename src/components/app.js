import React from 'react';
import '../css/app.css';
import CountrySelection from './country';
import Headlines from './headlines';
import Search from './search';
import Result from './totalResult';
import news from '../apis/news';
import DetailList from './detail-list';
import Loading from './loader';

    const KEY = "01c595ac8058484daf3d4b74f8107d6e"

class App extends React.Component {
    
    state = ({searchTerm: 'bitcoin',selectedHeadline: 'top-headlines', selectedCountry: '', articles : [], total : 0, isCallApi: false, loading: false})

    componentDidUpdate() {
        this.checkState();
    }

    selectedHeadline = (headline) => {
        this.state.selectedCountry !== '' ? this.setState({selectedHeadline: headline, isCallApi: true}) : this.setState({selectedHeadline: headline, isCallApi: false})
        
    }

    selectedCountry = (country) => {
        console.log(country)
        this.setState({selectedCountry: country, isCallApi: true})
    }

    searchTerm = (term) => {
        this.state.selectedCountry !== '' ? this.setState({searchTerm: term, isCallApi:true}) : this.setState({searchTerm: term, isCallApi:false})
    }

    checkState = () => {
        if(this.state.selectedCountry !== '') {
            if(this.state.isCallApi) {
                this.state.selectedHeadline === "top-headlines" ? this.callTopHeadlineApi() : this.callEverythingApi();
            }
        }
    }

    callTopHeadlineApi = async () => {
        this.setState({loading: true, isCallApi:false});
        const result = await news.get('/v2/' + this.state.selectedHeadline,{
            params: {
                country: this.state.selectedCountry,
                apiKey: KEY 
            }
        })
        console.log(result);
        this.setState({loading: false, articles: result.data.articles, total: result.data.totalResults, isCallApi: false})
    }

    callEverythingApi = async () => {
        this.setState({loading: true, isCallApi:false});
        const result = await news.get('/v2/' + this.state.selectedHeadline,{
            params: {
                q: this.state.searchTerm,
                apiKey: KEY 
            }
        })
        console.log(result);
        this.setState({loading: false, articles: result.data.articles, total: result.data.totalResults, isCallApi: false})
    }

    render() {
        return(
            <div>
                <div className="custom-header">
                    <div className="header-title">
                        <h1>Art News App</h1>
                    </div>
                    <div className="ui grid">
                        <div className="five wide column" >
                            <CountrySelection onSelectedCountry={this.selectedCountry}/>
                        </div>
                        <div className="five wide column">
                            <Headlines onSelectedHeadline={this.selectedHeadline}/>
                        </div>
                        <div className="six wide column">
                            <Search onSearchTerm={this.searchTerm}/>
                        </div>
                    </div>
                </div>
                <div className="ui container custom-body">
                        <Result total={this.state.total}/>
                        <br></br>
                        <Loading loading={this.state.loading}/>
                        <DetailList details={this.state.articles}/>
                </div>
            </div>
            )
    }
}

export default App;