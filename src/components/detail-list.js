import React from 'react';
import DetailItem from './details-item';

const DetailList = ({details}) => {
    

    if(details) {
        const renderedList = details.map(detail => {
            return <DetailItem detail={detail} key={detail.title}/>
        });

        return <div>{renderedList}</div>;
    }

    return <div></div>;
}

export default DetailList;