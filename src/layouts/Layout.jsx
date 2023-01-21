import { Outlet } from 'react-router-dom';
import { LeftBar, Navbar, RightBar } from 'components';

export const Layout = () => {
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