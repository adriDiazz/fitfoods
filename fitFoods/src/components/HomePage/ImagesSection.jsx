import style from './ImagesSection.module.css';

const ImagesSection = ({ img, text, reverse }) => {
	return reverse ? (
		<section>
			<div className={style.section}>
				<h2>{text}</h2>
				<img src={img} alt='' />
			</div>
		</section>
	) : (
		<section>
			<div className={style.section}>
				<img src={img} alt='' />
				<h2>{text}</h2>
			</div>
		</section>
	);
};

export default ImagesSection;
