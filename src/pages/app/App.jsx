import { Home, LeftBar, Navbar, Profile, RightBar } from 'components';
import { Login, Register } from 'pages';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import './App.scss';

export const App = () => {
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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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

