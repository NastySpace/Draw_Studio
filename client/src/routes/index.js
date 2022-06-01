import OrderPage from '../pages/order-page/order-page';
import SketchPage from '../pages/sketch-page/sketch-page';

export const routes = [
    {
        key: 'order',
        path: 'order',
        element: <OrderPage />,
    },
    {
        key: 'sketch',
        path: 'sketch',
        element: <SketchPage />,
    },
];
