import { RouterProvider } from 'react-router-dom';
import { appRoutes } from 'routes/appRoutes';
import './App.scss';

export const App = () => {

  return (
    <div className='App'>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

