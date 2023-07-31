import ProgressiveArrow from './ProgressiveArrow';

const ProgressiveArrows = ({ workouts }) => {
  return (
    <div className='flex items-center gap-1'>
      {workouts?.map((workout) => (
        <ProgressiveArrow
          key={workout._id}
          progression={workout.progression || 0}
        />
      ))}
    </div>
  );
};

export default ProgressiveArrows;
