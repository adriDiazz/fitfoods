export const getMuscleId = (topMuscles, currentMuscle) => {
	const muscleId = topMuscles.find(muscle => muscle.name === currentMuscle);
	return muscleId;
};
