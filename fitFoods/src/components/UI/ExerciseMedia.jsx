// eslint-disable-next-line react/prop-types
const ExerciseMedia = ({ url }) => {
	return (
		<video
			src={url}
			alt=''
			autoPlay
			style={{
				width: '100%',
				height: '10rem'
			}}
		/>
	);
};

export default ExerciseMedia;
