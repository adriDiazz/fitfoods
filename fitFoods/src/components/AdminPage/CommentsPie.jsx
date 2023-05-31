import style from './Dashboard.module.css';
import { DonutChart } from '@tremor/react';

const valueFormatter = number =>
	`${Intl.NumberFormat('us').format(number).toString()}`;

const CommentsPie = ({ comments }) => {
	console.log(comments);
	return (
		<div className={style.commentsWrapper}>
			<h2 style={{ color: 'white' }}>{comments.title}</h2>
			<DonutChart
				data={comments.data}
				category='qty'
				index='name'
				valueFormatter={valueFormatter}
				variant='pie'
				colors={['lime', 'red']}
			/>
		</div>
	);
};

export default CommentsPie;
