import { useState } from 'react';
import LoginModal from '../HomePage/LoginModal';
import RegisterModal from './RegisterModal';

const FormProvider = () => {
	const [formState, setFormState] = useState('login');

	return (
		<>
			{formState === 'login' ? (
				<LoginModal setFormState={setFormState} />
			) : (
				<RegisterModal setFormState={setFormState} />
			)}
		</>
	);
};

export default FormProvider;
