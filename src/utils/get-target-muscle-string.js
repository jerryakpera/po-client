export const getTargetMuscles = (target) => {
  return target?.Primary?.map((muscle) => muscle).join(', ');
};
