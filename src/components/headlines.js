import React from 'react'

const Headlines = ({onSelectedHeadline}) => {

    return (
        <select className="ui fluid search dropdown" onChange={(e) => { onSelectedHeadline(e.target.value)}}>
            <option value="top-headlines">Top Headlines</option>
            <option value="everything">Everything</option>
        </select>
    );
}

export default Headlines;