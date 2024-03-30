import React from 'react';
import Container from 'react-bootstrap/Container';

import PopularList from './popular-list/PopularList';
import './popular.scss';
import { Link } from 'react-router-dom';

const Popular = () => {
    return(
        <div className="popular">
            <Container>
                <div className="popular-heading">
                    <div className="heading">
                        <h5><strong>Activity by themes</strong></h5>
                    </div>
                    <div className="buttons">
                        <Link to="/learn/" className="button button-fill">View All Activities</Link>
                    </div>
                </div>
                <PopularList />
            </Container>
        </div>
    );
}

export default Popular;