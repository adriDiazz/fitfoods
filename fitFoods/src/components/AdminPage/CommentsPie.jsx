import style from './Dashboard.module.css';
import { DonutChart } from '@tremor/react';

const valueFormatter = number =>
	`${Intl.NumberFormat('us').format(number).toString()}`;

const CommentsPie = ({ comments }) => {
	console.log(comments);
	return (
		<div className={style.wrapper}>
			<DonutChart
				data={comments}
				category='qty'
				index='name'
				valueFormatter={valueFormatter}
				variant='pie'
			/>
		</div>
	);
};

export default CommentsPie;
