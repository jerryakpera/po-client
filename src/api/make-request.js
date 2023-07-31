import { api } from '../utils/po-api';

export const loadExercise = async (exerciseId) => {
  try {
    const { data } = await api.get(`/exercises/${exerciseId}`);
    const { exercise } = data;

    return exercise;
  } catch (e) {
    console.log(e);
  }
};

export const loadExercises = async () => {
  try {
    const { data } = await api.get('/exercises');
    const { exercises } = data;

    return exercises;
  } catch (e) {
    console.log(e);
  }
};

export const loadWorkoutExercises = async () => {
  try {
    const { data } = await api.get('/exercises/workouts');
    const { exercises } = data;

    return exercises;
  } catch (e) {
    console.log(e);
  }
};

export const loadWorkouts = async () => {
  try {
    const { data } = await api.get('/workouts');
    const { workouts } = data;

    return workouts;
  } catch (e) {
    console.log(e);
  }
};

export const createWorkout = async (payload) => {
  try {
    await api.post('/workouts', payload);
  } catch (e) {
    console.log(e);
  }
};
