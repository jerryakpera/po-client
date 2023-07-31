import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import { AuthLayout, MainLayout } from './layouts';
import { HomePage, LoginPage, NewWorkout, ExercisesPage } from './pages';
import { useContext } from 'react';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
};

const GuestRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to='/' />;
  }

  return <>{children}</>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path='login'
        element={
          <GuestRoute>
            <AuthLayout />
          </GuestRoute>
        }
      >
        <Route
          index
          element={<LoginPage />}
        />

        <Route
          to='*'
          element={<Navigate to='/auth/login' />}
        />

        {/* <Route
          path='register'
          element={<RegisterPage />}
        /> */}
      </Route>

      <Route
        path=''
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path='exercises'
          element={<ExercisesPage />}
        />

        <Route
          path='workouts/:exerciseId/new'
          element={<NewWorkout />}
        />

        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
