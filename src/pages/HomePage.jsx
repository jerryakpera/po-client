import { useEffect, useState } from 'react';

import { loadWorkoutExercises } from '../api/make-request';
import ExerciseCard from '../components/exercises/ExerciseCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const savedExercises = await loadWorkoutExercises();
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
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
