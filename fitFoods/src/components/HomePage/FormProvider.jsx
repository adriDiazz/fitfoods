import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const FormProvider = ({ setOpened }) => {
	const [formState, setFormState] = useState('login');

	return (
		<>
			{formState === 'login' ? (
				<LoginModal setFormState={setFormState} setOpened={setOpened} />
			) : (
				<RegisterModal setFormState={setFormState} />
			)}
		</>
	);
};

export default FormProvider;
