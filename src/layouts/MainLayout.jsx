import { Outlet } from 'react-router-dom';
import { HeaderNav } from '../components';

const MainLayout = () => {
  return (
    <>
      <div className=''>
        <HeaderNav />
        <div className='main-layout-outlet h-screen bg-dark'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
