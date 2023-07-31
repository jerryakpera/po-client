import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { loadWorkoutExercises } from '../api/make-request';
import WorkoutCard from '../components/exercises/WorkoutCard';

const HomePage = () => {
  const { authUser } = useContext(AuthContext);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const savedExercises = await loadWorkoutExercises(authUser.uid);
      setExercises(savedExercises);
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <div className='flex items-center border border-accent rounded-full w-full pl-2'>
        <span className='text-accent text-lg flex items-center'>
          <ion-icon name='search'></ion-icon>
        </span>

        <input
          type='text'
          placeholder='search exercises'
          className='h-8 bg-transparent text-sm text-accent p-2 outline-none w-full'
        />
      </div>
      {!exercises.length && (
        <div className='text-light mt-2'>
          Go to{' '}
          <Link
            to='/exercises'
            className='text-positive font-bold'
          >
            exercises
          </Link>{' '}
          to create your first workout
        </div>
      )}
      <div className='mt-4 grid grid-cols-2 gap-2'>
        {exercises.map((exercise) => (
          <WorkoutCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
