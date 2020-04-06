import React from 'react'

const DetailsItem = ({detail}) => {
    const isHidden = detail.urlToImage === "" ||  detail.urlToImage === null ? true : false

    if(isHidden) {
        return(
            <div>
            <div className="ui grid item-details">
                <div className="sixteen wide column">
                    <h5 class="ui header">
                        <a href={detail.url} target="_blank">{detail.title}</a>
                        <div class="sub header">{detail.description}</div>
                    </h5>
                </div>
            </div>
            <div className="ui fitted divider"></div>
        </div>
        )
    }

    return(
        <div>
            <div className="ui grid item-details">
                <div className="four wide column">
                    <img class="ui fluid image" src={detail.urlToImage}/>
                </div>
                <div className="twelve wide column">
                    <h5 class="ui header">
                        <a href={detail.url} target="_blank">{detail.title}</a>
                        <div class="sub header">{detail.description}</div>
                    </h5>
                </div>
            </div>
            <div className="ui fitted divider"></div>
        </div>
    );
}

export default DetailsItem;