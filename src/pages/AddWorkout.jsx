import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { createWorkout, loadExercise } from '../api/make-request';
import { saveWorkout } from '../api/save-workout';
import { getTargetMuscles } from '../utils/get-target-muscle-string';

const defaultWorkout = {
  weight: '',
  reps: '',
};

const AddWorkout = () => {
  const navigate = useNavigate();
  const { exerciseId } = useParams();

  const [exercise, setExercise] = useState({});

  const [workouts, setWorkouts] = useState({
    1: { ...defaultWorkout },
  });

  useEffect(() => {
    const fetchExercise = async () => {
      const excse = await loadExercise(exerciseId);
      setExercise(excse);
    };

    fetchExercise();
  }, []);

  const handleUpdate = (setNo, update) => {
    if (!setNo || !update) return;
    setWorkouts((prevWorkouts) => {
      const workout = prevWorkouts[setNo];
      const updatedWorkout = {
        ...workout,
        ...update,
      };

      const updatedWorkouts = {
        ...prevWorkouts,
      };
      updatedWorkouts[setNo] = updatedWorkout;

      return updatedWorkouts;
    });
  };

  const handleAddSet = () => {
    const lastWorkoutIndex = Object.keys(workouts).reverse()[0];
    const newWorkoutIndex = Number(lastWorkoutIndex) + 1;

    const lastWorkout = workouts[lastWorkoutIndex];
    if (!lastWorkout.weight || !lastWorkout.reps) {
      return;
    }

    const { weight, reps } = lastWorkout;
    const progressiveOverload = Number(weight) * Number(reps);

    setWorkouts((prevWorkouts) => {
      const update = {
        ...prevWorkouts,
      };
      update[lastWorkoutIndex].progressiveOverload = progressiveOverload;
      update[newWorkoutIndex] = defaultWorkout;

      return update;
    });
  };

  const handleRemoveSet = () => {
    const lastWorkoutIndex = Number(Object.keys(workouts).reverse()[0]);
    if (lastWorkoutIndex === 1) return;

    setWorkouts((prevWorkouts) => {
      const update = {};

      Object.keys(workouts).filter((key) => {
        const currentIndex = Number(key);

        if (currentIndex < lastWorkoutIndex) {
          update[currentIndex] = prevWorkouts[currentIndex];
        }
      });

      return update;
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const payload = {
      sets: workouts,
      exerciseId,
    };

    await createWorkout(payload);
    navigate('/');
  };

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-4 items-center justify-between'>
        <div className='text-sm text-accent'>
          {getTargetMuscles(exercise?.target)}
        </div>

        <div className='text-accent'>|</div>

        <div className='text-sm text-accent'>{exercise?.Category}</div>

        <div className='text-accent'>|</div>

        <div className='text-sm text-accent'>{exercise?.Difficulty}</div>
      </div>

      <div>
        <div className='text-white text-xl font-semibold font2 tracking-wide'>
          {exercise?.exercise_name}
        </div>
        <div className='text-sm text-white'>
          {exercise?.steps?.map((step, i) => (
            <div key={i}>
              <div>
                {i + 1}. {step}
                {i < exercise?.steps?.length - 1 && (
                  <hr className='border-primary my-1' />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <form
        autoComplete='off'
        className='mt-4'
      >
        {/* <div className='text-md text-white'>Add workout</div> */}
        {Object.keys(workouts).map((setNo) => (
          <div
            key={setNo}
            className='grid grid-cols-4 gap-4 my-3 new-workout'
          >
            <div className='form-group flex flex-col'>
              <label
                htmlFor='set'
                className='text-grey uppercase text-xs tracking-widest'
              >
                Set
              </label>
              <div className='bg-grey flex justify-center items-center h-full text-md text-center text-gray-800 font-bold outline-none'>
                {setNo}
              </div>
            </div>

            <div className='form-group flex flex-col'>
              <label
                htmlFor='weight'
                className='text-white uppercase text-xs tracking-widest'
              >
                Kgs
              </label>
              <input
                id='weight'
                type='number'
                name='weight'
                placeholder='10'
                onChange={(e) =>
                  handleUpdate(setNo, { weight: e.target.value })
                }
                value={workouts[setNo]?.weight}
                className='h-full border-2 border-negative text-md text-center text-negative font-bold rounded-sm outline-none'
              />
            </div>

            <div className='form-group flex flex-col'>
              <label
                htmlFor='reps'
                className='text-white uppercase text-xs tracking-widest'
              >
                Reps
              </label>
              <input
                id='reps'
                type='number'
                name='reps'
                placeholder='10'
                value={workouts[setNo]?.reps}
                onChange={(e) => handleUpdate(setNo, { reps: e.target.value })}
                className='h-full border-2 border-blue-600 text-blue-600 text-md text-center font-bold rounded-sm outline-none'
              />
            </div>

            <div className='form-group flex flex-col'>
              <label
                htmlFor='overload'
                className='ml-1 text-white uppercase text-xs tracking-widest'
              >
                Overload
              </label>
              <div className='bg-grey flex justify-center items-center h-10 text-md text-center text-gray-800 font-bold outline-none'>
                {workouts[setNo]?.progressiveOverload}
              </div>
            </div>
          </div>
        ))}

        <div className='flex gap-2'>
          <button
            type='button'
            className='w-2/5 h-10 bg-negative font-semibold font3 text-white rounded-md uppercase text-sm tracking-widest'
            onClick={(e) => handleRemoveSet()}
          >
            Remove set
          </button>

          <button
            type='button'
            className='w-2/5 h-10 bg-link text-white font-semibold font3 rounded-md uppercase text-sm tracking-widest'
            onClick={(e) => handleAddSet(e)}
          >
            Add set
          </button>
          <button
            type='button'
            className='w-1/5 h-10 bg-positive text-white rounded-md text-xl flex items-center justify-center tracking-widest'
            onClick={(e) => handleSubmitForm(e)}
          >
            <ion-icon name='save-outline'></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWorkout;
