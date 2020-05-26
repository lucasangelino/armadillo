import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({children}) => {
    return(
        <h3 className="categories__title">Mi lista {children}</h3>
        
    );
};

export default Categories;