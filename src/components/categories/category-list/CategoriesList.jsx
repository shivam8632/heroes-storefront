import React from 'react';
import Container from 'react-bootstrap/Container';

import CategoryItem from '../category-item/CategoryItem';
import './categories-list.scss'

const CategoryList = () => {
    return(
        <div className="category-container">
            <Container>
                <div className="category-main">
                    <CategoryItem />
                </div>
            </Container>
        </div>
        
    )
}

export default CategoryList;