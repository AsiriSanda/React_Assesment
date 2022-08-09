import { Container } from '@material-ui/core';
import React from 'react';
import ProductManageForm from '../../components/ProductManageForm';
import './ProductManage.css';


const ProductManage = () => {
    return (
        <Container className="productManage__container">
            <div style={{
                display : 'flex',
                justifyContent : 'flex-start'
            }}>
                <h2>Product Manage</h2>
            </div>

            <ProductManageForm />

        </Container>
    );
}

export default ProductManage;
