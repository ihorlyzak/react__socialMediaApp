import { Home, Profile } from 'components';
import { Register } from 'pages/register/Register';
import { Login } from 'pages/login/Login';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'layouts';

import { ProtectedRoute } from './protectedRoute';

export const appRoutes = createBrowserRouter(
    [
        {
            path: '/',
            element: <ProtectedRoute><Layout /></ProtectedRoute>,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/profile/:id',
                    element: <Profile />,
                },
            ],
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
    ]
);