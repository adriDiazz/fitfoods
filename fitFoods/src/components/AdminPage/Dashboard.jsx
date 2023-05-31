import style from './Dashboard.module.css';
import { AreaChart, BarChart } from '@tremor/react';

import { getAllExecisesbyMuscleId } from '../../utils/services';

import { useState, useEffect } from 'react';

const chartdata = [
	{
		date: 'Jan 22',
		SemiAnalysis: 2890,
		'The Pragmatic Engineer': 2338
	},
	{
		date: 'Feb 22',
		SemiAnalysis: 2756,
		'The Pragmatic Engineer': 2103
	},
	{
		date: 'Mar 22',
		SemiAnalysis: 3322,
		'The Pragmatic Engineer': 2194
	},
	{
		date: 'Apr 22',
		SemiAnalysis: 3470,
		'The Pragmatic Engineer': 2108
	},
	{
		date: 'May 22',
		SemiAnalysis: 3475,
		'The Pragmatic Engineer': 1812
	},
	{
		date: 'Jun 22',
		SemiAnalysis: 3129,
		'The Pragmatic Engineer': 1726
	}
];

const chartdata2 = [
	{
		name: 'Amphibians',
		'Numero de ejercicios': 15
	},
	{
		name: 'Birds',
		'Numero de ejercicios': 40
	},
	{
		name: 'Crustaceans',
		'Numero de ejercicios': 30
	}
];

const dataFormatter = number => {
	return Intl.NumberFormat('us').format(number).toString();
};

const Dashboard = () => {
	const [ejercicios, setEjercicios] = useState();

	useEffect(() => {
		getAllExecisesbyMuscleId(setEjercicios);
	}, []);

	const musculos = ejercicios?.data.musclos;
	const exerciseCountByMuscle = ejercicios?.data.exerciseCountByMuscle;

	const chartdata3 = musculos.map(musculo => ({
		name: musculo.name,
		'Numero de ejercicios': exerciseCountByMuscle[musculo.id]
	}));

	console.log(chartdata3);

	return (
		<div className={style.wrapper}>
			<AreaChart
				data={chartdata}
				index='date'
				categories={['SemiAnalysis', 'The Pragmatic Engineer']}
				colors={['indigo', 'cyan']}
				valueFormatter={dataFormatter}
			/>
			<h1>Ejercicios por Músculo</h1>
			<BarChart
				data={chartdata3}
				index='name'
				categories={['Numero de ejercicios']}
				colors={['lime']}
				valueFormatter={dataFormatter}
				yAxisWidth={48}
			/>
		</div>
	);
};

export default Dashboard;
