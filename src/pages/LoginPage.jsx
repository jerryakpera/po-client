import GoogleIcon from '@mui/icons-material/Google';
import { auth, signInWithPopup, GoogleAuthProvider } from '../config/firebase';

const LoginPage = () => {
  const provider = new GoogleAuthProvider();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log({ errorCode });
      console.log({ errorMessage });
    }
  };

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={(e) => signIn(e)}
    >
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

export default LoginPage;
