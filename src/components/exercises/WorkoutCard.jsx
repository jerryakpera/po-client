import { Link } from 'react-router-dom';
import { getTargetMuscles } from '../../utils/get-target-muscle-string';

import ProgressiveArrows from './ProgressiveArrows';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className='bg-primary rounded-md p-2 flex flex-col gap-2'>
      <div className='text-xs text-light'>
        <div className={exercise?.workouts?.length ? 'text-accent' : ''}>
          {getTargetMuscles(exercise.target)}
        </div>
      </div>
      <div className='flex flex-col justify-between h-full gap-6'>
        <div className='text-sm leading-none text-white font-semibold'>
          {exercise.exercise_name}
        </div>

        {exercise?.workouts?.length && (
          <ProgressiveArrows workouts={exercise.workouts} />
        )}

        <div>
          <Link to={`/workouts/${exercise._id}/new`}>
            <button className='rounded-full py-1 w-full border border-light text-light flex items-center justify-center gap-2 text-sm uppercase tracking-wide font-semibold'>
              <ion-icon name='barbell-outline'></ion-icon>
              Workout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
