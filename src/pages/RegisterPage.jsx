import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterPage = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // const signIn

  return (
    <form className='flex flex-col gap-2'>
      <input
        type='text'
        name='email'
        value={user.email}
        placeholder='email'
        className='w-full p-2 text-sm text-gray-600 rounded-md'
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <input
        type='text'
        name='username'
        value={user.username}
        placeholder='username'
        className='w-full p-2 text-sm text-gray-600 rounded-md'
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <input
        type='password'
        name='password'
        value={user.password}
        placeholder='password'
        className='w-full p-2 text-sm text-gray-600 rounded-md'
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <input
        type='password'
        name='confirmPassword'
        value={user.confirmPassword}
        placeholder='confirm password'
        className='w-full p-2 text-sm text-gray-600 rounded-md'
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
      />

      <button
        type='submit'
        className='bg-positive h-8 text-md font-semibold text-light rounded-md mt-1'
      >
        Register
      </button>

      <button
        type='submit'
        className='bg-blue-600 h-8 text-md font-semibold text-light rounded-md flex items-center justify-center gap-x-1'
      >
        <GoogleIcon
          className='text-xs'
          style={{ fontSize: '1em' }}
        />
        Google
      </button>
    </form>
  );
};
export default RegisterPage;
