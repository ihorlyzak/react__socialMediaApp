import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = (children) => {
    const currentUser = false;

    if (!currentUser) {
        return <Navigate to='/login' />;
    }

    return children;
};
