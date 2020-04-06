import React from 'react';

const Loading = ({loading}) => {

    console.log(loading)
    if(loading) {
        return <div class="ui active loader"></div>
    }
    return <div></div>
}

export default Loading;