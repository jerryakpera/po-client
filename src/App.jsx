import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { ExercisesPage, HomePage } from './pages';
import { MainLayout } from './layouts';
import AddWorkout from './pages/AddWorkout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=''
      element={<MainLayout />}
    >
      <Route
        index
        element={<HomePage />}
      />

      <Route
        path='/exercises'
        element={<ExercisesPage />}
      />

      <Route
        path='workouts/:exerciseId/new'
        element={<AddWorkout />}
      />

      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
