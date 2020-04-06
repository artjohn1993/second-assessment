import React from 'react'

const Result = ({total}) => {
    return (
        <div className="ui segment">
            <p>
                <b>Search Result</b><br></br>
                Found {total} articles
            </p>
            
        </div>
    );
}

export default Result;