import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>This is categories {id}</h2>
        </div>
    );
};

export default Category;