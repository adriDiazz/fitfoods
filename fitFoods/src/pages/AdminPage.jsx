import { AreaChart, Card, Title, Grid, Col, Text, Metric } from '@tremor/react';
import style from './AdminPage.module.css';

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

const dataFormatter = number => {
	return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const AdminPage = () => {
	return (
		<div className={style.wrapper}>
			<Grid numCols={1} numColsSm={2} numColsLg={3}>
				<Col numColSpan={1} numColSpanLg={2}>
					<Card></Card>
				</Col>
			</Grid>
		</div>
	);
};

export default AdminPage;
