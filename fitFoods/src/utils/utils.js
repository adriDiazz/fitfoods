export const getMuscleId = (topMuscles, currentMuscle) => {
	const muscleId = topMuscles.find(muscle => muscle.name === currentMuscle);
	return muscleId;
};

export const getMenu = (food, setMenu, calories) => {
	if (food.data.length > 0) {
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
		shuffleArray(food.data);
		let nBreakfast = 2;
		let nLunch = 2;
		let nDinner = 2;
		let nSnack = 1;
		let i = 0;
		const fArray = { breakfast: [], lunch: [], dinner: [], snack: [] };
		while (nBreakfast > 0 || nLunch > 0 || nDinner > 0 || nSnack > 0) {
			const fAdd = food.data[i];
			if (nBreakfast > 0 && fAdd.type === 'breakfast') {
				fArray.breakfast.push(fAdd);
				nBreakfast -= 1;
			}
			if (nLunch > 0 && fAdd.type === 'lunch') {
				fArray.lunch.push(fAdd);
				nLunch -= 1;
			}
			if (nDinner > 0 && fAdd.type === 'dinner') {
				fArray.dinner.push(fAdd);
				nDinner -= 1;
			}
			if (nSnack > 0 && fAdd.type === 'snack') {
				fArray.snack.push(fAdd);
				nSnack -= 1;
			}
			i++;
		}
		const sortedArr = [];
		fArray.breakfast.forEach(element => {
			sortedArr.push(element);
		});

		fArray.lunch.forEach(element => {
			sortedArr.push(element);
		});
		fArray.dinner.forEach(element => {
			sortedArr.push(element);
		});
		fArray.snack.forEach(element => {
			sortedArr.push(element);
		});

		sortedArr.map(e => {
			let percentage = 0;
			if (e.type === 'breakfast') {
				percentage = 0.2 / 2;
			}
			if (e.type === 'lunch') {
				percentage = 0.4 / 2;
			}
			if (e.type === 'dinner') {
				percentage = 0.3 / 2;
			}
			if (e.type === 'snack') {
				percentage = 0.1;
			}

			e.grams = Math.round((calories * percentage * 100) / e.calories);
			return e;
		});
		setMenu(menu => [...menu, ...sortedArr]);
	}
};
