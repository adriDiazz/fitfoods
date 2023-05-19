const Input = ({ error, ...props }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start'
			}}
		>
			<input {...props} />
			{error && (
				<p
					style={{
						color: '#f24646',
						fontSize: '0.9rem',
						margin: 0,
						marginTop: '0.4rem'
					}}
				>
					{error}
				</p>
			)}
		</div>
	);
};

export default Input;
