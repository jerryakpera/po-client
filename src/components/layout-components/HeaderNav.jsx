import { Link, NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <header className='px-4 bg-dark flex items-center  w-full'>
      <nav className='flex w-full gap-2 items-center'>
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
      </nav>
    </header>
  );
};
export default HeaderNav;
