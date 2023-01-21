import { Home, LeftBar, Navbar, Profile, RightBar } from 'components';
import { Login, Register } from 'pages';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import './App.scss';

export const App = () => {
  const currentUser = false;

  const Layout = () => {
    return (
      <div>
        <Navbar />

        <div style={{ display: 'flex' }}>

          <LeftBar />
          <Outlet />
          <RightBar />

        </div>
      </div >
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />;
    }

    return children;
  };

  const router = createBrowserRouter([
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
  ]);


  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

