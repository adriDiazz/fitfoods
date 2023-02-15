import style from './IconsRow.module.css';

const IconsRow = () => {
	return (
		<section>
			<div className={style.wrapper}>
				<div className={style.info}>
					<img src='gain.svg' alt='' />
					<h2>Gain</h2>
				</div>
				<div className={style.info}>
					<img src='eat.svg' alt='' />
					<h2>Eat</h2>
				</div>
				<div className={style.info}>
					<img src='plan.svg' alt='' />
					<h2>Plan</h2>
				</div>
			</div>
		</section>
	);
};

export default IconsRow;
