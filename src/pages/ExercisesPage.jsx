import { useEffect, useState } from 'react';

import { loadExercises } from '../api/make-request';
import ExerciseCard from '../components/exercises/ExerciseCard';

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const savedExercises = await loadExercises();
      setExercises(savedExercises);
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <div className='text-accent uppercase text-sm'>Browse Exercises</div>
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
