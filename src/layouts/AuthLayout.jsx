import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center bg-dark justify-center'>
      <div className='text-accent text-xl font-bold font3'>
        Welcome to Progressive Overload
      </div>
      <div className='w-5/6 bg-primary rounded-md shadow-md flex flex-col gap-2 p-1'>
        <div>
          <ul
            role='tablist'
            className='max-w-screen-xl mx-auto flex items-center gap-x-1 overflow-x-auto text-sm border-b-2 '
          >
            <div className='text-gray-300 auth-link'>
              <div
                role='tab'
                className='py-2.5 px-4 duration-150 font-medium'
              >
                Sign in
              </div>
            </div>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
