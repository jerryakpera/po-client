import { Link, NavLink } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { auth, signOut } from '../../config/firebase';

const HeaderNav = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <header className='px-4 bg-dark flex items-center  w-full'>
      <nav className='flex w-full gap-2 items-center pr-6'>
        <Link to='/'>
          <button className='text-accent border-0.5 border-accent h-10 w-10 flex items-center justify-center text-lg rounded-md'>
            <ion-icon name='home'></ion-icon>
          </button>
        </Link>

        <NavLink
          to='/exercises'
          className='text-accent text-md uppercase font-semibold tracking-wider'
        >
          Exercises
        </NavLink>

        <div className='w-full flex justify-end items-center'>
          <button
            className='text-accent items-center justify-center h-6 w-6 flex rounded-md'
            onClick={handleLogout}
          >
            <LogoutOutlinedIcon style={{ fontSize: '1.5em' }} />
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};
export default HeaderNav;
