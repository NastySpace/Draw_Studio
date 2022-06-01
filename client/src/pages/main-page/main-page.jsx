import React from 'react';
import ProductList from '../../components/product-list/product-list';
import Sidebar from '../../components/sidebar/sidebar';

const MainPage = () => {
    return (
        <>
            <Sidebar />
            <ProductList />
        </>
    );
};

export default MainPage;
