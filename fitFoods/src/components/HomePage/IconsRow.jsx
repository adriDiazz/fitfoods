import { ProvideText } from '../../context/Languaje';
import style from './IconsRow.module.css';

const IconsRow = () => {
	return (
		<section>
			<div className={style.wrapper}>
				<div className={style.info}>
					<img src='gain.svg' alt='' />
					<h2>
						<ProvideText es='Gana' en='Gain' />
					</h2>
				</div>
				<div className={style.info}>
					<img src='eat.svg' alt='' />
					<h2>
						<ProvideText es='Come' en='Eat' />
					</h2>
				</div>
				<div className={style.info}>
					<img src='plan.svg' alt='' />
					<h2>
						<ProvideText es='Planea' en='Plan' />
					</h2>
				</div>
			</div>
		</section>
	);
};

export default IconsRow;
