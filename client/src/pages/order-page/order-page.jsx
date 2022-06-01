import React from 'react';
import Calculator from '../../components/calculator/calculator';
import Modal from '../../components/modal/modal';

const OrderPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px',
            }}
        >
            <Calculator />
            {/* <Modal
                name={'T-SHIRT'}
                img={'http://localhost:4000/jeans_bee.jpg'}
                size={'S'}
                sex="Female"
                material={'Catton'}
                style={'Aquarel'}
                isAvailable={true}
                price={500}
            /> */}
        </div>
    );
};

export default OrderPage;
