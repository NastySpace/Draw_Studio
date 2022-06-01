import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import { routes } from '../routes';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ element, ...props }) => (
                <Route element={element} {...props} />
            ))}
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
