import React from 'react';

import './popularList.scss'
import PopularSingle from '../popular-single/PopularSingle';

const PopularList = () => {
    return(
        <div className="popular-list">
            <PopularSingle />
        </div>
    )
}

export default PopularList;